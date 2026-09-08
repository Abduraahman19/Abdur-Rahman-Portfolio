// components/Experience.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { FiCheck, FiX, FiCalendar, FiMapPin, FiAward, FiDownload, FiFileText, FiEye, FiZoomIn, FiZoomOut, FiMaximize2, FiExternalLink } from 'react-icons/fi'
import { SiLinkedin, SiMeta, SiShopify, SiCanva } from 'react-icons/si'

const experiences = [
  {
    id: 'nextlevel',
    role: 'LinkedIn Marketing Intern',
    company: 'Next Level Software Company',
    period: 'April 2026 – July 2026',
    location: 'Faisalabad, Pakistan',
    tagline: 'Strategic B2B outreach, client acquisition & professional brand presence.',
    badgeIcon: <SiLinkedin className="w-7 h-7 text-[#0A66C2]" />,
    badgeColor: 'from-[#0A66C2] to-indigo-600',
    credentialNote: 'Official Letter Verified',
    experienceLetterImg: '/next-level-experience-letter.png',
    description: 'Optimized professional LinkedIn accounts, ran targeted corporate outreach, and conducted research to discover new business trends.',
    responsibilities: [
      'Optimized professional LinkedIn accounts to build a stronger brand presence.',
      'Ran targeted B2B outreach and lead generation campaigns to connect with corporate clients.',
      'Handled day-to-day business development tasks to assist with client acquisition.',
      'Conducted market research to spot new business trends and outreach opportunities.'
    ],
    skills: ['LinkedIn Outreach', 'B2B Lead Generation', 'Profile Optimization', 'Market Research', 'Professional Messaging']
  },
  {
    id: 'adrightly',
    role: 'Digital Marketing Intern',
    company: 'AdRightly',
    period: 'Oct 2024 – Dec 2024',
    location: 'Faisalabad, Pakistan',
    tagline: 'Meta Ads performance marketing, audience demographics & Shopify operations.',
    badgeIcon: <SiMeta className="w-7 h-7 text-[#0081FB]" />,
    badgeColor: 'from-[#0081FB] to-purple-600',
    credentialNote: 'Verified Agency Internship',
    description: 'Collaborated with senior marketers to set up Meta ad campaigns, track ad performance metrics, and manage Shopify store syncs.',
    responsibilities: [
      'Worked with senior marketers to help set up and monitor Meta ad campaigns (Facebook & Instagram).',
      'Tracked ad performance numbers (CTR, CPC, CPA, ROAS) and suggested tweaks to improve results.',
      'Dug into audience insights to make sure ads reached the right demographics.',
      'Assisted with backend store management, product syncing, and daily tasks on Shopify.'
    ],
    skills: ['Meta Ads Manager', 'Audience Research', 'Budget Setup', 'Shopify Admin', 'Product Syncing']
  },
  {
    id: 'shopify_mgmt',
    role: 'Shopify & Store Specialist',
    company: 'E-Commerce Store Operations',
    period: 'Hands-on Practice',
    location: 'Faisalabad / Remote',
    tagline: 'Complete store setups, SEO descriptions, and turnkey no-code customizations.',
    badgeIcon: <SiShopify className="w-7 h-7 text-[#95BF47]" />,
    badgeColor: 'from-[#95BF47] to-emerald-600',
    credentialNote: 'Official CV Expertise',
    description: 'Building Shopify stores from scratch, writing SEO product copy, customizing no-code layouts, and tracking fulfillment.',
    responsibilities: [
      'Complete Shopify store setup from scratch, domain connection, and payment setup.',
      'Product uploads with keyword-rich SEO descriptions and organized collections.',
      'Theme customization utilizing intuitive no-code layouts for maximum mobile conversion.',
      'App integrations, inventory tracking, shipping configuration, and order fulfillment.'
    ],
    skills: ['Shopify Admin Panel', 'Complete Store Setup', 'SEO Product Descriptions', 'App Integrations', 'Fulfillment']
  },
  {
    id: 'social_design',
    role: 'Social Media & Design Specialist',
    company: 'Brand Marketing & Outreach',
    period: 'Hands-on Practice',
    location: 'Faisalabad / Remote',
    tagline: 'Canva Pro graphics, content scheduling, and community engagement.',
    badgeIcon: <SiCanva className="w-7 h-7 text-[#00C4CC]" />,
    badgeColor: 'from-[#00C4CC] to-indigo-600',
    credentialNote: 'Official CV Expertise',
    description: 'Managing social media accounts, crafting high-converting ad graphics in Canva Pro, and scheduling content calendars.',
    responsibilities: [
      'Comprehensive social media profile management and brand aesthetics.',
      'Strategic content planning, editorial calendar management, and scheduling.',
      'High-converting promotional graphic design using Canva Pro for Meta and LinkedIn.',
      'Audience engagement, comment management, and brand messaging consistency.'
    ],
    skills: ['Canva Pro', 'Content Planning & Scheduling', 'Profile Management', 'Graphics Design', 'Audience Engagement']
  }
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const [selectedExp, setSelectedExp] = useState(null)
  const [letterModalOpen, setLetterModalOpen] = useState(false)
  const [letterMode, setLetterMode] = useState('fit') // 'fit' or 'read'
  const [zoomLevel, setZoomLevel] = useState(100)

  const handleOpenLetter = (mode = 'fit') => {
    setLetterMode(mode)
    setZoomLevel(100)
    setLetterModalOpen(true)
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8 max-w-[1300px] mx-auto"
    >
      {/* Central Ambient Violet Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2.5 mb-8 sm:mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs font-mono font-semibold tracking-widest text-purple-400 uppercase"
        >
          EXPERIENCE & EXPERTISE (CV)
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Work Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base text-purple-200/70 max-w-xl leading-relaxed"
        >
          Practical agency internships and e-commerce marketing operations directly from official resume credentials.
        </motion.p>
      </div>

      {/* 2x2 Glowing Cards Grid matching Figma Screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#140929]/80 backdrop-blur-xl border border-purple-500/25 hover:border-purple-400/60 shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(147,51,234,0.3)] transition-all duration-300"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              {/* 3D Illuminated Badge Icon */}
              <div className="shrink-0">
                <div className={`w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${exp.badgeColor} p-0.5 shadow-[0_0_20px_rgba(147,51,234,0.4)] flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <div className="w-full h-full rounded-[14px] bg-[#120726] flex items-center justify-center text-2xl sm:text-3xl">
                    {exp.badgeIcon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-1.5 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                  {exp.role}
                </h3>

                <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
                  <span className="truncate">{exp.company}</span>
                  <span className="text-purple-500/50">·</span>
                  <span className="text-purple-300/60 font-mono shrink-0">{exp.period}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300/80 line-clamp-2 leading-relaxed mt-1">
                  {exp.description}
                </p>
              </div>
            </div>

            {/* If Experience Letter Available: Dedicated Visual Document Preview Box */}
            {exp.experienceLetterImg && (
              <div
                onClick={() => handleOpenLetter('fit')}
                className="mt-4 p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-emerald-950/40 via-[#160a2b] to-purple-950/40 border border-emerald-500/35 hover:border-emerald-400 transition-all cursor-pointer group/letter shadow-[0_4px_18px_rgba(16,185,129,0.14)]"
                title="Tap to view verified official letter"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-11 h-13 rounded-lg overflow-hidden border border-emerald-400/50 shrink-0 bg-white shadow-md">
                      <img
                        src="/next-level-experience-letter.png"
                        alt="Experience Letter Preview"
                        className="w-full h-full object-cover object-top filter brightness-95 group-hover/letter:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-emerald-600/10 pointer-events-none" />
                    </div>
                    <div className="flex flex-col min-w-0 text-left">
                      <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                        <FiAward className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">Official Experience Letter</span>
                      </span>
                      <span className="text-[10px] text-purple-200/70 font-mono truncate">
                        Verified 3-Month Internship · 01 April - 04 July 2026
                      </span>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 group-hover/letter:bg-emerald-500/30 transition-all flex items-center gap-1">
                    <FiEye className="w-3 h-3" />
                    <span>View</span>
                  </span>
                </div>
              </div>
            )}

            {/* Pill Action Buttons */}
            <div className="pt-4 mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-purple-500/15">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedExp(exp)}
                  className="btn-learn-more"
                  aria-label={`Learn more about ${exp.role}`}
                >
                  <span>LEARN MORE</span>
                </button>
                {exp.experienceLetterImg && (
                  <button
                    onClick={() => handleOpenLetter('read')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
                    title="Open 100% Crisp Reading Mode"
                  >
                    <FiAward className="w-3.5 h-3.5 text-emerald-400" />
                    <span>READ LETTER</span>
                  </button>
                )}
              </div>

              <span className="text-[10px] font-mono text-purple-400/60 uppercase">
                {exp.location}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Detail Modal for "LEARN MORE" */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#170B30] border border-purple-500/40 shadow-[0_0_50px_rgba(147,51,234,0.45)] text-left flex flex-col gap-5"
            >
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-purple-300 hover:text-white bg-purple-950/60 border border-purple-500/30 transition-all"
                aria-label="Close modal"
              >
                <FiX size={18} />
              </button>

              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedExp.badgeColor} p-0.5 shadow-lg flex items-center justify-center shrink-0`}>
                  <div className="w-full h-full rounded-[14px] bg-[#120726] flex items-center justify-center text-2xl">
                    {selectedExp.badgeIcon}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {selectedExp.role}
                  </h3>
                  <span className="text-xs font-semibold text-purple-400">
                    {selectedExp.company}
                  </span>
                  <div className="flex items-center gap-2 mt-1 text-xs font-mono text-purple-300/70">
                    <span className="flex items-center gap-1"><FiCalendar className="w-3 h-3 text-purple-400" /> {selectedExp.period}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><FiMapPin className="w-3 h-3 text-purple-400" /> {selectedExp.location}</span>
                  </div>
                </div>
              </div>

              <div className="px-3 py-1.5 rounded-xl bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-200">
                Status: <span className="text-emerald-300 font-bold">{selectedExp.credentialNote}</span>
              </div>

              {/* Experience Letter Banner if available */}
              {selectedExp.experienceLetterImg && (
                <div className="p-3.5 rounded-2xl bg-[#120626] border border-emerald-500/30 flex items-center justify-between gap-3 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <FiAward className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        Official Experience Letter
                      </span>
                      <span className="text-[11px] text-purple-300/80 font-mono">
                        Next Level Software (Verified Internship)
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedExp(null)
                      handleOpenLetter('fit')
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition-all shrink-0"
                  >
                    <FiEye className="w-3.5 h-3.5" />
                    <span>View Letter</span>
                  </button>
                </div>
              )}

              <div className="flex flex-col gap-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">
                  Key Tasks & Achievements:
                </span>
                <ul className="space-y-2">
                  {selectedExp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <FiCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedExp.skills.map((skill, i) => (
                  <span key={i} className="badge-figma-tech">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-purple-500/20 flex justify-end">
                <button
                  onClick={() => setSelectedExp(null)}
                  className="btn-figma-primary !py-2 !px-5"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Universal Multi-Device Experience Letter Lightbox Modal */}
      <AnimatePresence>
        {letterModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full h-full sm:h-auto sm:max-h-[94vh] sm:max-w-4xl flex flex-col rounded-none sm:rounded-3xl bg-[#120726] sm:border border-purple-500/40 shadow-[0_0_70px_rgba(147,51,234,0.5)] overflow-hidden text-left"
            >
              {/* Primary Header */}
              <div className="flex items-center justify-between px-3 sm:px-5 py-3 bg-[#1B0D36] border-b border-purple-500/20 shrink-0 gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="p-1.5 sm:p-2 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <FiAward className="w-4 h-4" />
                  </span>
                  <div className="flex flex-col min-w-0 text-left">
                    <h3 className="text-xs sm:text-base font-bold text-white tracking-tight truncate">
                      Next Level Software — Experience Letter
                    </h3>
                    <span className="text-[10px] sm:text-xs font-mono text-emerald-400/90 truncate">
                      ✓ Verified Internship · 01 April 2026 – 04 July 2026
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  {/* Open in New Tab for Native High-Res Browser Pinch-to-Zoom */}
                  <a
                    href="/next-level-experience-letter.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-200 hover:text-white hover:bg-purple-600/30 transition-all text-xs font-semibold flex items-center gap-1.5"
                    title="Open Full High-Resolution in New Tab"
                  >
                    <FiExternalLink className="w-3.5 h-3.5 text-purple-300" />
                    <span className="hidden sm:inline">Full Screen</span>
                  </a>

                  {/* Direct Download */}
                  <a
                    href="/next-level-experience-letter.png"
                    download="Next-Level-Software-Experience-Letter-Abdur-Rahman.png"
                    className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-200 hover:text-white hover:bg-purple-600/30 transition-all text-xs font-semibold flex items-center gap-1.5"
                    title="Download Letter Image"
                  >
                    <FiDownload className="w-3.5 h-3.5 text-purple-300" />
                    <span className="hidden sm:inline">Save</span>
                  </a>

                  {/* Close */}
                  <button
                    onClick={() => setLetterModalOpen(false)}
                    className="p-1.5 sm:p-2 rounded-full text-purple-300 hover:text-white bg-purple-950/80 border border-purple-500/30 hover:border-purple-400 transition-all ml-1"
                    aria-label="Close letter preview"
                  >
                    <FiX size={18} />
                  </button>
                </div>
              </div>

              {/* Multi-Device Reading Mode & Zoom Control Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-3 sm:px-5 py-2 bg-[#0E051F] border-b border-purple-500/15 shrink-0 text-xs font-medium text-purple-200">
                {/* Mode Selector */}
                <div className="flex items-center gap-1 bg-[#170B30] p-1 rounded-xl border border-purple-500/30">
                  <button
                    onClick={() => {
                      setLetterMode('fit')
                      setZoomLevel(100)
                    }}
                    className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 text-[11px] font-semibold ${
                      letterMode === 'fit'
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-purple-300 hover:text-white hover:bg-purple-900/40'
                    }`}
                    title="Fit entire letter on screen"
                  >
                    <FiMaximize2 className="w-3 h-3" />
                    <span>Fit Screen</span>
                  </button>

                  <button
                    onClick={() => {
                      setLetterMode('read')
                      setZoomLevel(100)
                    }}
                    className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 text-[11px] font-semibold ${
                      letterMode === 'read'
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-emerald-300 hover:text-white hover:bg-emerald-950/50'
                    }`}
                    title="100% Native sharp text reading mode"
                  >
                    <FiFileText className="w-3 h-3" />
                    <span>100% Crisp Reading Mode</span>
                  </button>
                </div>

                {/* Zoom Stepper (Works in both modes) */}
                <div className="flex items-center gap-1.5 ml-auto">
                  <div className="flex items-center bg-[#170B30] border border-purple-500/30 rounded-xl p-0.5 text-xs">
                    <button
                      onClick={() => {
                        setLetterMode('zoom')
                        setZoomLevel((prev) => Math.max(60, prev - 20))
                      }}
                      className="p-1 hover:text-white hover:bg-purple-900/50 rounded-md transition-colors"
                      title="Zoom Out"
                      aria-label="Zoom Out"
                    >
                      <FiZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2 font-mono text-[11px] text-purple-300">
                      {letterMode === 'fit' ? 'Auto Fit' : `${zoomLevel}%`}
                    </span>
                    <button
                      onClick={() => {
                        setLetterMode('zoom')
                        setZoomLevel((prev) => Math.min(220, prev + 20))
                      }}
                      className="p-1 hover:text-white hover:bg-purple-900/50 rounded-md transition-colors"
                      title="Zoom In"
                      aria-label="Zoom In"
                    >
                      <FiZoomIn className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Document Canvas with Smooth Touch Pan & Scroll */}
              <div className="flex-1 overflow-auto bg-[#07020F] p-2 sm:p-6 flex justify-center items-start overscroll-contain select-none touch-pan-x touch-pan-y">
                {letterMode === 'fit' ? (
                  /* Fit Screen Mode: Fits the whole letter into the viewport cleanly */
                  <div
                    onClick={() => {
                      setLetterMode('read')
                      setZoomLevel(100)
                    }}
                    className="relative my-auto max-w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.95)] border border-purple-500/30 bg-white cursor-zoom-in transition-transform hover:scale-[1.01]"
                    title="Tap to switch to 100% Crisp Reading Mode"
                  >
                    <img
                      src="/next-level-experience-letter.png"
                      alt="Next Level Software Experience Letter - Abdur Rahman"
                      className="max-h-[calc(100vh-150px)] sm:max-h-[72vh] w-auto max-w-full object-contain block"
                    />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-mono text-emerald-300 border border-emerald-500/40 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                      <span>🔍</span>
                      <span>Tap image for 100% Crisp Reading Mode</span>
                    </div>
                  </div>
                ) : (
                  /* Crisp Reading / Zoom Mode: Native 724px resolution for effortless reading on every phone & PC */
                  <div
                    style={{
                      width: `${Math.round(724 * (zoomLevel / 100))}px`,
                      maxWidth: 'none',
                    }}
                    className="relative my-2 rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-purple-500/30 bg-white shrink-0 mx-auto transition-all duration-150"
                  >
                    <img
                      src="/next-level-experience-letter.png"
                      alt="Next Level Software Experience Letter - Abdur Rahman"
                      className="w-full h-auto block"
                      draggable="false"
                    />
                  </div>
                )}
              </div>

              {/* Bottom Helpful Device Guidance Footer */}
              <div className="px-3 sm:px-5 py-2 bg-[#120726] border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-purple-300/70 shrink-0">
                <span className="hidden sm:inline">
                  ✓ Verified official document. Scroll or drag in all directions to inspect dates, stamps, and signatures.
                </span>
                <span className="sm:hidden text-[10px]">
                  💡 Swipe screen to read all details clearly.
                </span>
                <button
                  onClick={() => {
                    if (letterMode === 'fit') {
                      setLetterMode('read')
                      setZoomLevel(100)
                    } else {
                      setLetterMode('fit')
                    }
                  }}
                  className="text-emerald-400 hover:text-emerald-300 font-bold ml-auto"
                >
                  {letterMode === 'fit' ? 'Switch to Crisp Reading Mode →' : '↺ Back to Fit Screen'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Experience