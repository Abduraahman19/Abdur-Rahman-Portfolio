// App.jsx
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import OrbitSkills from './components/OrbitSkills'
import Projects from './components/Projects'
import About from './components/About'
import Workflow from './components/Workflow'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#070B12] text-slate-800 dark:text-slate-100 selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* High-Performance Hardware-Accelerated Ambient Glows (Zero Blur Filter GPU Lag) */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 opacity-70 dark:opacity-50"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 0% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 45%),
            radial-gradient(circle at 100% 85%, rgba(37, 99, 235, 0.12) 0%, transparent 50%)
          `
        }}
      />

      <AnimatePresence>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <main className="overflow-x-hidden">
              <Hero />
              <About />
              <OrbitSkills />
              <Experience />
              <Projects />
              <Workflow />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
