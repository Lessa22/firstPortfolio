import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './GlassCard.module.css'

function GlassCard({ children, className = '', tilt = true, lift = true }) {
  const ref = useRef(null)
  const [glow, setGlow] = useState({ x: 50, y: 50 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    setGlow({ x: px * 100, y: py * 100 })

    if (tilt) {
      setRotation({ x: (0.5 - py) * 8, y: (px - 0.5) * 10 })
    }
  }

  const reset = () => {
    setRotation({ x: 0, y: 0 })
    setGlow({ x: 50, y: 50 })
  }

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        y: lift && (rotation.x || rotation.y) ? -6 : 0,
      }}
      transition={{ type: 'spring', stiffness: 160, damping: 18 }}
      style={{
        '--glow-x': `${glow.x}%`,
        '--glow-y': `${glow.y}%`,
      }}
    >
      <span className={styles.sheen} aria-hidden="true" />
      {children}
    </motion.div>
  )
}

export default GlassCard
