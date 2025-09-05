import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FiExternalLink, FiGithub, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { TbBrandNextjs, TbBrandReact, TbBrandFirebase, TbBrandMongodb } from "react-icons/tb";
import { SiTailwindcss, SiTypescript, SiStripe, SiPaypal } from "react-icons/si";

// Tech icons mapping for better visual representation
const techIcons = {
  "Next.js": <TbBrandNextjs className="text-gray-700 dark:text-gray-300" />,
  "React": <TbBrandReact className="text-blue-500" />,
  "Firebase": <TbBrandFirebase className="text-orange-500" />,
  "MongoDB": <TbBrandMongodb className="text-green-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "Integrate Stripe": <SiStripe className="text-purple-500" />,
  "Integrate PayPal": <SiPaypal className="text-blue-700" />,
  // Add more icons as needed
};

const projects = [
  {
    title: "Real-Time ChatApp",
    description:"This is a professional real-time Chat App with a clean and modern interface, secure user authentication, and smooth messaging functionality. It showcases your skills in real-time communication, UI/UX design, and frontend-backend integration.",
    tags: ["Next.js", "Mui", "Tailwind css", "Firebase"],
    github: "#",
    live: "https://chat-app-professional.vercel.app/",
    image: "/p3.jpg",
  },
  {
    title: "Task Management App",
    description:"This is a Sticky Wall To-Do App that allows users to create and organize tasks visually using colorful sticky notes. With its interactive and user-friendly interface, it offers an engaging way to manage daily tasks. This project showcases your skills in dynamic UI design, state management, and responsive frontend development.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "https://sticky-wall-todo.netlify.app/",
    image: "/p2.jpg",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured E-Commerce platform built for both users and admins. It includes secure payment gateways like Crypto, PayPal, Stripe, and local payment integration. With user-friendly shopping, real-time order tracking, and a powerful admin dashboard for managing products, orders, and payments—this project is designed to showcase advanced e-commerce functionality with modern tech.",
    tags: ["Vite React.js", "Integrate Stripe", "MongoDB", "TypeScript", "Tailwind CSS", "Integrate PayPal", "Integrate NowPayments"],
    github: "#",
    live: "#",
    image: "/p1.jpg",
  },
  {
    title: "QR Code Generator",
    description: "A lightweight and responsive QR code generator web app. Users can instantly create QR codes by entering any text or URL. Built with modern technologies to ensure speed, simplicity, and mobile-friendliness.",
    tags: ["Vite React", "Framer Motion", "Tailwind CSS", "JavaScript"],
    github: "#",
    live: "https://qr-code-generator-seven-sooty.vercel.app/",
    image: "/qr.png"
  },
  {
    title: "Real-Time Weather App",
    description: "A real-time weather application that provides accurate weather updates for any location. Users can search by city name to get current temperature, conditions, and location details. Built using modern web technologies for a fast and responsive user experience.",
    tags: ["Next.js", "JavaScript", "Framer Motion", "Tailwind CSS", "OpenWeatherMap API"],
    github: "#",
    live: "https://real-time-weather-app-lime.vercel.app/?location=faisalabad",
    image: "/weather.png"
  },
  {
    title: "AI Chat Assistant",
    description: "This is a smart AI chat assistant with a clean UI, built for real-time conversations. It showcases AI integration and responsive frontend design.",
    tags: ["Next.js", "Gemini API Integration", "Geolocation", "Tailwind CSS"],
    github: "#",
    live: "https://ai-chat-assistant-pi.vercel.app/",
    image: "/Chat.png"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [showAllProjects, setShowAllProjects] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const visibleProjects = showAllProjects ? projects.length : 3;

  const toggleProjectsVisibility = () => {
    setShowAllProjects(!showAllProjects);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { 
      y: 60, 
      opacity: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-28 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-950/50 overflow-hidden"
      aria-label="Projects section"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-teal-400/20 dark:bg-teal-400/10"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
              transition: {
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={fadeIn} className="flex items-center mb-8">
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
              03.
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              <span className="text-teal-500 dark:text-teal-400">Featured</span> Projects
            </h2>
            <motion.span 
              className="hidden md:inline-block h-px bg-teal-500 dark:bg-teal-400 ml-6 flex-grow max-w-32"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
          
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed"
          >
            Here's a selection of my recent work. Each project represents a unique challenge solved with modern technologies and clean, efficient code.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="group relative h-full"
                layout
              >
                <div className={`absolute rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div 
                  className="h-full flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 group"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden h-64">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Enhanced overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Enhanced action buttons */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      {project.github !== "#" && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-4 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
                          aria-label="GitHub repository"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub className="text-gray-800 dark:text-gray-200 text-xl" />
                        </motion.a>
                      )}
                      {project.live !== "#" && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-teal-500 hover:bg-teal-600 p-4 rounded-full transition-all shadow-lg hover:shadow-xl text-white"
                          aria-label="Live demo"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink className="text-xl" />
                        </motion.a>
                      )}
                    </motion.div>
                    
                    {/* Project number indicator */}
                    <motion.div
                      className="absolute top-4 left-4 bg-teal-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      #{String(index + 1).padStart(2, '0')}
                    </motion.div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow relative">
                    {/* Subtle glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                    
                    <div className="relative z-10">
                      <div className="mb-4">
                        <motion.span 
                          className="text-xs font-mono text-teal-600 dark:text-teal-400 tracking-wider bg-teal-50 dark:bg-teal-900/30 px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          FEATURED PROJECT
                        </motion.span>
                      </div>
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed text-base">
                        {project.description}
                      </p>
                    </div>

                    <ul className="flex flex-wrap gap-3 mb-8 relative z-10">
                      {project.tags.map((tag, i) => (
                        <motion.li
                          key={i}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="group/tag relative text-xs font-semibold bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-all border border-gray-200/50 dark:border-gray-600/50"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + (i * 0.05) }}
                        >
                          {techIcons[tag] && (
                            <motion.span
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                              className="text-base"
                            >
                              {techIcons[tag]}
                            </motion.span>
                          )}
                          {tag}
                          
                          {/* Hover glow */}
                          <motion.div
                            className="absolute inset-0 rounded-xl bg-teal-500/20 opacity-0 group-hover/tag:opacity-100 -z-10 blur-sm"
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex gap-4 mt-auto relative z-10">
                      {project.github !== "#" && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all font-semibold group/link bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                          whileHover={{ x: 5, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="GitHub repository"
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <FiGithub className="text-lg" />
                          </motion.div>
                          Code
                        </motion.a>
                      )}
                      {project.live !== "#" && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-4 py-2 rounded-lg transition-all shadow-lg hover:shadow-xl"
                          whileHover={{ x: 5, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Live demo"
                        >
                          <motion.div
                            whileHover={{ rotate: 45 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FiExternalLink className="text-lg" />
                          </motion.div>
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {projects.length > 3 && (
          <motion.div
            variants={fadeIn}
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={toggleProjectsVisibility}
              className="inline-flex items-center px-8 py-3.5 border-2 border-teal-500 dark:border-teal-400 rounded-full text-teal-600 dark:text-teal-400 hover:bg-teal-600/10 dark:hover:bg-teal-400/10 transition-colors duration-300 font-medium group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(20, 184, 166, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllProjects ? 'Show Less Projects' : 'Show More Projects'}
              <motion.span
                className="ml-3"
                animate={{ rotate: showAllProjects ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {showAllProjects ? (
                  <FiChevronUp className="group-hover:translate-y-[-2px] transition-transform" />
                ) : (
                  <FiChevronDown className="group-hover:translate-y-[2px] transition-transform" />
                )}
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;