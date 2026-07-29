import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { navItems } from '../../data/navigation'
import styles from './Dock.module.css'

function Dock({ activeSection }) {
  const { t } = useTranslation()
  return (
    <motion.nav
      className={styles.dock}
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label={t('aria_section_dock')}
    >
      {navItems.map(({ id, label, icon: Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`${styles.item} ${activeSection === id ? styles.active : ''}`}
          aria-label={t(label)}
        >
          <Icon />
          <span className={styles.tooltip}>{t(label)}</span>
        </a>
      ))}
    </motion.nav>
  )
}

export default Dock
