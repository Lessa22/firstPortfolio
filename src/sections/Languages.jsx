import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import CircularProgress from '../components/ui/CircularProgress'
import { useTranslation } from 'react-i18next'
import { spokenLanguages } from '../data/portfolio'
import styles from './Languages.module.css'

function Languages() {
  const { t } = useTranslation()
  return (
    <Section
      id="languages"
      label={t('languages_label')}
      title={t('languages_title')}
      description={t('languages_description')}
    >
      <div className={styles.grid}>
        {spokenLanguages.map((language, index) => (
          <Reveal key={language.nameKey} delay={index * 0.1}>
            <GlassCard className={styles.card}>
              <CircularProgress
                value={language.value}
                label={t(language.nameKey)}
                caption={t(language.levelKey)}
                delay={index * 0.1}
              />
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Languages
