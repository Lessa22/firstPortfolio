import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import { aboutFacts, aboutStory } from '../data/portfolio'
import styles from './About.module.css'

function About() {
  return (
    <Section
      id="about"
      label="About Me"
      title="A student building software on purpose"
      description="Where I come from, what I study, and where I am heading next."
    >
      <div className={styles.layout}>
        <Reveal className={styles.storyColumn}>
          <GlassCard tilt={false}>
            <div className={styles.story}>
              {aboutStory.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </GlassCard>
        </Reveal>

        <div className={styles.facts}>
          {aboutFacts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 0.05}>
              <GlassCard className={styles.fact}>
                <span className={styles.factLabel}>{fact.label}</span>
                <span className={styles.factValue}>{fact.value}</span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default About
