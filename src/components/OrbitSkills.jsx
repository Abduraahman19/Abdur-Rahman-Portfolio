// components/OrbitSkills.jsx
import { useState, useRef, useMemo, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import BrandLogo from './BrandLogo.jsx'
import {
  SiMeta,
  SiShopify,
  SiCanva,
  SiLinkedin,
  SiYoutube,
  SiTiktok,
  SiGooglesheets
} from 'react-icons/si'
import {
  FiShoppingBag,
  FiSearch,
  FiLayers,
  FiBarChart2,
  FiTarget,
  FiPause,
  FiPlay,
  FiSliders,
  FiCheckCircle,
  FiCompass,
  FiGrid,
  FiArrowUpRight
} from 'react-icons/fi'

// Complete, CV-grounded 12-Node Marketing & E-Commerce Ecosystem
const SKILLS_DATA = [
  // Orbit 1: Inner Core Execution Engines (Radius: ~130px, 3 nodes spaced at 0°, 120°, 240°)
  {
    id: 'meta-ads',
    name: 'Meta Ads Manager & Suite',
    shortName: 'Meta Ads Suite',
    category: 'paid-ads',
    orbit: 1,
    angle: 0,
    icon: SiMeta,
    iconColor: 'text-blue-500',
    borderColor: 'border-blue-500/40 hover:border-blue-400',
    glowColor: 'rgba(59, 130, 246, 0.45)',
    proficiency: 98,
    metric: '4.2x Peak ROAS',
    highlight: 'Full-Funnel Campaign Scaling',
    description: 'Advanced CBO/ABO scaling architecture, Conversion API (CAPI), high-intent Custom & Lookalike audiences, and rapid creative iteration testing.',
    tags: ['CAPI / Pixel', 'A/B Creative Testing', 'CBO Scaling', 'Retargeting Funnels']
  },
  {
    id: 'shopify-admin',
    name: 'Shopify Admin Operations',
    shortName: 'Shopify Admin',
    category: 'shopify',
    orbit: 1,
    angle: 120,
    icon: SiShopify,
    iconColor: 'text-emerald-500',
    borderColor: 'border-emerald-500/40 hover:border-emerald-400',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    proficiency: 96,
    metric: '35+ Stores Scaled',
    highlight: 'High-Converting Store Architecture',
    description: 'Turnkey e-commerce management, premium responsive themes, high-AOV app integrations, inventory workflows, and checkout friction reduction.',
    tags: ['Theme Customization', 'App Ecosystem', 'Checkout CRO', 'Inventory Ops']
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets (KPI & P&L Trackers)',
    shortName: 'Google Sheets',
    category: 'analytics',
    orbit: 1,
    angle: 240,
    icon: SiGooglesheets,
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-600/40 hover:border-emerald-400',
    glowColor: 'rgba(5, 150, 105, 0.45)',
    proficiency: 95,
    metric: 'Automated P&L Models',
    highlight: 'Real-Time Financial Clarity',
    description: 'Automated KPI reporting spreadsheets with daily ad spend reconciliations, unit economics breakdowns, cash flow forecasting, and live client dashboards.',
    tags: ['Daily ROAS Sheet', 'Unit Economics', 'Automated Formulas', 'Client Portals']
  },

  // Orbit 2: Middle Growth & Conversion Accelerators (Radius: ~215px, 4 nodes spaced at 30°, 120°, 210°, 300°)
  {
    id: 'canva-pro',
    name: 'Canva Pro Visual Graphics',
    shortName: 'Canva Pro Design',
    category: 'creative',
    orbit: 2,
    angle: 30,
    icon: SiCanva,
    iconColor: 'text-cyan-500',
    borderColor: 'border-cyan-500/40 hover:border-cyan-400',
    glowColor: 'rgba(6, 182, 212, 0.45)',
    proficiency: 96,
    metric: 'High-CTR Ad Creatives',
    highlight: 'Scroll-Stopping Visual Identity',
    description: 'High-converting ad designs, carousel storyboards, clickable video thumbnails, branded marketing collateral, and e-commerce promotional banners.',
    tags: ['Ad Creatives', 'Social Branding', 'Thumbnails', 'Banners']
  },
  {
    id: 'linkedin-outreach',
    name: 'LinkedIn B2B Outreach',
    shortName: 'LinkedIn Outreach',
    category: 'growth',
    orbit: 2,
    angle: 120,
    icon: SiLinkedin,
    iconColor: 'text-sky-500',
    borderColor: 'border-sky-500/40 hover:border-sky-400',
    glowColor: 'rgba(14, 165, 233, 0.45)',
    proficiency: 92,
    metric: '1,200+ Leads Pipeline',
    highlight: 'B2B Relationship & Pipeline Growth',
    description: 'Targeted decision-maker prospecting, personalized value-first messaging cadence, profile optimization, and qualified B2B sales pipeline generation.',
    tags: ['Cold Prospecting', 'B2B Leads', 'Direct Outreach', 'Pipeline Nurturing']
  },
  {
    id: 'target-roas',
    name: 'Budget Setup & Target ROAS',
    shortName: 'Target ROAS & Budget',
    category: 'paid-ads',
    orbit: 2,
    angle: 210,
    icon: FiTarget,
    iconColor: 'text-rose-500',
    borderColor: 'border-rose-500/40 hover:border-rose-400',
    glowColor: 'rgba(244, 63, 94, 0.45)',
    proficiency: 95,
    metric: 'Zero-Wasted Ad Spend',
    highlight: 'Capital Allocation Efficiency',
    description: 'Budget pacing strategies, bid cap allocation, margin protection benchmarks, break-even ROAS models, and seasonal ad spend scaling rules.',
    tags: ['Spend Pacing', 'Bid Caps', 'Margin Benchmarks', 'Profit First']
  },
  {
    id: 'competitor-research',
    name: 'Competitor & Trend Mining',
    shortName: 'Trend Mining',
    category: 'growth',
    orbit: 2,
    angle: 300,
    icon: FiSearch,
    iconColor: 'text-amber-500',
    borderColor: 'border-amber-500/40 hover:border-amber-400',
    glowColor: 'rgba(245, 158, 11, 0.45)',
    proficiency: 93,
    metric: 'Winning Angle Discovery',
    highlight: 'Forensic Market Intelligence',
    description: 'Meta Ad Library audits, TikTok Creative Center trend analysis, winning e-com product mining, market gap exploitation, and angle teardowns.',
    tags: ['Ad Library Spying', 'Winning Angles', 'TikTok Trends', 'Market Gaps']
  },

  // Orbit 3: Outer Scale & Distribution Systems (Radius: ~305px, 5 nodes spaced at 15°, 87°, 159°, 231°, 303°)
  {
    id: 'youtube-growth',
    name: 'YouTube Studio & Distribution',
    shortName: 'YouTube Growth',
    category: 'creative',
    orbit: 3,
    angle: 15,
    icon: SiYoutube,
    iconColor: 'text-red-500',
    borderColor: 'border-red-500/40 hover:border-red-400',
    glowColor: 'rgba(239, 68, 68, 0.45)',
    proficiency: 91,
    metric: 'Audience Retention Ops',
    highlight: 'Video Strategy & Retention',
    description: 'YouTube Studio analytics tracking, Shorts viral distribution cadence, thumbnail A/B testing, and search-optimized title/tag positioning.',
    tags: ['Shorts Strategy', 'CTR Optimization', 'Studio Analytics', 'Retention Graph']
  },
  {
    id: 'tiktok-viral',
    name: 'TikTok Viral Ads & UGC Strategy',
    shortName: 'TikTok Viral Ads',
    category: 'creative',
    orbit: 3,
    angle: 87,
    icon: SiTiktok,
    iconColor: 'text-slate-900 dark:text-cyan-300',
    borderColor: 'border-slate-400/40 hover:border-cyan-400',
    glowColor: 'rgba(6, 182, 212, 0.45)',
    proficiency: 93,
    metric: '3-Sec Hook Framework',
    highlight: 'Native High-Converting UGC',
    description: 'Fast-paced UGC scripts, 3-second visual hooks, trending audio integration, and TikTok Ads Spark campaigns designed for direct response.',
    tags: ['Viral Hooks', 'UGC Scripts', 'Spark Ads', 'TikTok Algorithm']
  },
  {
    id: 'turnkey-launch',
    name: 'Turnkey E-Com Store Launch',
    shortName: 'Turnkey Store Launch',
    category: 'shopify',
    orbit: 3,
    angle: 159,
    icon: FiShoppingBag,
    iconColor: 'text-teal-500',
    borderColor: 'border-teal-500/40 hover:border-teal-400',
    glowColor: 'rgba(20, 184, 166, 0.45)',
    proficiency: 95,
    metric: 'Day 1 Sales Readiness',
    highlight: '0-to-1 Store Deployment',
    description: 'Comprehensive store builds: international payment gateways, high-converting product pages, legal compliance, domain DNS, and shipping rules.',
    tags: ['Payment Gateways', 'Conversion Copy', 'Shipping Rules', 'DNS & Domain']
  },
  {
    id: 'performance-reporting',
    name: 'Performance Analytics & Reporting',
    shortName: 'Performance Analytics',
    category: 'analytics',
    orbit: 3,
    angle: 231,
    icon: FiBarChart2,
    iconColor: 'text-indigo-500',
    borderColor: 'border-indigo-500/40 hover:border-indigo-400',
    glowColor: 'rgba(99, 102, 241, 0.45)',
    proficiency: 94,
    metric: 'Executive Reporting',
    highlight: 'Actionable Performance Clarity',
    description: 'Executive weekly and monthly reporting packages covering CAC, MER, LTV, AOV, blended ROAS, and data-backed scaling recommendations.',
    tags: ['CAC & MER Metrics', 'Weekly Reports', 'Blended ROAS', 'Executive Summaries']
  },
  {
    id: 'multi-account',
    name: 'Multi-Account Operations & Governance',
    shortName: 'Multi-Account Ops',
    category: 'paid-ads',
    orbit: 3,
    angle: 303,
    icon: FiLayers,
    iconColor: 'text-violet-500',
    borderColor: 'border-violet-500/40 hover:border-violet-400',
    glowColor: 'rgba(139, 92, 246, 0.45)',
    proficiency: 96,
    metric: 'Multi-Client Scale',
    highlight: 'Agency-Grade Asset Protection',
    description: 'Simultaneous multi-client Business Manager administration, partner permissions management, role segregation, and zero-downtime ad continuity.',
    tags: ['Agency BM Operations', 'Asset Segregation', 'Client Portfolios', 'Risk Mitigation']
  }
]

const CATEGORIES = [
  { id: 'all', label: 'All Engines', count: 12 },
  { id: 'paid-ads', label: 'Meta Ads & ROAS', count: 3 },
  { id: 'shopify', label: 'Shopify Stores', count: 2 },
  { id: 'creative', label: 'Creative & Video', count: 3 },
  { id: 'growth', label: 'Growth & Outreach', count: 2 },
  { id: 'analytics', label: 'Analytics & Models', count: 2 }
]

const OrbitSkills = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.12 })

  // Interactive UI State
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedSkill, setSelectedSkill] = useState(SKILLS_DATA[0])
  const [isPaused, setIsPaused] = useState(false)
  const [isSlowSpeed, setIsSlowSpeed] = useState(false)
  const [hoveredNodeId, setHoveredNodeId] = useState(null)
  const [viewMode, setViewMode] = useState('orbit') // 'orbit' | 'grid'

  // When category changes, auto-select first item of that category if current selected is outside
  useEffect(() => {
    if (activeCategory !== 'all') {
      const match = SKILLS_DATA.find((s) => s.category === activeCategory)
      if (match && selectedSkill.category !== activeCategory) {
        setSelectedSkill(match)
      }
    }
  }, [activeCategory, selectedSkill])

  // Filtered skills list
  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return SKILLS_DATA
    return SKILLS_DATA.filter((s) => s.category === activeCategory)
  }, [activeCategory])

  // Partition skills by orbit ring
  const orbit1Nodes = useMemo(() => SKILLS_DATA.filter((s) => s.orbit === 1), [])
  const orbit2Nodes = useMemo(() => SKILLS_DATA.filter((s) => s.orbit === 2), [])
  const orbit3Nodes = useMemo(() => SKILLS_DATA.filter((s) => s.orbit === 3), [])

  // Dynamic animation speeds (GPU composited)
  const ring1Duration = isSlowSpeed ? '56s' : '32s'
  const ring2Duration = isSlowSpeed ? '78s' : '44s'
  const ring3Duration = isSlowSpeed ? '98s' : '58s'

  // Should the orbital rotation freeze? (Manual pause, hovered node, or scrolled out of view)
  const isOrbitFrozen = !isInView || isPaused || hoveredNodeId !== null

  // Helper to calculate trigonometric node coordinates on ring of diameter 100%
  const getCoordinates = (angleInDegrees) => {
    const rad = (angleInDegrees * Math.PI) / 180
    // 50% center + 50% radius
    const x = (50 + 50 * Math.cos(rad)).toFixed(3)
    const y = (50 + 50 * Math.sin(rad)).toFixed(3)
    return { left: `${x}%`, top: `${y}%` }
  }

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto overflow-hidden"
    >
      {/* Zero-Lag Hardware Accelerated Ambient Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none -z-10 opacity-70 dark:opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.18) 0%, rgba(6, 182, 212, 0.08) 45%, transparent 70%)'
        }}
      />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4 mb-8 sm:mb-12">
        {/* Top Operational Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-[#0D1526]/90 border border-slate-300 dark:border-blue-500/30 text-xs font-mono text-slate-800 dark:text-cyan-200 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-slate-900 dark:text-white">CORE MARKETING ECOSYSTEM</span>
          <span className="text-slate-400 dark:text-slate-600">·</span>
          <span className="text-blue-600 dark:text-cyan-400 font-bold">12 Connected Engines</span>
        </motion.div>

        {/* Primary Figma Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug"
        >
          I&apos;m currently looking to join a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-300 dark:to-emerald-300 font-black underline decoration-cyan-500/40 underline-offset-8">
            cross-functional
          </span>{' '}
          team
          <br className="hidden sm:inline" /> that values measurable marketing results, high-converting stores, and brand growth.
        </motion.h2>

        {/* CV Grounding Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400 max-w-2xl"
        >
          Grounding from CV: Multi-Account Social Media · Meta Ads Suite · Shopify Store Operations · Google Sheets · Canva Pro · LinkedIn Outreach
        </motion.p>

        {/* Interactive Controls Bar: Category Filters & View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-3 pt-4 border-t border-slate-200 dark:border-slate-800/80"
        >
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-blue-400'
                      : 'bg-white/90 dark:bg-[#0D1526]/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-400/50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white font-bold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* View Switcher: Orbit Cosmos vs Grid Matrix */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-slate-200/80 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800">
            <button
              onClick={() => setViewMode('orbit')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'orbit'
                  ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FiCompass className="w-3.5 h-3.5" />
              <span>Orbit Cosmos</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FiGrid className="w-3.5 h-3.5" />
              <span>Grid Matrix</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* MAIN VIEW AREA: Orbit Cosmos OR Grid Matrix */}
      <AnimatePresence mode="wait">
        {viewMode === 'orbit' ? (
          <motion.div
            key="orbit-mode"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            {/* Top Orbit Controls (Pause / Speed) */}
            <div className="w-full max-w-4xl flex items-center justify-between px-2 mb-1 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="hidden sm:inline">Cosmic Radar Active: Hover any satellite to freeze & inspect</span>
                <span className="sm:hidden">Tap any satellite to inspect</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/80 dark:bg-[#0D1526]/80 border border-slate-200 dark:border-slate-800 hover:border-blue-400 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"
                  title={isPaused ? 'Resume Rotation' : 'Pause Rotation'}
                >
                  {isPaused ? <FiPlay className="w-3 h-3 text-emerald-500" /> : <FiPause className="w-3 h-3 text-amber-500" />}
                  <span>{isPaused ? 'Resume' : 'Freeze'}</span>
                </button>
                <button
                  onClick={() => setIsSlowSpeed(!isSlowSpeed)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/80 dark:bg-[#0D1526]/80 border border-slate-200 dark:border-slate-800 hover:border-blue-400 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"
                  title="Toggle Orbit Speed"
                >
                  <FiSliders className="w-3 h-3 text-blue-500" />
                  <span>{isSlowSpeed ? '0.5x Slow' : '1x Normal'}</span>
                </button>
              </div>
            </div>

            {/* THE PLANETARY ORBIT STAGE */}
            {/* Height-managed container scaling cleanly on mobile without horizontal shift */}
            <div className="w-full h-[370px] min-[400px]:h-[420px] sm:h-[560px] md:h-[660px] flex items-center justify-center relative overflow-hidden sm:overflow-visible select-none">
              {/* Scaled Inner Canvas */}
              <div
                className={`w-[640px] h-[640px] flex items-center justify-center relative scale-[0.52] min-[400px]:scale-[0.60] sm:scale-[0.85] md:scale-100 transition-transform origin-center ${
                  isOrbitFrozen ? 'orbit-paused' : ''
                }`}
              >
                {/* Radar Sweep Scanner Beam */}
                <div className="absolute inset-0 pointer-events-none rounded-full radar-sweep-beam opacity-30 dark:opacity-40">
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background:
                        'conic-gradient(from 0deg, rgba(6, 182, 212, 0.22) 0deg, rgba(37, 99, 235, 0.08) 35deg, transparent 55deg, transparent 360deg)'
                    }}
                  />
                </div>

                {/* Concentric Guide Grid Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                  <div className="h-full w-[1px] absolute bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
                </div>

                {/* =========================================================================
                    RING 3: OUTER SCALE ORBIT (Diameter 610px, 5 Nodes, Clockwise)
                   ========================================================================= */}
                <div
                  className="absolute w-[610px] h-[610px] rounded-full border border-dashed border-slate-300/80 dark:border-blue-500/25 orbit-ring-cw pointer-events-none z-10"
                  style={{ '--orbit-duration': ring3Duration }}
                >
                  {orbit3Nodes.map((node) => {
                    const coords = getCoordinates(node.angle)
                    const isSelected = selectedSkill?.id === node.id
                    const isDimmed = activeCategory !== 'all' && node.category !== activeCategory

                    return (
                      <div
                        key={node.id}
                        style={coords}
                        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                      >
                        <div
                          style={{ '--orbit-duration': ring3Duration }}
                          className="orbit-node-cw"
                        >
                          <button
                            type="button"
                            onClick={() => setSelectedSkill(node)}
                            onMouseEnter={() => {
                              setSelectedSkill(node)
                              setHoveredNodeId(node.id)
                            }}
                            onMouseLeave={() => setHoveredNodeId(null)}
                            className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0D1526]/95 border shadow-sm transition-all duration-200 cursor-pointer ${
                              node.borderColor
                            } ${
                              isSelected
                                ? 'scale-110 border-cyan-400 ring-2 ring-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.4)] z-30'
                                : 'hover:scale-105'
                            } ${isDimmed ? 'opacity-25 grayscale' : 'opacity-100'}`}
                          >
                            <node.icon className={`w-4 h-4 shrink-0 ${node.iconColor}`} />
                            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                              {node.shortName}
                            </span>
                            {activeCategory === node.category && (
                              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                            )}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* =========================================================================
                    RING 2: MIDDLE GROWTH ORBIT (Diameter 430px, 4 Nodes, Counter-Clockwise)
                   ========================================================================= */}
                <div
                  className="absolute w-[430px] h-[430px] rounded-full border border-dashed border-slate-300/80 dark:border-cyan-400/25 orbit-ring-ccw pointer-events-none z-15"
                  style={{ '--orbit-duration': ring2Duration }}
                >
                  {orbit2Nodes.map((node) => {
                    const coords = getCoordinates(node.angle)
                    const isSelected = selectedSkill?.id === node.id
                    const isDimmed = activeCategory !== 'all' && node.category !== activeCategory

                    return (
                      <div
                        key={node.id}
                        style={coords}
                        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                      >
                        <div
                          style={{ '--orbit-duration': ring2Duration }}
                          className="orbit-node-ccw"
                        >
                          <button
                            type="button"
                            onClick={() => setSelectedSkill(node)}
                            onMouseEnter={() => {
                              setSelectedSkill(node)
                              setHoveredNodeId(node.id)
                            }}
                            onMouseLeave={() => setHoveredNodeId(null)}
                            className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0D1526]/95 border shadow-sm transition-all duration-200 cursor-pointer ${
                              node.borderColor
                            } ${
                              isSelected
                                ? 'scale-110 border-cyan-400 ring-2 ring-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.4)] z-30'
                                : 'hover:scale-105'
                            } ${isDimmed ? 'opacity-25 grayscale' : 'opacity-100'}`}
                          >
                            <node.icon className={`w-4 h-4 shrink-0 ${node.iconColor}`} />
                            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                              {node.shortName}
                            </span>
                            {activeCategory === node.category && (
                              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                            )}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* =========================================================================
                    RING 1: INNER CORE ORBIT (Diameter 260px, 3 Nodes, Clockwise)
                   ========================================================================= */}
                <div
                  className="absolute w-[260px] h-[260px] rounded-full border border-slate-300 dark:border-blue-500/35 orbit-ring-cw pointer-events-none z-20"
                  style={{ '--orbit-duration': ring1Duration }}
                >
                  {orbit1Nodes.map((node) => {
                    const coords = getCoordinates(node.angle)
                    const isSelected = selectedSkill?.id === node.id
                    const isDimmed = activeCategory !== 'all' && node.category !== activeCategory

                    return (
                      <div
                        key={node.id}
                        style={coords}
                        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                      >
                        <div
                          style={{ '--orbit-duration': ring1Duration }}
                          className="orbit-node-cw"
                        >
                          <button
                            type="button"
                            onClick={() => setSelectedSkill(node)}
                            onMouseEnter={() => {
                              setSelectedSkill(node)
                              setHoveredNodeId(node.id)
                            }}
                            onMouseLeave={() => setHoveredNodeId(null)}
                            className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0D1526]/95 border shadow-sm transition-all duration-200 cursor-pointer ${
                              node.borderColor
                            } ${
                              isSelected
                                ? 'scale-110 border-cyan-400 ring-2 ring-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.4)] z-30'
                                : 'hover:scale-105'
                            } ${isDimmed ? 'opacity-25 grayscale' : 'opacity-100'}`}
                          >
                            <node.icon className={`w-4 h-4 shrink-0 ${node.iconColor}`} />
                            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                              {node.shortName}
                            </span>
                            {activeCategory === node.category && (
                              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                            )}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* =========================================================================
                    CENTRAL CELESTIAL MONOGRAM CORE (Abdur Rahman Command Hub)
                   ========================================================================= */}
                <div className="relative z-30 flex flex-col items-center justify-center">
                  {/* Energy Aura Pulse */}
                  <div className="absolute w-32 h-32 rounded-full bg-blue-500/10 dark:bg-cyan-500/15 animate-ping pointer-events-none" />

                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedSkill(SKILLS_DATA[0])
                      setActiveCategory('all')
                    }}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-blue-700 via-indigo-900 to-[#070B12] p-[2.5px] shadow-[0_0_40px_rgba(37,99,235,0.55)] flex items-center justify-center cursor-pointer"
                    title="Abdur Rahman · Central Command Hub (Click to Reset)"
                  >
                    <BrandLogo className="w-20 h-20 sm:w-24 sm:h-24" id="orbit-core-advanced" />
                  </motion.div>

                  {/* Core Monogram Badge */}
                  <div className="absolute -bottom-4 px-3 py-0.5 rounded-full bg-slate-900/90 border border-cyan-500/50 text-[10px] font-mono text-cyan-300 font-semibold tracking-wider uppercase shadow-sm">
                    CORE HUB
                  </div>
                </div>
              </div>
            </div>

            {/* DOCKED ACTIVE NODE TELEMETRY HUD (The Advanced Hologram Inspector) */}
            <div className="w-full max-w-4xl mx-auto mt-4">
              <AnimatePresence mode="wait">
                {selectedSkill && (
                  <motion.div
                    key={selectedSkill.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="relative p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-[#0D1526]/90 border border-slate-200 dark:border-blue-500/30 shadow-lg dark:shadow-[0_0_30px_rgba(37,99,235,0.15)] backdrop-blur-xl"
                  >
                    {/* Top Row: Icon, Title, Metric, Category */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-3.5">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-blue-500/30 shadow-sm"
                          style={{ boxShadow: `0 0 15px ${selectedSkill.glowColor}` }}
                        >
                          <selectedSkill.icon className={`w-6 h-6 ${selectedSkill.iconColor}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                              {selectedSkill.name}
                            </h3>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-500/30">
                              <FiCheckCircle className="w-2.5 h-2.5 text-emerald-500" />
                              {selectedSkill.proficiency}% Verified
                            </span>
                          </div>
                          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                            {selectedSkill.highlight}
                          </p>
                        </div>
                      </div>

                      {/* Verified Impact Pill */}
                      <div className="flex items-center gap-3">
                        <div className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-cyan-500/10 border border-blue-500/30 text-right">
                          <span className="block text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400">
                            Demonstrated Impact
                          </span>
                          <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-300">
                            {selectedSkill.metric}
                          </span>
                        </div>
                        <a
                          href="#contact"
                          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all active:scale-95"
                        >
                          <span>Hire for This</span>
                          <FiArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Middle: Detailed CV Grounded Description */}
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed my-3.5">
                      {selectedSkill.description}
                    </p>

                    {/* Bottom Row: Tags & Proficiency Bar */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mr-1">
                          Core Capabilities:
                        </span>
                        {selectedSkill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Animated Proficiency Bar */}
                      <div className="w-full sm:w-48 flex flex-col gap-1">
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
                          <span>Execution Mastery</span>
                          <span className="font-bold text-blue-600 dark:text-cyan-400">
                            {selectedSkill.proficiency}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${selectedSkill.proficiency}%` }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-400"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          /* =========================================================================
             GRID MATRIX VIEW (High-Density Recruiter / Executive Bento View)
             ========================================================================= */
          <motion.div
            key="grid-mode"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white/95 dark:bg-[#0D1526]/90 border border-slate-200 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-cyan-400 shadow-sm hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300"
                >
                  {/* Top: Icon + Title + Impact Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                        style={{ boxShadow: `0 0 10px ${skill.glowColor}` }}
                      >
                        <skill.icon className={`w-5 h-5 ${skill.iconColor}`} />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-500/30">
                        {skill.metric}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2 line-clamp-3">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom: Tags + Proficiency */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {skill.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-1">
                      <span>Verified Mastery</span>
                      <span className="font-bold text-blue-600 dark:text-cyan-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-400 transition-all duration-500"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default OrbitSkills
