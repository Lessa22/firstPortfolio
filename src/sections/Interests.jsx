import { FiCpu, FiTruck } from 'react-icons/fi'
import { IoGameControllerOutline, IoBasketballOutline } from 'react-icons/io5'
import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import { useTranslation } from 'react-i18next'
import { drivingLicense, interests } from '../data/portfolio'
import styles from './Interests.module.css'

const icons = {
  interest_software: <FiCpu />,
  interest_games: <IoGameControllerOutline />,
  interest_basketball: <IoBasketballOutline />,
  interest_automobiles: <FiTruck />,
}

function Interests() {
  const { t } = useTranslation()
  return (
    <Section
      id="interests"
      label={t('interests_label')}
      title={t('interests_title')}
      description={t('interests_description')}
    >
      <div className={styles.grid}>
        {interests.map((interest, index) => (
          <Reveal key={interest} delay={index * 0.07}>
            <GlassCard className={styles.card}>
              <span className={styles.icon}>{icons[interest]}</span>
              <h3 className={styles.title}>{t(interest)}</h3>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <GlassCard tilt={false} className={styles.license}>
          <div>
            <span className={styles.licenseLabel}>{t('driving_license')}</span>
            <p className={styles.licenseText}>{t('all_categories')}</p>
          </div>
          <ul className={styles.categories}>
            {drivingLicense.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </GlassCard>
      </Reveal>
    </Section>
  )
}

export default Interests
