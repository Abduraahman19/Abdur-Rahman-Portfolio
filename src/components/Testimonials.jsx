// components/Testimonials.jsx
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Lead',
    company: 'TechCorp Solutions',
    initials: 'SJ',
    rating: 5,
    text: 'Abdur Rahman Asim delivered exceptional work on our web platform. His attention to modern component architecture, clear communication, and speed made the entire delivery cycle frictionless.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'InnovateLab',
    initials: 'MC',
    rating: 5,
    text: 'Working with Abdur was a high-leverage decision. He built a reliable, fast web interface and connected backend endpoints with zero hassle. His engineering discipline is genuinely solid.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Ecommerce Director',
    company: 'Digital Dynamics',
    initials: 'ER',
    rating: 5,
    text: 'Abdur transformed our Shopify storefront experience, streamlined checkout steps, and helped configure accurate event tracking. Having both development and marketing acumen is extraordinarily rare.'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Engineering Manager',
    company: 'WebFlow Agency',
    initials: 'DT',
    rating: 5,
    text: 'Exceptional engineer who writes clean, maintainable code. Abdur picked up our requirements rapidly, implemented responsive layouts, and delivered production-grade React code ahead of schedule.'
  }
]

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1300px] mx-auto"
    >
      <div className="flex flex-col gap-8 sm:gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs font-mono font-semibold tracking-widest text-purple-400 uppercase"
          >
            ENDORSEMENTS & FEEDBACK
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Client Recommendations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-purple-200/70 max-w-xl leading-relaxed"
          >
            Feedback from founders, product leads, and managers on delivered software projects and store setups.
          </motion.p>
        </div>

        {/* 2x2 Grid in Figma Cosmic Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#140929]/80 backdrop-blur-xl border border-purple-500/25 hover:border-purple-400/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <FaQuoteLeft className="w-4 h-4 text-purple-400/40" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-purple-500/20">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-700 to-indigo-800 border border-purple-400/30 flex items-center justify-center font-mono text-xs font-bold text-white shadow-md">
                  {item.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">
                    {item.name}
                  </span>
                  <span className="text-xs text-purple-300/70">
                    {item.role} · <strong className="font-semibold text-purple-200">{item.company}</strong>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials