// components/Footer.jsx
import { FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import BrandLogo from './BrandLogo.jsx'

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT ME', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'SERVICES', href: '#work' },
  { name: 'PROCESS', href: '#workflow' },
  { name: 'CONTACT', href: '#contact' },
]

const socialLinks = [
  { icon: <FaLinkedinIn className="w-4 h-4" />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdur-rahman-asim/' },
  { icon: <FaWhatsapp className="w-4 h-4" />, name: 'WhatsApp', url: 'https://wa.me/923126326009' },
  { icon: <FiMail className="w-4 h-4" />, name: 'Email', url: 'mailto:abdurrahmanasim0303@gmail.com' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-blue-500/20 bg-white dark:bg-[#070B12] py-14 px-4 sm:px-6 md:px-8 lg:px-12 transition-colors">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-8">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Monogram Brand */}
          <div className="flex items-center gap-3">
            <BrandLogo className="w-9 h-9" id="footer-logo" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Abdul Rehman
              </span>
              <span className="text-[11px] text-blue-600 dark:text-cyan-400/80 font-mono">
                Digital Marketer & Social Media Manager
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-semibold tracking-wider text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-100/80 dark:bg-[#0D1526] border border-slate-200 dark:border-blue-500/25 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-blue-600/30 transition-all shadow-sm"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-blue-500/15 text-xs text-slate-600 dark:text-slate-400 font-mono">
          <p>© {currentYear} Abdul Rehman. Faisalabad, Pakistan.</p>
          <p className="text-[11px]">
            Social Media Management · Meta Ads · Shopify Store Operations
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer