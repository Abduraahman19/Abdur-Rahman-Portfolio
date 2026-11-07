// components/Loader.jsx
import { motion } from 'framer-motion'
import BrandLogo from './BrandLogo.jsx'

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0714]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-3">
        <BrandLogo className="w-14 h-14" id="loader-logo" />
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
          <span className="text-xs font-mono text-purple-300/80 uppercase tracking-widest">
            Abdul Rehman
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default Loader