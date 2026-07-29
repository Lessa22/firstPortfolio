import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import { useTranslation } from 'react-i18next'
import { qualities } from '../data/portfolio'
import styles from './Qualities.module.css'

function Qualities() {
  const { t } = useTranslation()
  return (
    <Section
      id="qualities"
      label={t('qualities_label')}
      title={t('qualities_title')}
      description={t('qualities_description')}
    >
      <div className={styles.grid}>
        {qualities.map((quality, index) => (
          <Reveal key={quality} delay={index * 0.06}>
            <GlassCard className={styles.card}>
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <h3 className={styles.title}>{t(quality)}</h3>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <GlassCard tilt={false} className={styles.note}>
          <p>{t('qualities_note')}</p>
        </GlassCard>
      </Reveal>
    </Section>
  )
}

export default Qualities
