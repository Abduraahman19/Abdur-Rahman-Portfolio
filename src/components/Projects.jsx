// components/Projects.jsx
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FiExternalLink, FiMessageSquare } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const featuredServices = [
  {
    title: 'Complete Turnkey Shopify Store Setup & Management',
    badge: 'Featured Case Study',
    description: 'End-to-end e-commerce store development from scratch. Configured custom no-code theme layouts, keyword-optimized SEO product descriptions, curated collections, app integrations, and friction-free checkout workflows.',
    tags: ['Shopify Admin Panel', 'No-Code Layouts', 'SEO Descriptions', 'App Integrations', 'Fulfillment'],
    image: '/shopify-service.jpg',
    actionText: 'Request Store Setup',
    actionUrl: 'https://wa.me/923126326009?text=Hi%20Abdur%20Rahman,%20I%20am%20interested%20in%20a%20Shopify%20store%20setup.',
    isReversed: false,
  },
  {
    title: 'Targeted Meta Ads (Facebook & Instagram) Acquisition Suite',
    badge: 'Featured Campaign',
    description: 'Strategic paid advertising setup configured to capture high-intent customers. Includes comprehensive demographic research, custom audience interest clusters, pixel tracking, and ongoing budget and ROAS monitoring.',
    tags: ['Meta Ads Manager & Suite', 'Audience Research', 'Budget Setup', 'Demographic Insights', 'ROAS Tracking'],
    image: '/meta-ads-service.jpg',
    actionText: 'Discuss Ad Campaigns',
    actionUrl: 'https://wa.me/923126326009?text=Hi%20Abdur%20Rahman,%20I%20want%20to%20run%20Meta%20Ads%20campaigns.',
    isReversed: true,
  },
  {
    title: 'B2B LinkedIn Outreach & Corporate Lead Acquisition',
    badge: 'Featured Outreach',
    description: 'Specialized corporate client acquisition model executed at Next Level Software Company. Professional LinkedIn profile optimization, executive brand authority building, and systematic B2B lead generation.',
    tags: ['LinkedIn Outreach', 'B2B Lead Generation', 'Profile Optimization', 'Market Research', 'Professional Messaging'],
    image: '/linkedin-service.jpg',
    actionText: 'Start B2B Outreach',
    actionUrl: 'https://wa.me/923126326009?text=Hi%20Abdur%20Rahman,%20I%20need%20LinkedIn%20B2B%20outreach.',
    isReversed: false,
  },
  {
    title: 'Canva Pro Visual Branding & Social Media Creatives',
    badge: 'Featured Design',
    description: 'High-converting ad creatives and promotional banners designed in Canva Pro. Accompanied by systematic content planning, scheduling, and consistent aesthetic branding across social media channels.',
    tags: ['Canva Pro', 'Graphics Design', 'Content Planning & Scheduling', 'Profile Management', 'Audience Engagement'],
    image: '/canva-service.jpg',
    actionText: 'Get Custom Creatives',
    actionUrl: 'https://wa.me/923126326009?text=Hi%20Abdur%20Rahman,%20I%20need%20Canva%20Pro%20design%20and%20social%20media%20management.',
    isReversed: true,
  }
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1350px] mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2.5 mb-10 sm:mb-14">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs font-mono font-semibold tracking-widest text-purple-400 uppercase"
        >
          CORE EXPERTISE IN ACTION
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Featured Services & Case Studies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base text-purple-200/70 max-w-xl leading-relaxed"
        >
          Demonstrated practical experience in Shopify storefront setups, Meta Ads management, and B2B corporate outreach.
        </motion.p>
      </div>

      {/* Alternating Showcase List matching Figma */}
      <div className="flex flex-col gap-14 sm:gap-20">
        {featuredServices.map((service, index) => {
          const isReversed = service.isReversed

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col ${
                isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-8 lg:gap-12`}
            >
              {/* Floating Text Info */}
              <div
                className={`w-full lg:w-1/2 flex flex-col gap-4 z-20 ${
                  isReversed ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'
                }`}
              >
                <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
                  {service.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {service.title}
                </h3>

                {/* Floating Glassmorphic Card matching Figma */}
                <div className="p-6 sm:p-7 rounded-2xl bg-[#170C2E]/90 backdrop-blur-xl border border-purple-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)] text-slate-200 text-sm leading-relaxed max-w-xl">
                  {service.description}
                </div>

                {/* Tech & Tool Pills */}
                <div
                  className={`flex flex-wrap gap-2 pt-2 ${
                    isReversed ? 'lg:justify-end' : 'lg:justify-start'
                  }`}
                >
                  {service.tags.map((tag) => (
                    <span key={tag} className="badge-figma-tech">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div
                  className={`flex items-center gap-4 pt-3 ${
                    isReversed ? 'lg:justify-end' : 'lg:justify-start'
                  }`}
                >
                  <a
                    href={service.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-purple-600/80 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all flex items-center gap-2 text-xs font-semibold px-5"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                    <span>{service.actionText}</span>
                  </a>
                  <a
                    href="#contact"
                    className="p-2.5 rounded-full bg-[#1A0D36] hover:bg-purple-900/40 text-purple-300 hover:text-white border border-purple-500/30 transition-all flex items-center gap-1.5 text-xs font-semibold px-4"
                  >
                    <FiMessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>

              {/* High-Fidelity Browser Mockup Window */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-purple-600/25 rounded-3xl blur-[50px] -z-10 group-hover:bg-purple-500/35 transition-all duration-500" />

                <div className="relative rounded-2xl overflow-hidden bg-[#120726] border border-purple-500/35 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:border-purple-400/60 transition-all duration-300">
                  <div className="flex items-center justify-between px-4 py-3 bg-[#1B0D36] border-b border-purple-500/20">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-4 py-1 rounded-md bg-[#0D0714] border border-purple-500/20 text-[10px] font-mono text-purple-300/60 max-w-[220px] truncate">
                      abdur-rahman-marketing.case-study
                    </div>
                    <div className="w-10" />
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0D0714]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
