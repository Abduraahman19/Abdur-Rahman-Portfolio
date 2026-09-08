// components/Workflow.jsx
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FiSearch, FiLayers, FiSend, FiTrendingUp, FiCheck } from 'react-icons/fi'

const workflowSteps = [
  {
    step: '01',
    title: 'Audience & Market Research',
    icon: <FiSearch className="w-5 h-5 text-purple-400" />,
    badgeColor: 'from-purple-600 to-indigo-600',
    description: 'Diving deep into customer demographics, competitor presence, and target buyer personas to guarantee advertising efficiency.',
    highlights: [
      'Demographic & interest cluster research',
      'Competitor creative & store audits',
      'Data-backed audience segmentation'
    ]
  },
  {
    step: '02',
    title: 'Visuals & Conversion Copy',
    icon: <FiLayers className="w-5 h-5 text-fuchsia-400" />,
    badgeColor: 'from-fuchsia-600 to-purple-600',
    description: 'Crafting persuasive ad creatives on Canva Pro paired with SEO product descriptions structured to maximize conversion.',
    highlights: [
      'High-converting promotional graphics (Canva Pro)',
      'Keyword-rich SEO product titles & copy',
      'Consistent social media visual branding'
    ]
  },
  {
    step: '03',
    title: 'Store Setup & Campaign Launch',
    icon: <FiSend className="w-5 h-5 text-indigo-400" />,
    badgeColor: 'from-indigo-600 to-sky-600',
    description: 'Configuring turnkey Shopify storefronts and deploying structured Meta ad campaigns across testing and retargeting stages.',
    highlights: [
      'Complete no-code Shopify store setups',
      'Meta Ads testing & retargeting setup',
      'Pixel tracking & catalog data syncing'
    ]
  },
  {
    step: '04',
    title: 'ROAS Optimization & Scaling',
    icon: <FiTrendingUp className="w-5 h-5 text-emerald-400" />,
    badgeColor: 'from-purple-600 to-emerald-600',
    description: 'Continuous monitoring of key advertising numbers (CTR, CPC, CPA, ROAS) to cut waste and scale winning campaigns.',
    highlights: [
      'Daily performance tracking & tweaks',
      'Budget optimization & CPA reduction',
      'Sustainable scaling of winning audiences'
    ]
  }
]

const stats = [
  { value: '4+', label: 'Core Tools Mastered', sub: 'Shopify, Meta Ads, Canva, LinkedIn' },
  { value: '100%', label: 'Focused Execution', sub: 'Punctual & deadline-driven' },
  { value: 'Data-Driven', label: 'Campaign Strategy', sub: 'Audience insights & ROAS monitoring' },
  { value: 'Direct', label: 'B2B Client Outreach', sub: 'Corporate authority building' },
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
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2.5 mb-10 sm:mb-14">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs font-mono font-semibold tracking-widest text-purple-400 uppercase"
        >
          STRATEGIC METHODOLOGY
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          How I Deliver Measurable Growth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base text-purple-200/70 max-w-xl leading-relaxed"
        >
          A proven 4-step framework engineered to launch turnkey Shopify stores and scale profitable digital marketing funnels.
        </motion.p>
      </div>

      {/* 4-Step Process Grid in Figma Cosmic Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {workflowSteps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col p-6 rounded-2xl bg-[#140929]/80 backdrop-blur-xl border border-purple-500/25 hover:border-purple-400/60 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(147,51,234,0.3)] transition-all duration-300"
          >
            {/* Step Number & Icon Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-extrabold font-mono text-purple-400/60 group-hover:text-purple-300 transition-colors">
                {item.step}
              </span>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.badgeColor} p-0.5 shadow-md flex items-center justify-center`}>
                <div className="w-full h-full rounded-[10px] bg-[#120726] flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-slate-300/80 leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Bullets */}
            <ul className="space-y-1.5 mt-auto pt-3 border-t border-purple-500/20">
              {item.highlights.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2 text-[11px] text-purple-200/90 leading-tight">
                  <FiCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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
        className="mt-10 sm:mt-12 p-6 rounded-2xl bg-[#170C30]/90 border border-purple-500/30 shadow-[0_0_30px_rgba(147,51,234,0.2)] grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {stats.map((stat, sIdx) => (
          <div key={sIdx} className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300 font-mono">
              {stat.value}
            </span>
            <span className="text-xs font-bold text-white mt-1">
              {stat.label}
            </span>
            <span className="text-[11px] text-purple-300/70 mt-0.5">
              {stat.sub}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Workflow
