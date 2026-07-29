import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import styles from './Loader.module.css'

function Loader({ onFinish }) {
  const { t } = useTranslation()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((value) => {
        const next = value + Math.random() * 16 + 6
        return next >= 100 ? 100 : next
      })
    }, 140)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress < 100) return
    const timeout = setTimeout(onFinish, 520)
    return () => clearTimeout(timeout)
  }, [progress, onFinish])

  return (
    <motion.div className={styles.loader} exit={{ opacity: 0, filter: 'blur(14px)' }} transition={{ duration: 0.7 }}>
      <div className={styles.orb} />
      <div className={styles.panel}>
        <span className={styles.initials}>{t('person_initials')}</span>
        <span className={styles.name}>{t('person_name')}</span>
        <div className={styles.track}>
          <span className={styles.fill} style={{ width: `${progress}%` }} />
        </div>
        <span className={styles.percent}>{Math.round(progress)}%</span>
      </div>
    </motion.div>
  )
}

export default Loader
