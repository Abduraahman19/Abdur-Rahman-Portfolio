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
  FiCheck
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const educationDetails = [
  {
    degree: "Bachelor's Degree (In Progress)",
    institution: 'Virtual University of Pakistan',
    campus: 'Faisalabad Campus',
    period: 'Current Undergraduate',
    detail: 'Pursuing academic studies while actively delivering e-commerce store management, digital marketing, and social media campaigns.'
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
    category: 'Shopify & Store Mgmt',
    skills: [
      'Complete Store Setup from Scratch',
      'Product Uploads & SEO Descriptions',
      'Theme Customization (No-Code Layouts)',
      'App Integrations & Configuration',
      'Inventory Tracking & Order Fulfillment'
    ]
  },
  {
    category: 'Digital Marketing',
    skills: [
      'Meta Ads Setup & Campaign Management',
      'Audience & Demographic Research',
      'Budget Setup & ROAS Monitoring',
      'Ad Performance Optimization'
    ]
  },
  {
    category: 'Social Media & Design',
    skills: [
      'Account & Profile Management',
      'Content Planning & Scheduling',
      'Graphics Design (Canva Pro)',
      'Audience Engagement & Community Interaction'
    ]
  },
  {
    category: 'LinkedIn Outreach',
    skills: [
      'Executive Profile Optimization',
      'B2B Corporate Lead Generation',
      'Professional Client Messaging',
      'Market Research & Prospecting'
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
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2.5 mb-8 sm:mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs font-mono font-semibold tracking-widest text-purple-400 uppercase"
        >
          PROFILE & QUALIFICATIONS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base text-purple-200/70 max-w-xl leading-relaxed"
        >
          Verbatim qualifications, education, and verified agency expertise from official CV.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: CV Profile & Education (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Profile Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#140929]/80 backdrop-blur-xl border border-purple-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col gap-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>Professional Profile</span>
            </h3>
            <p>
              Energetic Digital Marketing Professional with practical experience running social media accounts, managing e-commerce stores, and handling professional outreach.
            </p>
            <p>
              I specialize in building Shopify stores from scratch, setting up targeted Meta Ads campaigns, and driving engagement. Known for picking up new tools quickly and meeting deadlines in fast-paced setups.
            </p>
            <div className="pt-3 border-t border-purple-500/20 flex flex-wrap gap-2 text-xs font-mono text-purple-300">
              <span className="px-3 py-1 rounded-full bg-[#1F0E3D] border border-purple-500/30">Shopify Admin Panel</span>
              <span className="px-3 py-1 rounded-full bg-[#1F0E3D] border border-purple-500/30">Meta Ads Manager & Suite</span>
              <span className="px-3 py-1 rounded-full bg-[#1F0E3D] border border-purple-500/30">Canva Pro</span>
            </div>
          </div>

          {/* Education from CV */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#140929]/80 backdrop-blur-xl border border-purple-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col gap-5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
              <FiBookOpen className="w-4 h-4 text-purple-400" />
              <span>Official Education</span>
            </div>

            <div className="space-y-4">
              {educationDetails.map((edu, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#1B0D36]/60 border border-purple-500/20 flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-purple-400 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-500/30">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-purple-300">
                    {edu.institution} · {edu.campus}
                  </p>
                  <p className="text-xs text-slate-300/80 leading-relaxed mt-1">
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
          <div className="p-6 rounded-2xl bg-[#140929]/80 backdrop-blur-xl border border-purple-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col gap-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FiAward className="w-4 h-4 text-purple-400" />
              <span>Contact & Personal Info</span>
            </h3>

            <div className="flex flex-col gap-3 text-xs sm:text-sm font-mono text-slate-300">
              <div className="flex items-center gap-2.5">
                <FiMapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Faisalabad, Pakistan</span>
              </div>
              <a
                href="mailto:abdurrahmanasim0303@gmail.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors truncate"
              >
                <FiMail className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="truncate">abdurrahmanasim0303@gmail.com</span>
              </a>
              <a
                href="https://wa.me/923126326009"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <FaWhatsapp className="w-4 h-4 shrink-0" />
                <span>+92-3126326009 (WhatsApp / Phone)</span>
              </a>
              <div className="pt-2 border-t border-purple-500/20 flex flex-col gap-1 text-[11px] text-purple-300/80">
                <span className="font-semibold text-white uppercase font-mono">Languages:</span>
                <span>Urdu: Native · Punjabi: Fluent · English: Intermediate</span>
              </div>
            </div>
          </div>

          {/* Detailed Expertise Matrix from CV */}
          <div className="p-6 rounded-2xl bg-[#140929]/80 backdrop-blur-xl border border-purple-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col gap-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
              Core Expertise Breakdown (CV)
            </span>

            <div className="flex flex-col gap-3">
              {cvExpertise.map((exp, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#1B0D36]/60 border border-purple-500/20 text-xs">
                  <div className="font-bold text-purple-300 mb-2 text-xs uppercase tracking-wider">
                    {exp.category}
                  </div>
                  <ul className="space-y-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-slate-300 text-[11px]">
                        <FiCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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