// components/Header.jsx
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'

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
          ? 'bg-[#0D0714]/90 backdrop-blur-xl border-b border-purple-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 mx-auto max-w-[1400px]">
        {/* Brand Monogram Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
          aria-label="Abdur Rahman Asim Home"
        >
          <div className="relative">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-700 via-indigo-800 to-[#190C33] border border-purple-500/40 text-purple-200 shadow-[0_0_20px_rgba(147,51,234,0.45)] transition-transform group-hover:scale-105">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                {/* Marketing Growth Trendline */}
                <path
                  d="M 5 24 L 12 17 L 17 21 L 27 9"
                  stroke="#34D399"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 21 9 L 27 9 L 27 15"
                  stroke="#34D399"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Data Points */}
                <circle cx="12" cy="17" r="2" fill="#A855F7" />
                <circle cx="17" cy="21" r="2" fill="#C084FC" />
                <circle cx="27" cy="9" r="2.5" fill="#34D399" />
                {/* Subtle AR Initials */}
                <text x="6" y="13" fill="#FFFFFF" fontSize="8" fontWeight="800" fontFamily="sans-serif">A</text>
                <text x="13" y="13" fill="#C4B5FD" fontSize="8" fontWeight="800" fontFamily="sans-serif">R</text>
              </svg>
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0D0714] shadow-[0_0_6px_#34D399]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
              Abdur Rahman Asim
            </span>
            <span className="text-[10px] font-mono tracking-widest text-purple-300/60 uppercase">
              Digital Marketer & <br/> Social Media Manager
            </span>
          </div>
        </a>

        {/* Desktop Tracked Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-[#160A29]/70 backdrop-blur-md border border-purple-500/20 rounded-full px-3 py-1.5 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId

            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-600/80 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]'
                    : 'text-purple-200/70 hover:text-white hover:bg-purple-500/10'
                }`}
              >
                {item.name}
              </a>
            )
          })}
        </div>

        {/* Right Action / Contact */}
        <div className="flex items-center gap-3">
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
            className="p-2 rounded-xl text-purple-200 md:hidden bg-[#180D2E] border border-purple-500/25"
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
            className="md:hidden border-b border-purple-500/25 bg-[#0D0714]/95 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider text-purple-200 hover:bg-purple-600/20 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-purple-500/20 flex flex-col gap-2">
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