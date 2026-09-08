// components/Loader.jsx
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0714]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-700 via-indigo-800 to-[#190C33] border border-purple-500/40 text-purple-200 font-mono text-sm font-bold flex items-center justify-center shadow-[0_0_25px_rgba(147,51,234,0.5)]">
          <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
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
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
          <span className="text-xs font-mono text-purple-300/80 uppercase tracking-widest">
            Abdur Rahman Asim
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default Loader