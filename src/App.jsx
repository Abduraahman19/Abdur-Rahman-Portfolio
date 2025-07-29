// App.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <AnimatePresence>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Header />
              <main className="overflow-hidden">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </main>
              <Footer />
              <ScrollToTop />
            </>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}

export default App