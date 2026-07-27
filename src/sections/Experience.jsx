import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import { experience } from '../data/portfolio'
import styles from './Experience.module.css'

function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="What I have practised so far"
      description="Development work and hands-on computer maintenance since 2023."
    >
      <div className={styles.grid}>
        {experience.map((item, index) => (
          <Reveal key={item.role} delay={index * 0.08}>
            <GlassCard className={styles.card}>
              <span className={styles.period}>{item.period}</span>
              <h3 className={styles.role}>{item.role}</h3>
              <ul className={styles.items}>
                {item.items.map((line) => (
                  <li key={line}>{line}</li>
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
