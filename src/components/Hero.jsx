// components/Hero.jsx
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { SiShopify, SiMeta, SiCanva, SiLinkedin } from 'react-icons/si'

const roles = [
  'Shopify Store Specialist',
  'Meta Ads Campaign Strategist',
  'Digital Marketing Professional',
  'LinkedIn B2B Outreach Specialist',
  'Canva Pro Visual Designer'
]

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // High-smooth Typewriter effect
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
    <section
      id="home"
      ref={ref}
      className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1360px] mx-auto overflow-hidden"
    >
      {/* Dynamic Background Halo Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Main 2-Column Responsive Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Bold Value Proposition & Actions (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-5 sm:gap-6">
          {/* Status Badge with Live Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1A0C35]/90 border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.25)] text-xs font-mono text-purple-200"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
            <span>Available for E-Commerce & Marketing Roles</span>
            <span className="text-purple-500/60 hidden sm:inline">|</span>
            <span className="text-purple-300/70 hidden sm:inline font-sans text-[11px]">Faisalabad & Remote</span>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
          >
            Scaling Brands With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
              Shopify Stores
            </span>{' '}
            & High-ROI Marketing.
          </motion.h1>

          {/* Dynamic Role Typewriter Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 text-base sm:text-xl font-medium text-slate-200"
          >
            <span className="text-purple-300/80 font-mono text-xs sm:text-sm uppercase tracking-wider">
              Specialized As:
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#1E0E38] border border-purple-500/30 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-200 to-emerald-300 font-bold font-mono text-sm sm:text-lg shadow-[0_0_15px_rgba(147,51,234,0.2)]">
              {displayText}
              <span className="inline-block w-0.5 h-4 sm:h-5 bg-emerald-400 ml-1.5 animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* Value Proposition Description Grounded in CV */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl"
          >
            Hi, I&apos;m <strong className="text-white font-semibold">Abdur Rahman Asim</strong>. I specialize in building complete, high-converting Shopify stores from scratch, setting up targeted Meta Ads campaigns (Facebook & Instagram), and driving executive B2B client acquisition with verified agency experience at <span className="text-purple-300 font-medium">Next Level Software Company</span> and <span className="text-purple-300 font-medium">AdRightly</span>.
          </motion.p>

          {/* Verified Tool & Ecosystem Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-2 pt-1"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#160A2A] border border-purple-500/25 text-xs font-mono text-purple-200 shadow-sm">
              <SiShopify className="w-3.5 h-3.5 text-[#95BF47]" />
              <span>Turnkey Shopify Store</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#160A2A] border border-purple-500/25 text-xs font-mono text-purple-200 shadow-sm">
              <SiMeta className="w-3.5 h-3.5 text-[#0081FB]" />
              <span>Meta Ads & ROAS</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#160A2A] border border-purple-500/25 text-xs font-mono text-purple-200 shadow-sm">
              <SiCanva className="w-3.5 h-3.5 text-[#00C4CC]" />
              <span>Canva Pro Creatives</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#160A2A] border border-purple-500/25 text-xs font-mono text-purple-200 shadow-sm">
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
              href="https://wa.me/923126326009?text=Hi%20Abdur%20Rahman,%20I%20am%20interested%20in%20your%20digital%20marketing%20and%20Shopify%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-figma-secondary"
            >
              <FaWhatsapp className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="/Abdur Rahman Asim Resume.pdf"
              download
              className="p-2.5 rounded-full bg-[#1B0D36] border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600/30 shadow-[0_0_15px_rgba(147,51,234,0.2)] transition-all flex items-center gap-1.5 text-xs font-semibold px-4"
              title="Download CV"
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
            className="flex items-center gap-3 pt-2 text-purple-300/80 text-xs"
          >
            <span className="font-mono text-purple-400/60 uppercase tracking-widest text-[11px]">Connect:</span>
            <a
              href="https://www.linkedin.com/in/abdur-rahman-asim/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#170B2E] border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/923126326009"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#170B2E] border border-purple-500/30 text-purple-300 hover:text-emerald-400 hover:border-emerald-400/40 transition-all"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:abdurrahmanasim0303@gmail.com"
              className="p-2 rounded-lg bg-[#170B2E] border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 transition-all"
              aria-label="Email"
            >
              <FiMail className="w-3.5 h-3.5" />
            </a>
            <span className="text-[11px] font-mono text-purple-300/60 ml-2 hidden sm:inline">
              abdurrahmanasim0303@gmail.com
            </span>
          </motion.div>
        </div>

        {/* Right Column: Luxury Glassmorphic Portrait Showcase with Live Widgets (5 Cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Ambient Purple Glow Behind Portrait Card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-indigo-600/20 rounded-3xl blur-[80px] -z-10" />

          {/* Master Glassmorphic Portrait Showcase Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-[390px] sm:max-w-[430px] rounded-3xl p-3 sm:p-3.5 bg-gradient-to-b from-purple-500/30 via-[#180C34]/90 to-[#0F071D] border border-purple-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(147,51,234,0.3)]"
          >
            {/* Image Canvas */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#100721]">
              <img
                src="/abdur-rahman-suit.jpg"
                alt="Abdur Rahman Asim - Digital Marketer & Social Media Manager"
                className="w-full h-full object-cover object-[center_10%]"
                loading="eager"
              />

              {/* Gradient Scrim for crisp text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E061B] via-transparent to-transparent opacity-90" />

              {/* Bottom Identity Plaque inside card */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#14092B]/85 backdrop-blur-md border border-purple-500/30 shadow-lg flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-white tracking-tight">
                    Abdur Rahman Asim
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <FiCheckCircle className="w-2.5 h-2.5" /> Verified Track
                  </span>
                </div>
                <span className="text-[11px] font-mono text-purple-300/80">
                  Digital Marketer & Social Media Manager
                </span>
                <span className="text-[10px] text-purple-400/60 font-mono">
                  Shopify & Meta Ads Specialist
                </span>
              </div>
            </div>

            {/* Floating Live Metric Badge 1: Meta Ads ROAS (Top-Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-4 -left-4 sm:-left-6 p-3 rounded-2xl bg-[#170A30]/95 backdrop-blur-xl border border-purple-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(147,51,234,0.35)] flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0081FB]/20 to-purple-600/30 border border-[#0081FB]/40 flex items-center justify-center text-[#0081FB] shrink-0">
                <SiMeta className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white">Meta Ad Suites</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.2 rounded">
                    ROAS Focus
                  </span>
                </div>
                <span className="text-[10px] text-purple-300/70 font-mono">
                  Targeted FB & IG Campaigns
                </span>
              </div>
            </motion.div>

            {/* Floating Live Metric Badge 2: Shopify Turnkey (Bottom-Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 sm:-right-6 p-3 rounded-2xl bg-[#170A30]/95 backdrop-blur-xl border border-purple-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(147,51,234,0.35)] flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#95BF47]/20 to-emerald-600/30 border border-[#95BF47]/40 flex items-center justify-center text-[#95BF47] shrink-0">
                <SiShopify className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white">Shopify Specialist</span>
                  <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-500/20 px-1.5 py-0.2 rounded">
                    No-Code
                  </span>
                </div>
                <span className="text-[10px] text-purple-300/70 font-mono">
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
        className="mt-14 sm:mt-20 p-5 sm:p-6 rounded-2xl bg-[#130826]/80 backdrop-blur-xl border border-purple-500/25 shadow-[0_8px_30px_rgba(0,0,0,0.5)] grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
      >
        <div className="flex flex-col gap-1 border-r border-purple-500/15 pr-4 last:border-none">
          <div className="flex items-center gap-2">
            <SiShopify className="w-4 h-4 text-[#95BF47]" />
            <span className="text-sm font-bold text-white">Shopify Operations</span>
          </div>
          <span className="text-xs text-purple-300/70 font-mono">
            Turnkey store setup, collection architecture & SEO copy
          </span>
        </div>

        <div className="flex flex-col gap-1 border-r border-purple-500/15 pr-4 last:border-none">
          <div className="flex items-center gap-2">
            <SiMeta className="w-4 h-4 text-[#0081FB]" />
            <span className="text-sm font-bold text-white">Performance Ads</span>
          </div>
          <span className="text-xs text-purple-300/70 font-mono">
            Meta Ads Manager, audience clustering & ROAS monitoring
          </span>
        </div>

        <div className="flex flex-col gap-1 border-r border-purple-500/15 pr-4 last:border-none">
          <div className="flex items-center gap-2">
            <SiCanva className="w-4 h-4 text-[#00C4CC]" />
            <span className="text-sm font-bold text-white">Visual Creatives</span>
          </div>
          <span className="text-xs text-purple-300/70 font-mono">
            Canva Pro promotional ads & social media branding
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <SiLinkedin className="w-4 h-4 text-[#0A66C2]" />
            <span className="text-sm font-bold text-white">B2B Acquisition</span>
          </div>
          <span className="text-xs text-purple-300/70 font-mono">
            Direct LinkedIn executive messaging & corporate outreach
          </span>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
