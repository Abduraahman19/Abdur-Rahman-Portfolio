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
          ? 'bg-white/85 dark:bg-[#0D0714]/90 backdrop-blur-xl border-b border-purple-200/60 dark:border-purple-500/20 py-3 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
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
            <span className="text-sm font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
              Abdul Rehman
            </span>
            <span className="text-[10px] font-mono tracking-widest text-purple-700 dark:text-purple-300/60 uppercase">
              Digital Marketer & Social Media Manager
            </span>
          </div>
        </a>

        {/* Desktop Tracked Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/80 dark:bg-[#160A29]/70 backdrop-blur-md border border-purple-200/70 dark:border-purple-500/20 rounded-full px-3 py-1.5 shadow-sm dark:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId

            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]'
                    : 'text-slate-700 dark:text-purple-200/70 hover:text-purple-900 dark:hover:text-white hover:bg-purple-100 dark:hover:bg-purple-500/10'
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
            className="p-2 sm:p-2.5 rounded-full bg-purple-100/80 dark:bg-[#180D2E] border border-purple-300/70 dark:border-purple-500/30 text-purple-700 dark:text-amber-400 hover:bg-purple-200/90 dark:hover:bg-purple-900/40 active:scale-90 transition-transform shadow-sm flex items-center justify-center cursor-pointer"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <FiSun className="w-4 h-4 text-amber-400" />
            ) : (
              <FiMoon className="w-4 h-4 text-purple-700" />
            )}
          </button>

          <a
            href="https://wa.me/923126326009"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/30 shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-emerald-300" />
            <span>Let&apos;s Talk</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-800 dark:text-purple-200 md:hidden bg-purple-100 dark:bg-[#180D2E] border border-purple-200 dark:border-purple-500/25"
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
            className="md:hidden border-b border-purple-200 dark:border-purple-500/25 bg-white/95 dark:bg-[#0D0714]/95 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider text-slate-800 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-600/20 hover:text-purple-900 dark:hover:text-white"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Theme Toggle Switcher */}
              <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-purple-50 dark:bg-[#180D2E] border border-purple-200 dark:border-purple-500/25 mt-2">
                <span className="text-xs font-semibold text-slate-800 dark:text-purple-200">
                  {darkMode ? 'Dark Cosmic Mode' : 'Light Lavender Mode'}
                </span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-white dark:bg-purple-950/60 border border-purple-300 dark:border-purple-500/40 text-purple-700 dark:text-amber-400 shadow-sm flex items-center gap-1.5 text-xs font-bold"
                >
                  {darkMode ? (
                    <>
                      <FiSun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <FiMoon className="w-3.5 h-3.5 text-purple-700" />
                      <span>Dark</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 mt-1 border-t border-purple-200 dark:border-purple-500/20 flex flex-col gap-2">
                <a
                  href="https://wa.me/923126326009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.4)]"
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
