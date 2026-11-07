// components/BrandLogo.jsx
import React from 'react'

export const BrandLogo = ({ className = 'w-10 h-10', showStatus = false, id = 'brand-logo' }) => {
  const bgGradId = `${id}-bg`
  const borderGradId = `${id}-border`
  const letterAGradId = `${id}-letterA`
  const surgeGradId = `${id}-surge`
  const glowId = `${id}-glow`

  return (
    <div className={`relative shrink-0 flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 128 128"
        className="w-full h-full drop-shadow-[0_0_18px_rgba(168,85,247,0.45)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cosmic Dark Squircle Gradient */}
          <linearGradient id={bgGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1C0C3A" />
            <stop offset="50%" stopColor="#120726" />
            <stop offset="100%" stopColor="#080312" />
          </linearGradient>

          {/* Luxury Electric Violet to Emerald Gradient */}
          <linearGradient id={borderGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="35%" stopColor="#818CF8" />
            <stop offset="75%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>

          {/* Letter A Ascending Stroke */}
          <linearGradient id={letterAGradId} x1="0%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="60%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EDE9FE" />
          </linearGradient>

          {/* Letter R & Market Surge Arrow Gradient */}
          <linearGradient id={surgeGradId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="40%" stopColor="#A855F7" />
            <stop offset="75%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>

          {/* Emerald Glow Filter */}
          <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Squircle Badge Base */}
        <rect
          x="6"
          y="6"
          width="116"
          height="116"
          rx="30"
          fill={`url(#${bgGradId})`}
          stroke={`url(#${borderGradId})`}
          strokeWidth="3.2"
        />

        {/* Subtle Ambient Radial Highlights */}
        <circle cx="96" cy="34" r="22" fill="#10B981" opacity="0.16" />
        <circle cx="34" cy="94" r="24" fill="#A855F7" opacity="0.14" />

        {/* Monogram Graphic: Dynamic Interlocking A + R with Marketing Surge Arrow */}
        {/* Left ascending stroke of A */}
        <path
          d="M 28 92 L 48 36 C 49 33 52 33 53 36 L 68 76"
          stroke={`url(#${letterAGradId})`}
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Horizontal Crossbar of A */}
        <path
          d="M 37 68 L 62 68"
          stroke={`url(#${letterAGradId})`}
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* R Spine (Shared Apex with A) */}
        <path
          d="M 68 36 L 68 92"
          stroke="#EDE9FE"
          strokeWidth="8.5"
          strokeLinecap="round"
        />

        {/* R Upper Loop */}
        <path
          d="M 68 36 L 82 36 C 92 36 96 44 96 52 C 96 60 91 66 80 66 L 68 66"
          stroke={`url(#${surgeGradId})`}
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* R Dynamic Growth Surge Leg (Surges to Top Right 45°) */}
        <path
          d="M 76 66 L 98 40"
          stroke={`url(#${surgeGradId})`}
          strokeWidth="8.5"
          strokeLinecap="round"
        />

        {/* Growth Arrowhead */}
        <path
          d="M 86 38 L 102 36 L 100 52"
          stroke="#34D399"
          strokeWidth="7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Glowing Emerald Peak Spark */}
        <circle cx="102" cy="36" r="3.5" fill="#34D399" filter={`url(#${glowId})`} />
        <circle cx="102" cy="36" r="1.8" fill="#FFFFFF" />

        {/* Data Coordinate Dot on A */}
        <circle cx="28" cy="92" r="3.2" fill="#A855F7" />
      </svg>

      {/* Optional Pulsating Live Status Radar Indicator */}
      {showStatus && (
        <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#0D0714] shadow-[0_0_8px_#34D399]" />
        </span>
      )}
    </div>
  )
}

export default BrandLogo
