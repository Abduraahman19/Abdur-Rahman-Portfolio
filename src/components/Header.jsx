// components/Header.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

const Header = () => {
  const { darkMode, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'work', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="flex items-center justify-between px-6 py-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white group"
          aria-label="Home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="p-3 text-white transition-all duration-300 shadow-lg bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl group-hover:shadow-xl"
            whileHover={{
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.5 }
            }}
          >
            {"</>"}
          </motion.span>
          <span className="font-mono text-transparent transition-all duration-300 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text group-hover:from-teal-500 group-hover:to-cyan-500">
            Abdur Rahman
          </span>
        </motion.a>

        <div className="flex items-center gap-6">
          <ul className="hidden gap-8 md:flex">
            {navItems.map((item, index) => {
              const sectionId = item.href.substring(1) // Remove # from href
              const isActive = activeSection === sectionId

              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <motion.a
                    href={item.href}
                    className={`relative group text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg ${isActive
                        ? 'text-teal-500 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2 font-mono text-xs text-teal-500 dark:text-teal-400">
                      0{index + 1}.
                    </span>
                    {item.name}

                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 w-1 h-1 bg-teal-500 rounded-full left-1/2 dark:bg-teal-400"
                        layoutId="activeIndicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{ x: '-50%' }}
                      />
                    )}

                    {/* Hover underline */}
                    <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-teal-500 dark:bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </motion.a>
                </motion.li>

              )
            })}
          </ul>

          <motion.button
            onClick={toggleTheme}
            className="relative p-3 overflow-hidden text-gray-700 transition-all duration-300 rounded-xl dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 group"
            aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              key={darkMode ? 'sun' : 'moon'}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {darkMode ? (
                <FaSun className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400" />
              ) : (
                <FaMoon className="w-5 h-5 text-blue-600 group-hover:text-blue-500" />
              )}
            </motion.div>

            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 transition-transform duration-300 scale-0 bg-teal-500/20 rounded-xl group-hover:scale-100"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            />
          </motion.button>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative p-3 overflow-hidden text-gray-700 transition-all duration-300 md:hidden rounded-xl dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600"
        style={{
          scaleX: scrolled ? 1 : 0,
          transformOrigin: '0%',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white md:hidden dark:bg-gray-900"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    <span className="mr-2 text-teal-500 dark:text-teal-400">0{index + 1}.</span>
                    {item.name}
                  </a>
                </motion.li>
              ))}
              <li className="mt-4">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400"
                >
                  {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header