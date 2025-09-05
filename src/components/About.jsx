import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaShopify, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiFirebase, SiTailwindcss, SiVercel, SiExpress, SiVite } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { RiFacebookFill, RiGoogleFill, RiYoutubeFill, RiTiktokFill, RiInstagramFill } from "react-icons/ri";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const controls = useAnimation();
  const floatingControls = useAnimation();
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("development");

  // Enhanced skill icons mapping with better colors and animations
  const skillIcons = {
    "JavaScript (ES6+)": <TbBrandJavascript className="text-yellow-400 group-hover:text-yellow-300" />,
    "TypeScript": <SiTypescript className="text-blue-600 group-hover:text-blue-500" />,
    "React.js": <FaReact className="text-blue-500 group-hover:text-blue-400" />,
    "Next.js": <SiNextdotjs className="text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300" />,
    "Vite": <SiVite className="text-purple-500 group-hover:text-purple-400" />,
    "Node.js": <FaNodeJs className="text-green-600 group-hover:text-green-500" />,
    "Express": <SiExpress className="text-gray-600 dark:text-gray-400 group-hover:text-gray-500" />,
    "MongoDB": <SiMongodb className="text-green-500 group-hover:text-green-400" />,
    "Firebase": <SiFirebase className="text-orange-500 group-hover:text-orange-400" />,
    "HTML5/CSS3": <FaHtml5 className="text-orange-600 group-hover:text-orange-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-500 group-hover:text-cyan-400" />,
    "Git/GitHub": <FaGitAlt className="text-orange-600 group-hover:text-orange-500" />,
    "Shopify Management": <FaShopify className="text-green-700 group-hover:text-green-600" />,
    "Facebook/Google Ads": <RiFacebookFill className="text-blue-700 group-hover:text-blue-600" />,
    "YouTube/TikTok Ads": <RiYoutubeFill className="text-red-600 group-hover:text-red-500" />,
    "Instagram Ads": <RiInstagramFill className="text-pink-600 group-hover:text-pink-500" />,
    "Vercel/Netlify": <SiVercel className="text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300" />,
  };

  const skills = {
    development: [
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
      "Git/GitHub",
      "Vercel/Netlify",
    ],
    ecommerce: [
      "Shopify Management",
      "Product Listing",
      "Theme Customization",
      "Store Maintenance",
      "Payment Gateway Setup",
    ],
    marketing: [
      "Facebook/Google Ads",
      "YouTube/TikTok Ads",
      "Instagram Ads",
      "Ad Campaign Management",
      "Audience Targeting",
    ]
  };

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
              duration: 8,
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
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Skill item animation
  const skillItem = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
    hover: {
      scale: 1.05,
      x: 10,
      transition: {
        type: "spring",
        stiffness: 300,
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 px-6 sm:px-12 lg:px-24 relative bg-gradient-to-br from-gray-50/30 to-gray-100/30 dark:from-gray-900/30 dark:to-gray-950/30 overflow-hidden"
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
        {[...Array(12)].map((_, i) => (
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
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 60],
              opacity: [0.3, 0.8, 0.3],
              transition: {
                duration: Math.random() * 15 + 15,
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
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 flex items-center"
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
            <span className="text-teal-500 dark:text-teal-400">About</span> Me
            <motion.span
              className="hidden md:inline-block h-px w-32 bg-teal-500 dark:bg-teal-400 ml-6 flex-grow"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div variants={container} className="lg:w-2/3 space-y-8">
              <motion.div
                variants={item}
                className="space-y-6"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-teal-50/80 to-cyan-50/80 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-200/50 dark:border-teal-700/50">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed ml-8">
                    I'm a passionate <span className="font-semibold text-teal-600 dark:text-teal-400">full-stack developer</span> with 6-7 months of hands-on internship experience. I specialize in building modern, responsive web applications using cutting-edge technologies.
                  </p>
                </div>

                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-700/50">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-2000"></div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed ml-8">
                    Beyond development, I excel in <span className="font-semibold text-purple-600 dark:text-purple-400">e-commerce management</span> with Shopify, handling everything from store setup to theme customization and maintenance.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="space-y-6">
                <div className="flex space-x-2 border-b border-gray-200 dark:border-gray-700">
                  {Object.keys(skills).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 text-sm font-medium relative ${activeTab === tab ? 'text-teal-500 dark:text-teal-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {activeTab === tab && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 dark:bg-teal-400"
                          layoutId="tabUnderline"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {skills[activeTab].map((skill, index) => (
                      <motion.div
                        key={skill}
                        variants={skillItem}
                        custom={index}
                        className="group relative"
                        whileHover="hover"
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
                          <motion.span
                            className="text-teal-500 dark:text-teal-400 text-xl"
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
                          <div className="flex items-center gap-3 flex-1">
                            {skillIcons[skill] && (
                              <motion.span 
                                className="text-2xl"
                                whileHover={{ 
                                  scale: 1.2,
                                  rotate: [0, -10, 10, 0],
                                  transition: { duration: 0.3 }
                                }}
                              >
                                {skillIcons[skill]}
                              </motion.span>
                            )}
                            <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                              {skill}
                            </span>
                          </div>
                          <motion.div
                            className="w-2 h-2 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                        </div>
                        
                        {/* Hover glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 -z-10 blur-xl"
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
              <motion.div
                variants={item}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/50 dark:border-blue-700/50"
              >
                <div className="absolute top-4 left-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-4000"></div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed ml-8">
                  I also bring expertise in <span className="font-semibold text-blue-600 dark:text-blue-400">digital marketing</span>, creating and managing ad campaigns across Facebook, Google, YouTube, TikTok, and Instagram with a focus on ROI optimization.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={item}
              className="lg:w-1/3 flex justify-center"
              whileHover="hover"
            >
              <div className="relative w-72 h-72 group">
                <motion.div
                  className="absolute inset-0 border-4 border-teal-500 dark:border-teal-400 rounded-2xl transition-all duration-300"
                  variants={{
                    hover: {
                      translateX: 8,
                      translateY: 8,
                      transition: { type: "spring", stiffness: 300 }
                    }
                  }}
                />
                <div className="relative w-full h-full bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl">
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
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 right-0 p-6 opacity-0 group-hover:opacity-100"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-white mb-1 bg-black/50 rounded-md py-1 w-40 text-center text-base font-bold">Abdur Rahman</h3>
                    <p className="text-teal-300 bg-black/50 rounded-md py-1 w-40 text-center text-sm">Full Stack Developer</p>
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