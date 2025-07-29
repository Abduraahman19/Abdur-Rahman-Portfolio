// components/ScrollToTop.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { darkMode } = useTheme()

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { 
              type: 'spring',
              stiffness: 300,
              damping: 20
            }
          }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: darkMode ? '#2DD4BF' : '#0D9488'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 z-50 p-3
            rounded-full text-white shadow-xl
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ${darkMode ? 
              'bg-teal-400 hover:bg-teal-300 focus:ring-teal-400 focus:ring-offset-gray-900' : 
              'bg-teal-500 hover:bg-teal-600 focus:ring-teal-500 focus:ring-offset-white'}
          `}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }
            }}
          >
            <FaArrowUp className="w-5 h-5" />
          </motion.div>
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-white/30"
            initial={{ scale: 1 }}
            animate={{
              scale: 1.3,
              opacity: 0,
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
              }
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop