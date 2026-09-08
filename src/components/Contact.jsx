// components/Contact.jsx
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheck,
  FiCopy
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [state, handleSubmit] = useForm('xeoknpbg')
  const [copied, setCopied] = useState(false)

  const emailAddress = 'abdurrahmanasim0303@gmail.com'
  const phoneNumber = '+92 312 6326009'

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1300px] mx-auto"
    >
      {/* Ambient glow in background */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header matching Figma Screenshot */}
      <div className="flex flex-col items-start gap-3 mb-8 sm:mb-12 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base text-purple-200/80 leading-relaxed"
        >
          I&apos;m currently looking to join a cross-functional team that values high-converting stores, ROI-driven marketing, and brand growth. Or have a project in mind? Let&apos;s connect.
        </motion.p>

        {/* Clickable direct email matching Figma */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 pt-1"
        >
          <a
            href={`mailto:${emailAddress}`}
            className="text-base sm:text-lg font-mono font-bold text-white hover:text-purple-300 underline decoration-purple-500/50 underline-offset-4 transition-colors truncate"
          >
            {emailAddress}
          </a>
          <button
            onClick={copyEmail}
            className="p-2 rounded-lg bg-[#1D0E38] text-purple-300 hover:text-white border border-purple-500/30 transition-all text-xs flex items-center gap-1"
            title="Copy email"
          >
            {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </motion.div>
      </div>

      {/* 2-Column Layout: Direct Connects & Message Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: WhatsApp & Details */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-[#140929]/85 backdrop-blur-xl border border-purple-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <FaWhatsapp className="w-5 h-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Direct WhatsApp</span>
                <span className="text-xs text-purple-300/70">{phoneNumber}</span>
              </div>
            </div>

            <a
              href="https://wa.me/923126326009"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-figma-primary !w-full text-center"
            >
              <FaWhatsapp className="w-4 h-4 text-emerald-300" />
              <span>Open WhatsApp Chat</span>
            </a>
          </div>

          {/* Location & Social Icons */}
          <div className="p-6 rounded-2xl bg-[#140929]/85 backdrop-blur-xl border border-purple-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col gap-4">
            <div className="flex items-center gap-2.5 text-xs font-mono text-purple-300/80">
              <FiMapPin className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Faisalabad, Pakistan (UTC+5) · Open to Global Remote</span>
            </div>

            <div className="pt-3 border-t border-purple-500/20 flex items-center gap-3">
              <a
                href="https://github.com/Abduraahman19"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#1D0E38] text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-400/60 transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdur-rahman-asim/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#1D0E38] text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-400/60 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="p-3 rounded-xl bg-[#1D0E38] text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-400/60 transition-all"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#140929]/85 backdrop-blur-xl border border-purple-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-purple-200/70 mb-6 leading-relaxed">
              Have a digital marketing role, Shopify store setup, or campaign inquiry? Send a note directly to Abdur Rahman.
            </p>

            {state.succeeded ? (
              <div className="p-8 rounded-xl bg-purple-900/20 border border-purple-500/30 text-center flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/30">
                  <FiCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Message Transmitted</h4>
                <p className="text-xs text-purple-200/80 max-w-sm">
                  Thank you! Abdur Rahman Asim will review your note and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-medium text-purple-300 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alexander Vance"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-[#1A0D33] border border-purple-500/25 text-white placeholder-purple-300/40 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-rose-400" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-medium text-purple-300 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-[#1A0D33] border border-purple-500/25 text-white placeholder-purple-300/40 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-rose-400" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-mono font-medium text-purple-300 uppercase tracking-wider">
                    Message / Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your role or project scope..."
                    className="w-full px-4 py-3 rounded-xl text-sm bg-[#1A0D33] border border-purple-500/25 text-white placeholder-purple-300/40 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-rose-400" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-figma-primary !py-3 mt-2"
                >
                  <FiSend className="w-4 h-4" />
                  <span>{state.submitting ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact