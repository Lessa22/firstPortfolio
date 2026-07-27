import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import CircularProgress from '../components/ui/CircularProgress'
import { spokenLanguages } from '../data/portfolio'
import styles from './Languages.module.css'

function Languages() {
  return (
    <Section
      id="languages"
      label="Languages"
      title="How I communicate"
      description="Malagasy at home, French at university, English for documentation and code."
    >
      <div className={styles.grid}>
        {spokenLanguages.map((language, index) => (
          <Reveal key={language.name} delay={index * 0.1}>
            <GlassCard className={styles.card}>
              <CircularProgress
                value={language.value}
                label={language.name}
                caption={language.level}
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
