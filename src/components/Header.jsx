// components/Header.jsx
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'
import BrandLogo from './BrandLogo.jsx'

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT ME', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'SERVICES', href: '#work' },
  { name: 'PROCESS', href: '#workflow' },
  { name: 'CONTACT', href: '#contact' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { darkMode, toggleTheme } = useTheme()

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 25)

          const sections = ['home', 'about', 'skills', 'experience', 'work', 'workflow', 'contact']
          const scrollPosition = window.scrollY + 140

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
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#070B12]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-blue-500/20 py-3 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 mx-auto max-w-[1400px]">
        {/* Brand Monogram Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
          aria-label="Abdul Rehman Home"
        >
          <BrandLogo className="w-10 h-10 group-hover:scale-105 transition-transform" showStatus={true} id="header-logo" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              Abdul Rehman
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-600 dark:text-slate-400 uppercase">
              Digital Marketer & Social Media Manager
            </span>
          </div>
        </a>

        {/* Desktop Tracked Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-[#0D1526]/80 backdrop-blur-md border border-slate-200/80 dark:border-blue-500/20 rounded-full px-3 py-1.5 shadow-sm dark:shadow-[0_0_20px_rgba(0,0,0,0.4)]">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId

            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.45)]'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300 hover:bg-slate-200/70 dark:hover:bg-blue-500/10'
                }`}
              >
                {item.name}
              </a>
            )
          })}
        </div>

        {/* Right Action / Theme Toggle & WhatsApp Contact */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Toggle Button with Liquid Ripple Transition */}
          <button
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-full bg-slate-100 dark:bg-[#0D1526] border border-slate-300/80 dark:border-cyan-500/30 text-slate-700 dark:text-cyan-400 hover:bg-slate-200 dark:hover:bg-cyan-950/40 active:scale-90 transition-transform shadow-sm flex items-center justify-center cursor-pointer"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <FiSun className="w-4 h-4 text-amber-400" />
            ) : (
              <FiMoon className="w-4 h-4 text-slate-800" />
            )}
          </button>

          <a
            href="https://wa.me/923126326009"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 border border-cyan-400/30 shadow-[0_0_20px_rgba(37,99,235,0.35)] transition-all active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-emerald-300" />
            <span>Let&apos;s Talk</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-800 dark:text-slate-200 md:hidden bg-slate-100 dark:bg-[#0D1526] border border-slate-200 dark:border-blue-500/25"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-slate-200 dark:border-blue-500/25 bg-white/95 dark:bg-[#070B12]/95 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-blue-600/20 hover:text-blue-600 dark:hover:text-white"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Theme Toggle Switcher */}
              <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0D1526] border border-slate-200 dark:border-blue-500/25 mt-2">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {darkMode ? 'Dark Cyber Mode' : 'Light Titanium Mode'}
                </span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-cyan-500/40 text-slate-700 dark:text-cyan-400 shadow-sm flex items-center gap-1.5 text-xs font-bold"
                >
                  {darkMode ? (
                    <>
                      <FiSun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <FiMoon className="w-3.5 h-3.5 text-slate-800" />
                      <span>Dark</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 mt-1 border-t border-slate-200 dark:border-blue-500/20 flex flex-col gap-2">
                <a
                  href="https://wa.me/923126326009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                  <span>Chat on WhatsApp (+92 312 6326009)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
