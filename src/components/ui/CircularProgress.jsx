import { motion } from 'framer-motion'
import styles from './CircularProgress.module.css'

const SIZE = 148
const STROKE = 8
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function CircularProgress({ value, label, caption, delay = 0 }) {
  const offset = CIRCUMFERENCE - (value / 100) * CIRCUMFERENCE

  return (
    <div className={styles.wrapper}>
      <svg className={styles.svg} width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        <defs>
          <linearGradient id={`grad-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth={STROKE}
        />
        <motion.circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={`url(#grad-${label})`}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className={styles.center}>
        <span className={styles.value}>{value}%</span>
        <span className={styles.caption}>{caption}</span>
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default CircularProgress
