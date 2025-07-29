import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const projects = [
  {
    title: "Real-Time ChatApp",
    description:
      "A modern, fast, and secure real-time chat application inspired by WhatsApp. Users can send and receive messages instantly, see typing indicators, read receipts, and enjoy a smooth, responsive chat experience across all devices.",
    tags: ["Next.js", "Mui", "Tailwind css", "Firebase"],
    github: "#",
    live: "https://chat-app-professional.vercel.app/",
    image: "/p3.jpg",
  },
  {
    title: "Task Management App",
    description:
      "A simple and clean To-Do portfolio app to manage daily tasks with ease. Built using React.js and Tailwind CSS, it showcases smooth UI, responsive design, and real-time task handling—perfect for productivity and portfolio display.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "https://sticky-wall-todo.netlify.app/",
    image: "/p2.jpg",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured E-Commerce platform built for both users and admins. It includes secure payment gateways like Crypto, PayPal, Stripe, and local payment integration. With user-friendly shopping, real-time order tracking, and a powerful admin dashboard for managing products, orders, and payments—this project is designed to showcase advanced e-commerce functionality with modern tech.",
    tags: ["Next.js", "Stripe", "Firebase", "TypeScript"],
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
  // {
  //   title: "Weather App",
  //   description: "Real-time weather application with location detection and 5-day forecast using weather API.",
  //   tags: ["React", "OpenWeather API", "Geolocation", "Tailwind CSS"],
  //   github: "#",
  //   live: "#",
  //   image: "/project6.jpg"
  // }
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [visibleProjects, setVisibleProjects] = useState(3);
  const showMoreProjects = () => setVisibleProjects(projects.length);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="work"
      ref={ref}
      className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900"
      aria-label="Projects section"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center"
          >
            <span className="text-teal-500 dark:text-teal-400 font-mono text-lg md:text-xl mr-4">
              03.
            </span>
            <span className="text-teal-500 mr-2 dark:text-teal-400">My</span>
            Projects
            <span className="hidden md:inline-block h-px w-32 bg-teal-500 dark:bg-teal-400 ml-6"></span>
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            Here are some of my selected projects. Each one was crafted with
            attention to detail and a focus on solving real-world problems.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10 dark:from-teal-400/5 dark:to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-xs font-mono text-teal-600 dark:text-teal-400">
                      Featured Project
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <li
                        key={i}
                        className="text-xs font-mono bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.live}
                      target="blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-2 group/link text-sm"
                      aria-label="Live demo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover/link:translate-x-1 transition-transform"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {visibleProjects < projects.length && (
          <motion.div
            variants={item}
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={showMoreProjects}
              className="inline-flex items-center px-6 py-3 border border-teal-600 dark:border-teal-400 rounded-full text-teal-600 dark:text-teal-400 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 transition-colors duration-300"
            >
              Show More Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
