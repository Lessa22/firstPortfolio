import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import { qualities, qualitiesNote } from '../data/portfolio'
import styles from './Qualities.module.css'

function Qualities() {
  return (
    <Section
      id="qualities"
      label="Personal Qualities"
      title="How I work"
      description="The habits I rely on when a problem gets difficult."
    >
      <div className={styles.grid}>
        {qualities.map((quality, index) => (
          <Reveal key={quality} delay={index * 0.06}>
            <GlassCard className={styles.card}>
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <h3 className={styles.title}>{quality}</h3>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <GlassCard tilt={false} className={styles.note}>
          <p>{qualitiesNote}</p>
        </GlassCard>
      </Reveal>
    </Section>
  )
}

export default Qualities
