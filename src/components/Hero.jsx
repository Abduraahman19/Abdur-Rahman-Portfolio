// components/Hero.jsx
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail, FiCheckCircle, FiClock } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { SiShopify, SiMeta, SiCanva, SiLinkedin, SiYoutube, SiTiktok } from 'react-icons/si'

const roles = [
  'Digital Marketer & Social Media Manager',
  'Multi-Client Social Media Strategist',
  'Meta Ads Campaign Specialist',
  'Shopify Store Specialist',
  'LinkedIn B2B Outreach Specialist',
  'Canva Pro Visual Designer'
]

// Isolated micro-component for Live Dual Clock (prevents entire Hero re-render every second)
const LiveDualClock = () => {
  const [times, setTimes] = useState({ pkt: '', gmt: '' })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const pkt = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', hour12: true })
      const gmt = now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: true })
      setTimes({ pkt, gmt })
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-[#0D1526]/90 border border-slate-200 dark:border-blue-500/25 text-[11px] font-mono text-slate-700 dark:text-cyan-200/80 shadow-sm"
      title="Live Dual Working Clocks (Local & International Clients)"
    >
      <span className="flex items-center gap-1">
        <FiClock className="w-3 h-3 text-blue-600 dark:text-cyan-400" />
        <span className="font-bold text-blue-600 dark:text-cyan-300">PKT:</span>
        <span>{times.pkt || '05:00 PM'}</span>
      </span>
      <span className="text-slate-300 dark:text-slate-600">·</span>
      <span className="flex items-center gap-1">
        <span className="font-bold text-indigo-600 dark:text-indigo-400">UK:</span>
        <span>{times.gmt || '12:00 PM'}</span>
      </span>
    </div>
  )
}

// Isolated micro-component for Typewriter (prevents Hero re-render 30 times per second)
const TypewriterRole = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeoutSpeed = isDeleting ? 35 : 75

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1))
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1))
        if (displayText === '') {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, timeoutSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRoleIndex])

  return (
    <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#0D1526] border border-slate-300 dark:border-blue-500/30 text-blue-700 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-300 dark:via-blue-300 dark:to-emerald-300 font-bold font-mono text-sm sm:text-lg shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
      {displayText}
      <span className="inline-block w-0.5 h-4 sm:h-5 bg-cyan-500 dark:bg-cyan-400 ml-1.5 animate-pulse align-middle" />
    </span>
  )
}

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="home"
      ref={ref}
      className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1360px] mx-auto overflow-hidden"
    >
      {/* Dynamic Background Halo Glows (Hardware-Accelerated Radial Gradients) */}
      <div
        className="absolute -top-10 left-1/4 w-[500px] h-[500px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.14) 0%, transparent 65%)'
        }}
      />
      <div
        className="absolute top-1/4 right-0 w-[420px] h-[420px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 65%)'
        }}
      />

      {/* Main 2-Column Responsive Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Bold Value Proposition & Actions (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-5 sm:gap-6">
          
          {/* Status Badge + Dual Global Working Clocks */}
          <div className="flex flex-wrap items-center gap-2.5">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#0D1526]/90 border border-slate-200 dark:border-blue-500/30 shadow-sm dark:shadow-[0_0_20px_rgba(37,99,235,0.25)] text-xs font-mono text-slate-800 dark:text-cyan-200"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#34D399]" />
              <span className="font-semibold">Available for Roles & Projects</span>
            </motion.div>

            {/* Live Dual Time Clock Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <LiveDualClock />
            </motion.div>
          </div>

          {/* Main Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]"
          >
            Scaling Brands With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-300 dark:to-emerald-300 drop-shadow-[0_0_35px_rgba(6,182,212,0.25)]">
              Social Media Growth,
            </span>{' '}
            Meta Ads & Shopify Stores.
          </motion.h1>

          {/* Dynamic Role Typewriter Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 text-base sm:text-xl font-medium text-slate-800 dark:text-slate-200"
          >
            <span className="text-slate-600 dark:text-cyan-400/80 font-mono text-xs sm:text-sm uppercase tracking-wider">
              Specialized As:
            </span>
            <TypewriterRole />
          </motion.div>

          {/* Value Proposition Description Grounded in CV */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-slate-700 dark:text-slate-300/90 leading-relaxed max-w-2xl"
          >
            Hi, I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">Abdul Rehman</strong>. Results-focused Digital Marketer and Social Media Manager experienced in handling multi-client social accounts across YouTube, TikTok, Instagram, Facebook, and LinkedIn. Proven track record in Meta Ads, turnkey Shopify stores, and B2B client acquisition with experience at <span className="text-blue-600 dark:text-cyan-300 font-medium">Shoaib Projects Ltd</span>, <span className="text-blue-600 dark:text-cyan-300 font-medium">NextLevelSoftware Company</span>, and <span className="text-blue-600 dark:text-cyan-300 font-medium">AdRightly</span>.
          </motion.p>

          {/* Verified Tool & Ecosystem Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-2 pt-1"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-[#0D1526] border border-slate-200 dark:border-blue-500/25 text-xs font-mono text-slate-800 dark:text-slate-200 shadow-sm">
              <SiYoutube className="w-3.5 h-3.5 text-rose-500" />
              <span>Multi-Client Socials</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-[#0D1526] border border-slate-200 dark:border-blue-500/25 text-xs font-mono text-slate-800 dark:text-slate-200 shadow-sm">
              <SiMeta className="w-3.5 h-3.5 text-[#0081FB]" />
              <span>Meta Ads & ROAS</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-[#0D1526] border border-slate-200 dark:border-blue-500/25 text-xs font-mono text-slate-800 dark:text-slate-200 shadow-sm">
              <SiShopify className="w-3.5 h-3.5 text-[#95BF47]" />
              <span>Shopify Storefronts</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-[#0D1526] border border-slate-200 dark:border-blue-500/25 text-xs font-mono text-slate-800 dark:text-slate-200 shadow-sm">
              <SiCanva className="w-3.5 h-3.5 text-[#00C4CC]" />
              <span>Canva Pro Creatives</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-[#0D1526] border border-slate-200 dark:border-blue-500/25 text-xs font-mono text-slate-800 dark:text-slate-200 shadow-sm">
              <SiLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn B2B Outreach</span>
            </span>
          </motion.div>

          {/* Call-To-Action Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
          >
            <a href="#work" className="btn-figma-primary">
              <span>View Case Studies</span>
              <FiArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/923126326009?text=Hi%20Abdul%20Rehman,%20I%20am%20interested%20in%20your%20digital%20marketing%20and%20social%20media%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-figma-secondary"
            >
              <FaWhatsapp className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="/Abdul-Rehman-CV.pdf"
              download="Abdul-Rehman-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100/90 dark:bg-[#0D1526] border border-slate-300 dark:border-cyan-500/30 text-slate-800 dark:text-cyan-300 hover:text-blue-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-cyan-950/40 shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all flex items-center gap-1.5 text-xs font-semibold px-4 cursor-pointer"
              title="Download Updated CV (Abdul Rehman)"
            >
              <FiDownload className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Quick Social & Contact Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center gap-3 pt-2 text-slate-700 dark:text-slate-300/80 text-xs"
          >
            <span className="font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest text-[11px]">Connect:</span>
            <a
              href="https://www.linkedin.com/in/abdur-rahman-asim/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#0D1526] border border-slate-200 dark:border-blue-500/30 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300 hover:border-blue-400 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/923126326009"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#0D1526] border border-slate-200 dark:border-blue-500/30 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400/40 transition-all shadow-sm"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:abdurrahmanasim0303@gmail.com"
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#0D1526] border border-slate-200 dark:border-blue-500/30 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300 hover:border-blue-400 transition-all shadow-sm"
              aria-label="Email"
            >
              <FiMail className="w-3.5 h-3.5" />
            </a>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 ml-2 hidden sm:inline">
              abdurrahmanasim0303@gmail.com
            </span>
          </motion.div>
        </div>

        {/* Right Column: Luxury Glassmorphic Portrait Showcase with Live Widgets (5 Cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Ambient Cyber Blue Glow Behind Portrait Card (Hardware Accelerated) */}
          <div
            className="absolute inset-0 rounded-3xl -z-10 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.25) 0%, transparent 70%)'
            }}
          />

          {/* Master Glassmorphic Portrait Showcase Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-[390px] sm:max-w-[430px] rounded-3xl p-3 sm:p-3.5 bg-gradient-to-b from-slate-200 via-white to-slate-100 dark:from-blue-900/30 dark:via-[#0D1526]/90 dark:to-[#070B12] border border-slate-300 dark:border-blue-500/35 shadow-xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(6,182,212,0.25)]"
          >
            {/* Image Canvas */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#09101F]">
              <img
                src="/abdur-rahman-suit.jpg"
                alt="Abdul Rehman - Digital Marketer & Social Media Manager"
                className="w-full h-full object-cover object-[center_10%]"
                loading="eager"
              />

              {/* Gradient Scrim for crisp text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent dark:from-[#060A14] opacity-90" />

              {/* Bottom Identity Plaque inside card */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 dark:bg-[#09101F]/90 backdrop-blur-md border border-slate-200 dark:border-blue-500/30 shadow-lg flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Abdul Rehman
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/20">
                    <FiCheckCircle className="w-2.5 h-2.5" /> Verified Track
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-600 dark:text-cyan-300/80">
                  Digital Marketer & Social Media Manager
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  Multi-Client Socials · Meta Ads · Shopify
                </span>
              </div>
            </div>

            {/* Floating Live Metric Badge 1: Social Media Growth (Top-Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-4 -left-4 sm:-left-6 p-3 rounded-2xl bg-white/95 dark:bg-[#0D1526]/95 backdrop-blur-xl border border-slate-200 dark:border-blue-500/30 shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(37,99,235,0.35)] flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/20 to-blue-600/30 border border-rose-500/40 flex items-center justify-center text-rose-500 shrink-0">
                <SiYoutube className="w-5 h-5 text-red-500" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Social Media Manager</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/20 px-1.5 py-0.2 rounded">
                    Active
                  </span>
                </div>
                <span className="text-[10px] text-slate-600 dark:text-cyan-300/70 font-mono">
                  Shoaib Projects Ltd
                </span>
              </div>
            </motion.div>

            {/* Floating Live Metric Badge 2: Shopify Turnkey (Bottom-Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 sm:-right-6 p-3 rounded-2xl bg-white/95 dark:bg-[#0D1526]/95 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30 shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(6,182,212,0.35)] flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#95BF47]/20 to-emerald-600/30 border border-[#95BF47]/40 flex items-center justify-center text-[#95BF47] shrink-0">
                <SiShopify className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Shopify Specialist</span>
                  <span className="text-[10px] font-mono font-bold text-blue-700 dark:text-cyan-300 bg-blue-100 dark:bg-blue-500/20 px-1.5 py-0.2 rounded">
                    No-Code
                  </span>
                </div>
                <span className="text-[10px] text-slate-600 dark:text-cyan-300/70 font-mono">
                  Turnkey Setups & SEO Copy
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modern Credibility Proof Bar below Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mt-14 sm:mt-20 p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-[#0D1526]/80 backdrop-blur-xl border border-slate-200 dark:border-blue-500/25 shadow-sm dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)] grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
      >
        <div className="flex flex-col gap-1 border-r border-slate-200 dark:border-blue-500/15 pr-4 last:border-none">
          <div className="flex items-center gap-2">
            <SiYoutube className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">Social Media Manager</span>
          </div>
          <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
            YouTube, TikTok, Reels, Stories & Google Sheets content trackers
          </span>
        </div>

        <div className="flex flex-col gap-1 border-r border-slate-200 dark:border-blue-500/15 pr-4 last:border-none">
          <div className="flex items-center gap-2">
            <SiMeta className="w-4 h-4 text-[#0081FB]" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">Performance Ads</span>
          </div>
          <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
            Meta Ads Manager, audience clustering & ROAS monitoring
          </span>
        </div>

        <div className="flex flex-col gap-1 border-r border-slate-200 dark:border-blue-500/15 pr-4 last:border-none">
          <div className="flex items-center gap-2">
            <SiCanva className="w-4 h-4 text-[#00C4CC]" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">Visual Creatives</span>
          </div>
          <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
            Canva Pro promotional ads & social media branding
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <SiLinkedin className="w-4 h-4 text-[#0A66C2]" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">B2B Acquisition</span>
          </div>
          <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
            Direct LinkedIn executive messaging & corporate outreach
          </span>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
