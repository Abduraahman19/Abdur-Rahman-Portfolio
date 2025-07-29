// components/Hero.jsx
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [hoverState, setHoverState] = useState(false)

  // Track cursor position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Background gradient animation
  useEffect(() => {
    if (isInView) {
      controls.start({
        backgroundPosition: ['0% 0%', '100% 100%'],
        transition: { duration: 15, repeat: Infinity, repeatType: 'reverse' }
      })
    }
  }, [isInView, controls])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  }

  const item = {
    hidden: {
      y: 30,
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 0.3,
      transition: { duration: 1.5, delay: 0.5 }
    }
  }

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.98 }
  }

  // Floating tech icons animation
  const techIcons = [
    { icon: "🚀", size: "text-2xl", delay: 0.1 },
    { icon: "💻", size: "text-3xl", delay: 0.3 },
    { icon: "🔗", size: "text-xl", delay: 0.5 },
    { icon: "🌐", size: "text-2xl", delay: 0.2 },
    { icon: "📱", size: "text-3xl", delay: 0.4 }
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 relative overflow-hidden isolate"
      aria-label="Hero section"
      ref={ref}
    >
      {/* Dynamic background with parallax effect */}
      <motion.div
        className="absolute inset-0 -z-20 overflow-hidden"
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={backgroundVariants}
        style={{
          background: `linear-gradient(${45 + cursorPos.x * 10}deg, 
            rgba(16, 185, 129, 0.1) 0%, 
            rgba(6, 182, 212, 0.15) 50%, 
            rgba(59, 130, 246, 0.1) 100%)`,
          transform: `translate(${cursorPos.x * 20}px, ${cursorPos.y * 20}px)`
        }}
      />

      {/* Floating tech icons */}
      <AnimatePresence>
        {isInView && techIcons.map((tech, i) => (
          <motion.div
            key={i}
            className={`absolute ${tech.size} text-teal-400/30 dark:text-teal-500/30`}
            initial={{ 
              opacity: 0,
              y: 100,
              x: Math.random() * 100 - 50
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [100, -100],
              x: [tech.x, tech.x + Math.random() * 40 - 20],
              rotate: [0, 360],
              transition: {
                duration: 15 + Math.random() * 10,
                delay: tech.delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 5,
                ease: "linear"
              }
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-4xl"
      >
        <motion.p
          variants={item}
          className="text-teal-500 dark:text-teal-400 mb-4 font-mono text-lg md:text-xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: { delay: 0.3 }
            } : {}}
          >
            Hi, my name is
          </motion.span>
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight"
        >
          <motion.span 
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.4 }
            } : {}}
          >
            Abdur
          </motion.span>{' '}
          <motion.span
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { 
              opacity: 1, 
              x: 0,
              transition: { 
                delay: 0.6, 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 10
              }
            } : {}}
            whileHover={{
              scale: 1.05,
              backgroundPosition: ['0% 50%', '100% 50%'],
              transition: { 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            Rahman.
          </motion.span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-600 dark:text-gray-300 mb-6 leading-tight"
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: { delay: 0.8 }
            } : {}}
          >
            I build{' '}
            <motion.span
              className="relative"
              animate={isInView ? "float" : {}}
              variants={floatingVariants}
              onHoverStart={() => setHoverState(true)}
              onHoverEnd={() => setHoverState(false)}
            >
              <span className="relative z-10">digital</span>
              <AnimatePresence>
                {hoverState && (
                  <motion.span
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-400/30 to-cyan-500/30 dark:from-teal-400/20 dark:to-cyan-500/20 blur-lg rounded-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.span>{' '}
            experiences.
          </motion.span>
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-700 dark:text-gray-300 max-w-2xl mb-10 text-lg md:text-xl leading-relaxed"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: { delay: 1.0 }
            } : {}}
          >
            I'm a full-stack developer specializing in building (and occasionally designing)
            exceptional digital experiences.
          </motion.span>{' '}
          <motion.span
            className="font-medium text-teal-600 dark:text-teal-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: { delay: 1.2 }
            } : {}}
          >
            Currently focused on creating accessible, human-centered products.
          </motion.span>
        </motion.p>

        <motion.div
          variants={item}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          animate="rest"
          className="relative"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-lg font-medium group relative overflow-hidden"
            aria-label="Contact me"
            onMouseEnter={() => controls.start("hover")}
            onMouseLeave={() => controls.start("rest")}
          >
            {/* Animated background layers */}
            <motion.span
              className="absolute inset-0 border-2 border-teal-500 dark:border-teal-400 rounded-lg"
              variants={{
                rest: { opacity: 1 },
                hover: { opacity: 0.8 }
              }}
            />

            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg"
              variants={{
                rest: { opacity: 0, x: "-100%" },
                hover: {
                  opacity: 0.1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                },
                tap: { opacity: 0.15 }
              }}
            />

            {/* Ripple effect */}
            <motion.span
              className="absolute inset-0 rounded-lg overflow-hidden"
            >
              <motion.span
                className="absolute bg-teal-400/20 rounded-full"
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: 4,
                  opacity: 0,
                  transition: { duration: 1 }
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  x: "-50%",
                  y: "-50%",
                  top: "50%",
                  left: "50%"
                }}
              />
            </motion.span>

            {/* Content */}
            <motion.span
              className="relative z-10 text-teal-500 dark:text-teal-400 flex items-center"
              variants={{
                hover: {
                  color: ["#0d9488", "#0891b2", "#0d9488"],
                  transition: { duration: 1.5, repeat: Infinity }
                }
              }}
            >
              Get In Touch
              <motion.span
                className="ml-2"
                variants={{
                  hover: {
                    x: [0, 4, 0],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity
                    }
                  },
                  tap: {
                    x: 2
                  }
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.span>
            </motion.span>

            {/* Sparkle particles */}
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-teal-400/80 pointer-events-none"
                variants={{
                  rest: { opacity: 0 },
                  hover: {
                    opacity: [0, 1, 0],
                    y: [0, -10],
                    x: [0, (i % 2 === 0 ? -1 : 1) * Math.random() * 20],
                    scale: [0.5, 1.2],
                    transition: {
                      duration: 1,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 3
                    }
                  }
                }}
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 60 + 20}%`
                }}
              />
            ))}
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative animated circles */}
      <motion.div
        className="absolute right-10 bottom-20 hidden lg:block"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 0.8, y: 0 } : {}}
        transition={{ delay: 1.5 }}
      >
        <div className="relative w-32 h-32">
          <motion.div
            className="absolute inset-0 border-2 border-teal-400/30 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
              transition: {
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
          <motion.div
            className="absolute inset-4 border-2 border-cyan-400/30 rounded-full"
            animate={{
              rotate: -360,
              scale: [1, 0.8, 1],
              transition: {
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        </div>
      </motion.div>

      {/* Cursor follower effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full bg-teal-400/10 dark:bg-cyan-500/10 pointer-events-none -z-10"
        animate={{
          x: cursorPos.x * 100 - 48,
          y: cursorPos.y * 100 - 48,
          transition: { type: "spring", stiffness: 100, damping: 20 }
        }}
      />
    </section>
  )
}

export default Hero