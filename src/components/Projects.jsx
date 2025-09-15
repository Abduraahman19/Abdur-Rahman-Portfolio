import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useMemo } from "react";
import { FiExternalLink, FiGithub, FiChevronDown, FiChevronUp, FiFilter, FiEye, FiCode } from "react-icons/fi";
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
  "Mui": <span className="text-xs font-bold text-blue-400">MUI</span>,
  "Node.js": <span className="text-xs font-bold text-green-600">Node</span>,
  "JavaScript": <span className="text-xs font-bold text-yellow-500">JS</span>,
  "Framer Motion": <span className="text-xs font-bold text-purple-500">FM</span>,
  "OpenWeatherMap API": <span className="text-xs font-bold text-orange-500">API</span>,
  "Gemini API Integration": <span className="text-xs font-bold text-teal-500">AI</span>,
  "Geolocation": <span className="text-xs font-bold text-blue-500">Geo</span>,
  "Integrate NowPayments": <span className="text-xs font-bold text-green-500">Crypto</span>,
};

const projects = [
  {
    title: "Real-Time ChatApp",
    description: "This is a professional real-time Chat App with a clean and modern interface, secure user authentication, and smooth messaging functionality. It showcases your skills in real-time communication, UI/UX design, and frontend-backend integration.",
    tags: ["Next.js", "Mui", "Tailwind css", "Firebase"],
    github: "#",
    live: "https://chat-app-professional.vercel.app/",
    image: "/p3.jpg",
  },

  {
    title: "Smart Resume Parser + Candidate Tracker System",
    description: "An AI-powered hiring tool built with React.js, TailwindCSS, Node.js, and MongoDB. It parses resumes, extracts candidate details, matches skills to job roles using Google Gemini API, and lets recruiters quickly search, filter, and shortlist candidates for smarter hiring.",
    tags: ["vite React.js", "Gemini API Integration", "Node.js", "Tailwind CSS"],
    github: "#",
    live: "https://talenttrack-ai.vercel.app/",
    image: "/Talent Track.png"
  },
  {
    title: "AI Chat Assistant",
    description: "This is a smart AI chat assistant with a clean UI, built for real-time conversations. It showcases AI integration and responsive frontend design.",
    tags: ["Next.js", "Gemini API Integration", "Geolocation", "Tailwind CSS"],
    github: "#",
    live: "https://ai-chat-assistant-pi.vercel.app/",
    image: "/Chat.png"
  },
  {
    title: "Task Management App",
    description: "This is a Sticky Wall To-Do App that allows users to create and organize tasks visually using colorful sticky notes. With its interactive and user-friendly interface, it offers an engaging way to manage daily tasks. This project showcases your skills in dynamic UI design, state management, and responsive frontend development.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "https://sticky-wall-todo.netlify.app/",
    image: "/p2.jpg",
  },
  {
    title: "QR Code Generator",
    description: "A lightweight and responsive QR code generator web app. Users can instantly create QR codes by entering any text or URL. Built with modern technologies to ensure speed, simplicity, and mobile-friendliness.",
    tags: ["Vite React", "Framer Motion", "Tailwind CSS", "JavaScript"],
    github: "#",
    live: "https://qr-code-generator1-nine.vercel.app/",
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
    title: "E-Commerce Platform",
    description: "A full-featured E-Commerce platform built for both users and admins. It includes secure payment gateways like Crypto, PayPal, Stripe, and local payment integration. With user-friendly shopping, real-time order tracking, and a powerful admin dashboard for managing products, orders, and payments—this project is designed to showcase advanced e-commerce functionality with modern tech.",
    tags: ["Vite React.js", "Integrate Stripe", "MongoDB", "TypeScript", "Tailwind CSS", "Integrate PayPal", "Integrate NowPayments"],
    github: "#",
    live: "#",
    image: "/p1.jpg",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [showAllProjects, setShowAllProjects] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Get unique categories from projects
  const categories = useMemo(() => {
    const cats = new Set(['All']);
    projects.forEach(project => {
      if (project.tags.includes('Next.js') || project.tags.includes('React')) cats.add('Frontend');
      if (project.tags.includes('Node.js') || project.tags.includes('MongoDB')) cats.add('Full Stack');
      if (project.tags.includes('AI') || project.tags.includes('Gemini API Integration')) cats.add('AI/ML');
      if (project.tags.includes('E-Commerce') || project.tags.includes('Stripe')) cats.add('E-Commerce');
    });
    return Array.from(cats);
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return projects;
    return projects.filter(project => {
      switch (selectedFilter) {
        case 'Frontend':
          return project.tags.some(tag => ['Next.js', 'React', 'Vite React'].includes(tag));
        case 'Full Stack':
          return project.tags.some(tag => ['Node.js', 'MongoDB', 'Firebase'].includes(tag));
        case 'AI/ML':
          return project.tags.some(tag => ['Gemini API Integration', 'AI'].includes(tag));
        case 'E-Commerce':
          return project.tags.some(tag => ['Integrate Stripe', 'Integrate PayPal', 'E-Commerce'].includes(tag));
        default:
          return true;
      }
    });
  }, [selectedFilter]);

  const visibleProjects = showAllProjects ? filteredProjects.length : Math.min(3, filteredProjects.length);

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
      className="relative px-6 overflow-hidden py-28 sm:px-12 lg:px-24 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-950/50"
      aria-label="Projects section"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 rounded-full right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full bottom-10 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

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

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={fadeIn} className="flex items-center mb-8">
            <motion.span
              className="mr-4 font-mono text-lg text-teal-500 dark:text-teal-400 md:text-xl"
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
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              My <span className="text-teal-500 dark:text-teal-400">Projects</span>
            </h2>
            <motion.span
              className="flex-grow hidden h-px ml-6 bg-teal-500 md:inline-block dark:bg-teal-400 max-w-32"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>

          <motion.p
            variants={fadeIn}
            className="max-w-3xl mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300"
          >
            Here's a selection of my recent work. Each project represents a unique challenge solved with modern technologies and clean, efficient code.
          </motion.p>

          {/* Project Stats */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap gap-6 mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm dark:bg-gray-800">
              <FiCode className="text-teal-500" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {filteredProjects.length} Projects
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm dark:bg-gray-800">
              <FiEye className="text-blue-500" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {filteredProjects.filter(p => p.live !== '#').length} Live Demos
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
              // Grid View
              <motion.div
                key={`${project.title}-${selectedFilter}`}
                variants={item}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                className="relative overflow-hidden transition-all duration-500 bg-white shadow-xl rounded-2xl dark:bg-gray-800 hover:shadow-2xl group"
                layout
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Grid Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-full"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100" />

                  {/* Grid Action Buttons */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    {project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 transition-all rounded-full shadow-lg bg-white/90 dark:bg-gray-800/90 hover:shadow-xl"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub className="text-lg text-gray-800 dark:text-gray-200" />
                      </motion.a>
                    )}
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-white transition-all bg-teal-500 rounded-full shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink className="text-lg" />
                      </motion.a>
                    )}
                  </motion.div>

                  {/* Project Number */}
                  <motion.div
                    className="absolute px-2 py-1 text-xs font-bold text-white rounded-full top-3 left-3 bg-teal-500/90 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    #{String(index + 1).padStart(2, '0')}
                  </motion.div>
                </div>

                {/* Grid Content */}
                <div className="p-6">
                  <motion.h3
                    className="mb-3 text-xl font-bold text-gray-900 transition-colors dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                    {project.description.length > 120 ? project.description.substring(0, 120) + '...' : project.description}
                  </p>

                  {/* Grid Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md dark:text-gray-300 dark:bg-gray-700"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium text-teal-600 rounded-md dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Grid Action Links */}
                  <div className="flex gap-3">
                    {project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FiGithub className="text-sm" />
                        Code
                      </motion.a>
                    )}
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FiExternalLink className="text-sm" />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>

            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > 3 && (
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
              {showAllProjects ? `Show Less Projects` : `Show More Projects (${filteredProjects.length - 3} more)`}
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
