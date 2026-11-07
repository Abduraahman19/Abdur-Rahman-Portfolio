// context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { flushSync } from 'react-dom'

const ThemeContext = createContext({
  darkMode: true,
  isDark: true,
  toggleTheme: () => {}
})

// Liquid / Ink organic wave constants (matching HR Panel design)
const WAVE_DURATION = 950
const POINTS_PER_FRAME = 96
const KEYFRAME_STEPS = 26
const MAJOR_TENDRILS = 4
const MINOR_TENDRILS = 5
const TWO_PI = Math.PI * 2

const randomRange = (min, max) => min + Math.random() * (max - min)
const smoothEase = (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2)

// Generates smooth organic liquid ripple polygon keyframes (HR panel exact effect)
function generateLiquidWaveKeyframes(x, y, maxRadius, screenW, screenH) {
  const baseAngle = Math.atan2(screenH / 2 - y, screenW / 2 - x)
  const tendrils = Array.from({ length: MAJOR_TENDRILS + MINOR_TENDRILS }, (_, index) => {
    const isMajor = index < MAJOR_TENDRILS
    return {
      angle: baseAngle + randomRange(-1.6, 1.6),
      drift: randomRange(-0.35, 0.35),
      sway: randomRange(0, TWO_PI),
      width: isMajor ? randomRange(0.06, 0.12) : randomRange(0.12, 0.22),
      reach: isMajor ? randomRange(0.45, 0.75) : randomRange(0.12, 0.3)
    }
  })
  const noise = [randomRange(0, TWO_PI), randomRange(0, TWO_PI), randomRange(0, TWO_PI)]

  const keyframes = []
  for (let step = 0; step <= KEYFRAME_STEPS; step++) {
    const progress = step / KEYFRAME_STEPS
    const currentRadius = maxRadius * 1.18 * smoothEase(progress)
    const splashIntensity = Math.max(0, Math.sin(Math.PI * Math.min(1, progress * 1.25))) ** 0.8
    const fadeOut = 1 - progress
    const points = []

    for (let pointIndex = 0; pointIndex < POINTS_PER_FRAME; pointIndex++) {
      const angle = (pointIndex / POINTS_PER_FRAME) * TWO_PI
      const surfaceRipple =
        0.07 * Math.sin(3 * angle + noise[0] + 4 * progress) +
        0.05 * Math.sin(5 * angle + noise[1] - 6 * progress) +
        0.03 * Math.sin(11 * angle + noise[2] + 9 * progress)

      let radius = currentRadius * (1 + surfaceRipple * fadeOut)

      for (const tendril of tendrils) {
        const tendrilCenter = tendril.angle + tendril.drift * progress + 0.06 * Math.sin(9 * progress + tendril.sway)
        let angularDistance = Math.abs(angle - tendrilCenter) % TWO_PI
        if (angularDistance > Math.PI) angularDistance = TWO_PI - angularDistance

        if (angularDistance < tendril.width * 2.5) {
          radius += maxRadius * tendril.reach * splashIntensity * Math.exp(-((angularDistance / tendril.width) ** 2))
        }
      }

      points.push(`${(x + Math.cos(angle) * radius).toFixed(1)}px ${(y + Math.sin(angle) * radius).toFixed(1)}px`)
    }

    keyframes.push({
      clipPath: `polygon(${points.join(',')})`
    })
  }

  return keyframes
}

const applyThemeClasses = (isDark) => {
  const root = document.documentElement
  if (isDark) {
    root.classList.add('dark')
    root.classList.remove('light')
  } else {
    root.classList.remove('dark')
    root.classList.add('light')
  }
}

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') || localStorage.getItem('darkMode')
      if (saved !== null) {
        return saved === 'dark' || saved === 'true'
      }
      return true // Signature cosmic dark mode by default
    }
    return true
  })

  // Sync to root on mount and state changes
  useEffect(() => {
    applyThemeClasses(darkMode)
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light')
      localStorage.setItem('darkMode', String(darkMode))
    } catch (e) {}
  }, [darkMode])

  const toggleTheme = useCallback((e) => {
    const root = document.documentElement
    const nextIsDark = !root.classList.contains('dark')
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

    // Instant fallback if View Transitions API is not supported or reduced motion is requested
    if (!document.startViewTransition || prefersReducedMotion) {
      setDarkMode(nextIsDark)
      applyThemeClasses(nextIsDark)
      return
    }

    // Determine wave origin from button or click coordinates (matching HR panel mO helper)
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const target = e?.currentTarget
    if (target?.getBoundingClientRect) {
      const rect = target.getBoundingClientRect()
      x = rect.left + rect.width / 2
      y = rect.top + rect.height / 2
    } else if (e && 'clientX' in e && 'clientY' in e) {
      x = e.clientX
      y = e.clientY
    }

    const screenW = window.innerWidth
    const screenH = window.innerHeight
    const maxRadius = Math.hypot(
      Math.max(x, screenW - x),
      Math.max(y, screenH - y)
    )

    // Pre-calculate the organic liquid polygon keyframes synchronously (~12ms)
    const keyframes = generateLiquidWaveKeyframes(x, y, maxRadius, screenW, screenH)

    root.classList.add('theme-switching')

    // Native browser view transition with flushSync to eliminate re-render lag
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setDarkMode(nextIsDark)
      })
      applyThemeClasses(nextIsDark)
    })

    transition.ready
      .then(() => {
        root.animate(keyframes, {
          duration: WAVE_DURATION,
          easing: 'linear',
          pseudoElement: '::view-transition-new(root)'
        })
      })
      .catch(() => {})

    transition.finished.finally(() => {
      root.classList.remove('theme-switching')
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ darkMode, isDark: darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeContext
