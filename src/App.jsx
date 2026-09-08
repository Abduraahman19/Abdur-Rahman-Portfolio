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
    // Ensure dark class is applied for Tailwind compatibility
    document.documentElement.classList.add('dark')
    const timer = setTimeout(() => setLoading(false), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0D0714] text-slate-100 selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      {/* Figma Ambient Background Glow Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[500px] bg-purple-700/10 rounded-full blur-[180px] pointer-events-none -z-10" />

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