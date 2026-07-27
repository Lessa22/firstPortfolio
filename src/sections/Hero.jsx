import { motion, useScroll, useTransform } from 'framer-motion'
import { FiDownload, FiGithub, FiMail, FiChevronDown } from 'react-icons/fi'
import LiquidButton from '../components/ui/LiquidButton'
import TypingText from '../components/ui/TypingText'
import Counter from '../components/ui/Counter'
import { profile, stats } from '../data/portfolio'
import profilePhoto from '../assets/profile.png'
import styles from './Hero.module.css'

function Hero() {
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
              <span className={styles.dot} /> Available for a 3-month internship
            </span>

            <h1 className={styles.title}>
              <span className="gradient-text">{profile.name}</span>
            </h1>

            <p className={styles.subtitle}>
              <TypingText words={profile.roles} />
            </p>

            <p className={styles.intro}>{profile.intro}</p>

            <div className={styles.actions}>
              <LiquidButton href="/cv.pdf" download icon={<FiDownload />}>
                Download CV
              </LiquidButton>
              <LiquidButton href="#contact" variant="ghost" icon={<FiMail />}>
                Contact Me
              </LiquidButton>
              <LiquidButton
                href={profile.github}
                target="_blank"
                variant="ghost"
                icon={<FiGithub />}
              >
                GitHub
              </LiquidButton>
            </div>

            <ul className={styles.stats}>
              {stats.map((stat) => (
                <li key={stat.label}>
                  <span className={styles.statValue}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
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
              <img src={profilePhoto} alt={profile.name} loading="lazy" />
              <div className={styles.photoOverlay}>
                <span>Faratsiho, Madagascar</span>
                <span>{profile.degree}</span>
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
      >
        <span>Scroll</span>
        <FiChevronDown />
      </motion.a>
    </section>
  )
}

export default Hero
