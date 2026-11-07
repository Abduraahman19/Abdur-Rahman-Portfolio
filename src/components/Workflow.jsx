// components/Workflow.jsx
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FiSearch, FiLayers, FiSend, FiTrendingUp, FiCheck } from 'react-icons/fi'

const workflowSteps = [
  {
    step: '01',
    title: 'Competitor & Audience Research',
    icon: <FiSearch className="w-5 h-5 text-purple-400" />,
    badgeColor: 'from-purple-600 to-indigo-600',
    description: 'Diving deep into top competitors to identify content gaps, analyze audience demographics, and build practical growth strategies for client brands.',
    highlights: [
      'Competitor gap analysis & posting audit',
      'Demographic & interest cluster research',
      'Data-backed audience segmentation'
    ]
  },
  {
    step: '02',
    title: 'Content Planning & Visual Copy',
    icon: <FiLayers className="w-5 h-5 text-fuchsia-400" />,
    badgeColor: 'from-fuchsia-600 to-purple-600',
    description: 'Developing organized Google Sheets content calendars, engaging captions, targeted hashtags, and high-converting Canva Pro graphics.',
    highlights: [
      'Canva Pro promotional ads & graphics',
      'Captions, tags & SEO product copy',
      'Google Sheets content trackers & workflows'
    ]
  },
  {
    step: '03',
    title: 'Multi-Channel Launch & Scheduling',
    icon: <FiSend className="w-5 h-5 text-indigo-400" />,
    badgeColor: 'from-indigo-600 to-sky-600',
    description: 'Deploying daily posts, Reels, Shorts, and Stories across YouTube, TikTok, Instagram, Facebook, and LinkedIn, along with turnkey Shopify store setups.',
    highlights: [
      'Multi-account daily posts, Reels & Shorts',
      'Meta Ads testing & retargeting setup',
      'Turnkey no-code Shopify store launch'
    ]
  },
  {
    step: '04',
    title: 'Performance Reporting & Scaling',
    icon: <FiTrendingUp className="w-5 h-5 text-emerald-400" />,
    badgeColor: 'from-purple-600 to-emerald-600',
    description: 'Tracking account performance, preparing clear progress reports with actionable improvement ideas, and scaling winning ad funnels.',
    highlights: [
      'Clear progress reports & growth ideas',
      'Ad performance tweaks (ROAS & CTR)',
      'Sustainable multi-account brand scaling'
    ]
  }
]

const stats = [
  { value: '5+', label: 'Channels & Platforms', sub: 'YouTube, TikTok, Meta, LinkedIn, Shopify' },
  { value: '100%', label: 'Focused Execution', sub: 'Punctual & deadline-driven' },
  { value: 'Multi-Client', label: 'Account Management', sub: 'Content calendars & weekly trackers' },
  { value: 'Data-Driven', label: 'Reporting & Strategy', sub: 'Audience insights & ROAS monitoring' },
]

const Workflow = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="workflow"
      ref={ref}
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1300px] mx-auto"
    >
      {/* Ambient glow (Hardware Accelerated) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.14) 0%, transparent 70%)'
        }}
      />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2.5 mb-10 sm:mb-14">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs font-mono font-semibold tracking-widest text-purple-600 dark:text-purple-400 uppercase"
        >
          STRATEGIC METHODOLOGY
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          How I Deliver Measurable Growth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base text-slate-600 dark:text-purple-200/70 max-w-xl leading-relaxed"
        >
          A proven 4-step framework engineered to scale multi-client social media accounts, high-converting stores, and profitable ad funnels.
        </motion.p>
      </div>

      {/* 4-Step Process Grid in Cosmic Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {workflowSteps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col p-6 rounded-2xl bg-white/90 dark:bg-[#140929]/80 backdrop-blur-xl border border-purple-200 dark:border-purple-500/25 hover:border-purple-400 dark:hover:border-purple-400/60 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-md dark:hover:shadow-[0_0_35px_rgba(147,51,234,0.3)] transition-all duration-300"
          >
            {/* Step Number & Icon Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-extrabold font-mono text-purple-600/70 dark:text-purple-400/60 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                {item.step}
              </span>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.badgeColor} p-0.5 shadow-md flex items-center justify-center`}>
                <div className="w-full h-full rounded-[10px] bg-purple-50 dark:bg-[#120726] flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-slate-600 dark:text-slate-300/80 leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Bullets */}
            <ul className="space-y-1.5 mt-auto pt-3 border-t border-purple-200 dark:border-purple-500/20">
              {item.highlights.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-purple-200/90 leading-tight">
                  <FiCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Metrics Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mt-10 sm:mt-12 p-6 rounded-2xl bg-white/90 dark:bg-[#170C30]/90 border border-purple-200 dark:border-purple-500/30 shadow-sm dark:shadow-[0_0_30px_rgba(147,51,234,0.2)] grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {stats.map((stat, sIdx) => (
          <div key={sIdx} className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-300 dark:to-fuchsia-300 font-mono">
              {stat.value}
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white mt-1">
              {stat.label}
            </span>
            <span className="text-[11px] text-slate-600 dark:text-purple-300/70 mt-0.5">
              {stat.sub}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Workflow
