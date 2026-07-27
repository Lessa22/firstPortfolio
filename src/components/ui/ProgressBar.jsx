import { motion } from 'framer-motion'
import styles from './ProgressBar.module.css'

function ProgressBar({ label, level, value, delay = 0 }) {
  return (
    <div className={styles.row}>
      <div className={styles.meta}>
        <span className={styles.name}>{label}</span>
        <span className={styles.level}>{level}</span>
      </div>
      <div className={styles.track}>
        <motion.span
          className={styles.fill}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
