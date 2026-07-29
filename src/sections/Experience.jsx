import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import { useTranslation } from 'react-i18next'
import { experience } from '../data/portfolio'
import styles from './Experience.module.css'

function Experience() {
  const { t } = useTranslation()
  return (
    <Section
      id="experience"
      label={t('experience_label')}
      title={t('experience_title')}
      description={t('experience_description')}
    >
      <div className={styles.grid}>
        {experience.map((item, index) => (
          <Reveal key={item.roleKey} delay={index * 0.08}>
            <GlassCard className={styles.card}>
              <span className={styles.period}>{t(item.periodKey)}</span>
              <h3 className={styles.role}>{t(item.roleKey)}</h3>
              <ul className={styles.items}>
                {item.items.map((lineKey) => (
                  <li key={lineKey}>{t(lineKey)}</li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Experience
