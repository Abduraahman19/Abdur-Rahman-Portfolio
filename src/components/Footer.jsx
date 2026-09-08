// components/Footer.jsx
import { FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'

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
    <footer className="border-t border-purple-500/20 bg-[#090412] py-14 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-8">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Monogram Brand */}
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-purple-700 via-indigo-800 to-[#190C33] border border-purple-500/40 text-purple-200 shadow-[0_0_15px_rgba(147,51,234,0.35)]">
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                <path
                  d="M 5 24 L 12 17 L 17 21 L 27 9"
                  stroke="#34D399"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 21 9 L 27 9 L 27 15"
                  stroke="#34D399"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="17" r="2" fill="#A855F7" />
                <circle cx="17" cy="21" r="2" fill="#C084FC" />
                <circle cx="27" cy="9" r="2.5" fill="#34D399" />
                <text x="6" y="13" fill="#FFFFFF" fontSize="8" fontWeight="800" fontFamily="sans-serif">A</text>
                <text x="13" y="13" fill="#C4B5FD" fontSize="8" fontWeight="800" fontFamily="sans-serif">R</text>
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">
                Abdur Rahman Asim
              </span>
              <span className="text-[11px] text-purple-300/60 font-mono">
                Digital Marketer & <br/> Social Media Manager <br/> Shopify Specialist
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-semibold tracking-wider text-purple-300/70 hover:text-white transition-colors"
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
                className="p-2.5 rounded-full bg-[#180C2E] border border-purple-500/25 text-purple-300 hover:text-white hover:bg-purple-600/30 transition-all"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-purple-500/15 text-xs text-purple-300/50 font-mono">
          <p>© {currentYear} Abdur Rahman Asim. Faisalabad, Pakistan.</p>
          <p className="text-[11px]">
            Shopify Store Operations & Meta Ads Strategy
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer