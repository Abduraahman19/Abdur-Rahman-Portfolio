// components/OrbitSkills.jsx
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  SiShopify,
  SiMeta,
  SiCanva,
  SiLinkedin,
  SiGoogleads,
  SiTarget,
  SiMailchimp
} from 'react-icons/si'
import { FiTrendingUp, FiShoppingBag, FiSearch, FiLayers } from 'react-icons/fi'

const skillNodes = [
  { name: 'Shopify Admin Panel', icon: <SiShopify className="w-5 h-5 text-emerald-400" /> },
  { name: 'Meta Ads Manager & Suite', icon: <SiMeta className="w-5 h-5 text-blue-400" /> },
  { name: 'Canva Pro Design', icon: <SiCanva className="w-5 h-5 text-cyan-300" /> },
  { name: 'LinkedIn B2B Outreach', icon: <SiLinkedin className="w-5 h-5 text-sky-400" /> },
  { name: 'Audience & Demographic Research', icon: <FiSearch className="w-5 h-5 text-purple-400" /> },
  { name: 'Turnkey Store Setup', icon: <FiShoppingBag className="w-5 h-5 text-amber-300" /> },
  { name: 'SEO Product Descriptions', icon: <FiTrendingUp className="w-5 h-5 text-rose-400" /> },
  { name: 'No-Code Theme Layouts', icon: <FiLayers className="w-5 h-5 text-indigo-300" /> },
  { name: 'Budget Setup & ROAS', icon: <SiTarget className="w-5 h-5 text-emerald-300" /> },
]

const OrbitSkills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      id="skills"
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto overflow-hidden text-center"
    >
      {/* Central Ambient Glow Behind Orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[550px] h-[350px] bg-purple-600/20 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Heading matching Figma */}
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-3 mb-8 sm:mb-12">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug"
        >
          I&apos;m currently looking to join a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 font-extrabold underline decoration-purple-500/40 underline-offset-8">
            cross-functional
          </span>{' '}
          team
          <br className="hidden sm:inline" /> that values measurable marketing results, high-converting stores, and brand growth.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xs sm:text-sm font-mono text-purple-300/70"
        >
          Grounding from CV: Shopify Store Management · Meta Ads Suite · Canva Pro · LinkedIn B2B Outreach
        </motion.p>
      </div>

      {/* Connected Tech & Tools Icons Row */}
      <div className="relative max-w-4xl mx-auto mb-8 sm:mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 z-20 relative">
          {skillNodes.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-2xl bg-[#180D2E]/90 border border-purple-500/25 hover:border-purple-400/60 shadow-[0_0_15px_rgba(147,51,234,0.2)] backdrop-blur-xl transition-all cursor-default"
            >
              {skill.icon}
              <span className="text-xs font-semibold text-slate-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* SVG Connector Lines Beaming Down to Core */}
        <div className="w-full h-16 sm:h-20 flex justify-center items-end relative pointer-events-none opacity-60">
          <svg className="w-full max-w-2xl h-full" viewBox="0 0 600 80" fill="none">
            <path d="M 60 0 C 180 60, 240 80, 300 80" stroke="url(#lineGradMkt)" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 180 0 C 230 50, 270 80, 300 80" stroke="url(#lineGradMkt)" strokeWidth="1.5" />
            <path d="M 300 0 L 300 80" stroke="url(#lineGradMkt)" strokeWidth="2" />
            <path d="M 420 0 C 370 50, 330 80, 300 80" stroke="url(#lineGradMkt)" strokeWidth="1.5" />
            <path d="M 540 0 C 420 60, 360 80, 300 80" stroke="url(#lineGradMkt)" strokeWidth="1.5" strokeDasharray="3 3" />
            <defs>
              <linearGradient id="lineGradMkt" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Planetary Orbit Rings & Luminous Monogram Core */}
      <div className="relative w-full max-w-3xl h-[260px] sm:h-[320px] mx-auto flex items-center justify-center">
        {/* Outer Orbit Ring */}
        <div className="absolute w-[95%] sm:w-[85%] h-[180px] sm:h-[220px] rounded-[50%] border border-dashed border-purple-500/25 animate-spin-slow pointer-events-none">
          <div className="absolute -top-1.5 left-1/4 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_#C084FC]" />
          <div className="absolute -bottom-1.5 right-1/4 w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818CF8]" />
        </div>

        {/* Middle Orbit Ring (Reverse Spin) */}
        <div className="absolute w-[75%] sm:w-[65%] h-[130px] sm:h-[160px] rounded-[50%] border border-dashed border-purple-400/30 animate-spin-reverse pointer-events-none">
          <div className="absolute top-1/2 -right-1.5 w-3 h-3 rounded-full bg-fuchsia-400 shadow-[0_0_10px_#F472B6]" />
          <div className="absolute top-1/2 -left-1.5 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38BDF8]" />
        </div>

        {/* Inner Elliptical Ring */}
        <div className="absolute w-[50%] sm:w-[45%] h-[90px] sm:h-[110px] rounded-[50%] border border-purple-500/40 pointer-events-none" />

        {/* Glowing Central Monogram Core */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 30px rgba(168, 85, 247, 0.4)',
              '0 0 60px rgba(168, 85, 247, 0.7)',
              '0 0 30px rgba(168, 85, 247, 0.4)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple-700 via-indigo-800 to-[#190C33] p-[2px] shadow-[0_0_40px_rgba(168,85,247,0.5)] flex items-center justify-center cursor-pointer"
        >
          <div className="w-full h-full rounded-full bg-[#120726] flex items-center justify-center">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-purple-200 drop-shadow-[0_0_12px_rgba(192,132,252,0.9)]"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M 6 27 L 14 19 L 19 23 L 30 9"
                stroke="#34D399"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 23 9 L 30 9 L 30 16"
                stroke="#34D399"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="14" cy="19" r="2.2" fill="#A855F7" />
              <circle cx="19" cy="23" r="2.2" fill="#C084FC" />
              <circle cx="30" cy="9" r="3" fill="#34D399" />
              <text x="7" y="14" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">A</text>
              <text x="15" y="14" fill="#C4B5FD" fontSize="9" fontWeight="900" fontFamily="sans-serif">R</text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OrbitSkills
