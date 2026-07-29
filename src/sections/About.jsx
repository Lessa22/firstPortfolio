import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import { useTranslation } from 'react-i18next'
import { aboutFacts, aboutStoryKeys } from '../data/portfolio'
import styles from './About.module.css'

function About() {
  const { t } = useTranslation()
  return (
    <Section
      id="about"
      label={t('about_label')}
      title={t('about_title')}
      description={t('about_description')}
    >
      <div className={styles.layout}>
        <Reveal className={styles.storyColumn}>
          <GlassCard tilt={false}>
            <div className={styles.story}>
              {aboutStoryKeys.map((key) => (
                <p key={key}>{t(key)}</p>
              ))}
            </div>
          </GlassCard>
        </Reveal>

        <div className={styles.facts}>
          {aboutFacts.map((fact, index) => (
            <Reveal key={fact.labelKey} delay={index * 0.05}>
              <GlassCard className={styles.fact}>
                <span className={styles.factLabel}>{t(fact.labelKey)}</span>
                <span className={styles.factValue}>{fact.valueKey ? t(fact.valueKey) : t('person_name')}</span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default About
