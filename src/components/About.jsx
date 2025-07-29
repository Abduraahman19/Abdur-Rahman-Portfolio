import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const controls = useAnimation();
  const floatingControls = useAnimation();
  const containerRef = useRef(null);

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Vite",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "HTML5/CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Git/GitHub",
    "Shopify Management",
    "Facebook/Google Ads",
    "YouTube/TikTok Ads",
    "Vercel/Netlify",
  ];

  // Floating animation sequence
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      const floatSequence = async () => {
        while (inView) {
          await floatingControls.start({
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
            transition: { 
              duration: 6,
              ease: "easeInOut"
            }
          });
        }
      };
      floatSequence();
    }
  }, [inView, controls, floatingControls]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        floatingControls.start({
          x: (x - centerX) / 30,
          y: (y - centerY) / 30,
          transition: { type: "spring", stiffness: 100, damping: 10 }
        });
      }
    };

    if (inView) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [inView, floatingControls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Skill item animation
  const skillItem = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      x: 10,
      transition: { 
        type: "spring",
        stiffness: 300,
      }
    }
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 px-6 sm:px-12 lg:px-24 relative bg-white dark:bg-gray-900 overflow-hidden"
      aria-label="About section"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={floatingControls}
          className="absolute left-[calc(50%-11rem)] top-[calc(100%-30rem)] w-[72.1875rem] blur-[10rem] sm:left-[calc(50%-30rem)] sm:top-[calc(100%-45rem)]"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-500 to-pink-600 opacity-30 dark:opacity-20 rotate-[30deg] rounded-full" />
        </motion.div>

        {/* Additional floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-teal-400/20 dark:bg-teal-400/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.3, 0.8, 0.3],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 flex items-center"
          >
            <motion.span 
              className="text-teal-500 dark:text-teal-400 font-mono text-lg md:text-xl mr-4"
              animate={{
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }
              }}
            >
              01.
            </motion.span>
            About Me
            <motion.span 
              className="hidden md:inline-block h-px w-32 bg-teal-500 dark:bg-teal-400 ml-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div variants={container} className="lg:w-2/3 space-y-6">
              <motion.p
                variants={item}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              >
                I'm a passionate web developer with 6-7 months of internship
                experience in web development. During my internship, I worked
                with modern technologies to build responsive and interactive web
                applications.
              </motion.p>

              <motion.p
                variants={item}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              >
                Beyond web development, I'm proficient in managing Shopify
                stores (though not developing them from scratch through coding).
                I can handle all aspects of store management including setup,
                product listing, theme customization, and general maintenance.
              </motion.p>

              <motion.p
                variants={item}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              >
                Additionally, I have skills in running digital ads across
                platforms like Facebook, Google, YouTube, TikTok, and Instagram.
                While I haven't had professional experience in this area yet,
                I'm confident in my ability to create and manage effective ad
                campaigns.
              </motion.p>

              <motion.p
                variants={item}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              >
                Here are the technologies and platforms I work with:
              </motion.p>

              <motion.ul
                variants={container}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6"
              >
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    variants={skillItem}
                    className="flex items-center gap-3 group"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    custom={index}
                  >
                    <motion.span 
                      className="text-teal-500 dark:text-teal-400"
                      animate={{
                        rotate: [0, 20, 0],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }
                      }}
                    >
                      ▹
                    </motion.span>
                    <span className="text-gray-800 dark:text-gray-200">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={item}
              className="lg:w-1/3 flex justify-center"
              whileHover="hover"
            >
              <div className="relative w-64 h-64 group">
                <motion.div 
                  className="absolute inset-0 border-2 border-teal-500 dark:border-teal-400 rounded-xl transition-all duration-300"
                  variants={{
                    hover: { 
                      translateX: 8,
                      translateY: 8,
                      transition: { type: "spring", stiffness: 300 }
                    }
                  }}
                />
                <div className="relative w-full h-full bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300">
                  <motion.img
                    src="/PPP.jpg"
                    alt="Abdur Rahman"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    animate={floatingVariants}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-white font-medium">Abdur Rahman</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;