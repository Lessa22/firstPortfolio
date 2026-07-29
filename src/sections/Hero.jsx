import { motion, useScroll, useTransform } from 'framer-motion'
import { FiDownload, FiGithub, FiMail, FiChevronDown } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import LiquidButton from '../components/ui/LiquidButton'
import TypingText from '../components/ui/TypingText'
import Counter from '../components/ui/Counter'
import { profile, stats } from '../data/portfolio'
import profilePhoto from '../assets/profile.png'
import styles from './Hero.module.css'

function Hero() {
  const { t } = useTranslation()
  const roles = [t('hero_role_student'), t('hero_role_developer')]
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 460], [1, 0])

  return (
    <section id="hero" className={styles.hero}>
      <motion.div className="container" style={{ y, opacity }}>
        <div className={styles.layout}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.badge}>
              <span className={styles.dot} /> {t('hero_available')}
            </span>

            <h1 className={styles.title}>
              <span className="gradient-text">{t('person_name')}</span>
            </h1>

            <p className={styles.subtitle}>
              <TypingText words={roles} />
            </p>

            <p className={styles.intro}>{t('hero_intro')}</p>

            <div className={styles.actions}>
              <LiquidButton href="/cv.pdf" download icon={<FiDownload />} ariaLabel={t('aria_download_cv')}>
                {t('hero_download')}
              </LiquidButton>
              <LiquidButton href="#contact" variant="ghost" icon={<FiMail />} ariaLabel={t('aria_contact_me')}>
                {t('hero_contact')}
              </LiquidButton>
              <LiquidButton
                href={profile.github}
                target="_blank"
                variant="ghost"
                icon={<FiGithub />}
                ariaLabel={t('aria_github_profile')}
              >
                {t('hero_github')}
              </LiquidButton>
            </div>

            <ul className={styles.stats}>
              {stats.map((stat) => (
                <li key={stat.labelKey}>
                  <span className={styles.statValue}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className={styles.statLabel}>{t(stat.labelKey)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={styles.photoWrap}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className={styles.photoCard}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src={profilePhoto} alt={t('person_name')} loading="lazy" />
              <div className={styles.photoOverlay}>
                <span>{t('hero_location')}</span>
                <span>{t('hero_degree')}</span>
              </div>
            </motion.div>
            <span className={styles.ringOne} />
            <span className={styles.ringTwo} />
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        className={styles.scroll}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label={t('hero_scroll_aria')}
      >
        <span>{t('hero_scroll')}</span>
        <FiChevronDown />
      </motion.a>
    </section>
  )
}

export default Hero
