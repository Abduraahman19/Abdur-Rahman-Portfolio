// components/About.jsx
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  FiBookOpen,
  FiAward,
  FiMapPin,
  FiMail,
  FiPhone,
  FiCheck,
  FiDownload
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const educationDetails = [
  {
    degree: "Bachelor's Degree (In Progress)",
    institution: 'Virtual University of Pakistan',
    campus: 'Faisalabad Campus',
    period: 'In Progress',
    detail: 'Enrolled in higher education while actively managing multi-client social accounts, Meta ad campaigns, and Shopify stores.'
  },
  {
    degree: 'FSc (Pre-Engineering)',
    institution: 'Govt Graduate College',
    campus: 'Faisalabad, Pakistan',
    period: '2021 – 2023',
    detail: 'Analytical and quantitative foundation in problem-solving and systematic execution.'
  }
]

const cvExpertise = [
  {
    category: 'Social Media & Design',
    skills: [
      'Multi-Account Management',
      'Content Planning & Scheduling',
      'Captions, Tags & Copywriting',
      'Competitor & Trend Analysis',
      'Performance Reporting',
      'Graphics Design (Canva Pro)'
    ]
  },
  {
    category: 'Digital Marketing',
    skills: [
      'Meta Ads Setup & Management',
      'Audience Research',
      'Budget Setup & Monitoring'
    ]
  },
  {
    category: 'Shopify & Store Mgmt',
    skills: [
      'Complete Store Setup',
      'Product Uploads & SEO Descriptions',
      'Theme Customization (No-Code)',
      'Inventory Tracking & Fulfillment'
    ]
  },
  {
    category: 'LinkedIn Outreach',
    skills: [
      'Profile Optimization',
      'B2B Lead Generation',
      'Professional Messaging'
    ]
  }
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1300px] mx-auto"
    >
      {/* Ambient glow (Hardware Accelerated) */}
      <div
        className="absolute top-1/3 left-1/4 w-[450px] h-[300px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.12) 0%, transparent 70%)'
        }}
      />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2.5 mb-8 sm:mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs font-mono font-semibold tracking-widest text-blue-600 dark:text-cyan-400 uppercase"
        >
          PROFILE & QUALIFICATIONS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base text-slate-600 dark:text-slate-300/80 max-w-xl leading-relaxed"
        >
          Verbatim qualifications, education, and verified agency expertise from official CV.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: CV Profile & Education (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Profile Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/95 dark:bg-[#0D1526]/80 backdrop-blur-xl border border-slate-200 dark:border-blue-500/25 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.6)] flex flex-col gap-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400" />
              <span>Professional Profile</span>
            </h3>
            <p>
              Results-focused Digital Marketer and Social Media Manager experienced in handling multi-client social accounts, Meta Ads, and Shopify stores.
            </p>
            <p>
              Skilled in growing accounts across YouTube, TikTok, Instagram, Facebook, and LinkedIn through competitor analysis, targeted content planning, and clear performance reporting.
            </p>
            <div className="pt-3 border-t border-slate-200 dark:border-blue-500/20 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-blue-500/30 text-slate-800 dark:text-cyan-300">Meta Ads Manager & Suite</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-blue-500/30 text-slate-800 dark:text-cyan-300">Google Sheets (Content Trackers)</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-blue-500/30 text-slate-800 dark:text-cyan-300">Canva Pro</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-blue-500/30 text-slate-800 dark:text-cyan-300">Shopify Admin Panel</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-blue-500/30 text-slate-800 dark:text-cyan-300">YouTube Studio & TikTok Tools</span>
            </div>
          </div>

          {/* Education from CV */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/95 dark:bg-[#0D1526]/80 backdrop-blur-xl border border-slate-200 dark:border-blue-500/25 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.6)] flex flex-col gap-5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-cyan-400">
              <FiBookOpen className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>Official Education</span>
            </div>

            <div className="space-y-4">
              {educationDetails.map((edu, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-[#09101F] border border-slate-200 dark:border-blue-500/20 flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-blue-700 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-cyan-500/30">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-blue-700 dark:text-cyan-300">
                    {edu.institution} · {edu.campus}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300/80 leading-relaxed mt-1">
                    {edu.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact & CV Expertise Pillars (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Quick Contact Info */}
          <div className="p-6 rounded-2xl bg-white/95 dark:bg-[#0D1526]/80 backdrop-blur-xl border border-slate-200 dark:border-blue-500/25 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.6)] flex flex-col gap-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FiAward className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>Contact & Personal Info</span>
            </h3>

            <div className="flex flex-col gap-3 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2.5">
                <FiMapPin className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>Faisalabad, Pakistan</span>
              </div>
              <a
                href="mailto:abdurrahmanasim0303@gmail.com"
                className="flex items-center gap-2.5 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors truncate"
              >
                <FiMail className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                <span className="truncate">abdurrahmanasim0303@gmail.com</span>
              </a>
              <a
                href="https://wa.me/923126326009"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              >
                <FaWhatsapp className="w-4 h-4 shrink-0" />
                <span>+92-3126326009 (WhatsApp / Phone)</span>
              </a>
              <div className="pt-2 border-t border-slate-200 dark:border-blue-500/20 flex flex-col gap-1 text-[11px] text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white uppercase font-mono">Languages:</span>
                <span>Urdu: Native · Punjabi: Fluent · English: Intermediate</span>
              </div>
              <div className="pt-3 border-t border-slate-200 dark:border-blue-500/20">
                <a
                  href="/Abdul-Rehman-CV.pdf"
                  download="Abdul-Rehman-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(37,99,235,0.35)] cursor-pointer"
                >
                  <FiDownload className="w-3.5 h-3.5" />
                  <span>Download Updated CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Expertise Matrix from CV */}
          <div className="p-6 rounded-2xl bg-white/95 dark:bg-[#0D1526]/80 backdrop-blur-xl border border-slate-200 dark:border-blue-500/25 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.6)] flex flex-col gap-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-cyan-400">
              Core Expertise Breakdown (CV)
            </span>

            <div className="flex flex-col gap-3">
              {cvExpertise.map((exp, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#09101F] border border-slate-200 dark:border-blue-500/20 text-xs">
                  <div className="font-bold text-blue-800 dark:text-cyan-300 mb-2 text-xs uppercase tracking-wider">
                    {exp.category}
                  </div>
                  <ul className="space-y-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-[11px]">
                        <FiCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
