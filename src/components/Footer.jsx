import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'
import { SiUpwork, SiFiverr } from 'react-icons/si'

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const currentYear = new Date().getFullYear()

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8
      }
    }
  }

  const socialLinks = [
    { 
      icon: <FaGithub className="w-5 h-5" />, 
      name: "GitHub", 
      url: "https://github.com/Abduraahman19", 
      color: "bg-gray-800 hover:bg-gray-900",
      animation: { rotate: [0, 10, -10, 0] }
    },
    { 
      icon: <FaLinkedin className="w-5 h-5" />, 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/abdur-rahman-asim/", 
      color: "bg-blue-600 hover:bg-blue-700",
      animation: { rotate: [0, 10, -10, 0] }
    },
    { 
      icon: <FaTwitter className="w-5 h-5" />, 
      name: "Twitter", 
      url: "https://x.com/AbdurRahma86120", 
      color: "bg-sky-500 hover:bg-sky-600",
      animation: { rotate: [0, 10, -10, 0] }
    },
    { 
      icon: <FaEnvelope className="w-5 h-5" />, 
      name: "Email", 
      url: "mailto:abdurrahmanasim0303@gmail.com", 
      color: "bg-red-500 hover:bg-red-600",
      animation: { rotate: [0, 10, -10, 0] }
    }
  ]

  return (
    <footer 
      ref={ref}
      className="relative pb-8 pt-20 px-6 sm:px-12 lg:px-24 text-center bg-gradient-to-br from-gray-50/30 to-gray-100/30 dark:from-gray-900/30 dark:to-gray-950/30 overflow-hdden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10 dark:opacity-20">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={item}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={item}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${link.color} text-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all`}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={`${link.name} profile`}
              >
                <motion.span
                  animate={link.animation}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {link.icon}
                </motion.span>
                <span>{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            variants={item}
            className="pt-8 border-t border-gray-200 dark:border-gray-800 space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
                Designed & Built with 
                <motion.span
                  className="text-red-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <FaHeart className="inline mx-1" />
                </motion.span>
                by Abdur Rahman
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>© {currentYear} All rights reserved</span>
                <span className="hidden sm:inline">•</span>
                <motion.span 
                  className="text-teal-500 dark:text-teal-400 font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  Portfolio v2.0
                </motion.span>
              </div>
            </div>
            
            <motion.div
              className="text-xs text-gray-400 dark:text-gray-500 pt-4 border-t border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p>Built with React, Vite, Tailwind CSS, and Framer Motion</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer