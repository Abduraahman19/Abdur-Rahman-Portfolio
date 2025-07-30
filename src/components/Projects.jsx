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
      className="relative py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-gray-50/30 to-gray-100/30 dark:from-gray-900/30 dark:to-gray-950/30 overflow-hidden"
      aria-label="Projects section"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={fadeIn} className="flex items-center mb-8">
            <span className="text-teal-500 dark:text-teal-400 font-mono text-lg md:text-xl mr-4">
              03.
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              <span className="text-teal-500 dark:text-teal-400">Featured</span> Projects
            </h2>
            <span className="hidden md:inline-block h-px w-32 bg-teal-500 dark:bg-teal-400 ml-6 flex-grow"></span>
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

                <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="relative overflow-hidden h-60">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-4"
                      >
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full hover:bg-white transition-colors"
                            aria-label="GitHub repository"
                          >
                            <FiGithub className="text-gray-800 dark:text-gray-200" />
                          </a>
                        )}
                        {project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full hover:bg-white transition-colors"
                            aria-label="Live demo"
                          >
                            <FiExternalLink className="text-gray-800 dark:text-gray-200" />
                          </a>
                        )}
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <span className="text-xs font-mono text-teal-600 dark:text-teal-400 tracking-wider">
                        FEATURED PROJECT
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-3 mb-6">
                      {project.tags.map((tag, i) => (
                        <motion.li
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="text-xs font-mono bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full flex items-center gap-1.5"
                        >
                          {techIcons[tag] || null}
                          {tag}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex gap-4 mt-auto">
                      {project.github !== "#" && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-2 group/link text-sm font-medium"
                          whileHover={{ x: 2 }}
                          aria-label="GitHub repository"
                        >
                          <FiGithub className="group-hover/link:scale-110 transition-transform" />
                          Code
                        </motion.a>
                      )}
                      {project.live !== "#" && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-2 group/link text-sm font-medium"
                          whileHover={{ x: 2 }}
                          aria-label="Live demo"
                        >
                          <FiExternalLink className="group-hover/link:scale-110 transition-transform" />
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