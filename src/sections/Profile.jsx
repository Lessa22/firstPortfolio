import { FiTarget, FiLayers, FiDatabase, FiMonitor } from 'react-icons/fi'
import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import { professionalProfile } from '../data/portfolio'
import styles from './Profile.module.css'

const focus = [
  { icon: <FiLayers />, title: 'Web Development', text: 'React front ends and PHP back ends.' },
  { icon: <FiDatabase />, title: 'Databases', text: 'Relational modelling, SQL and NoSQL stores.' },
  { icon: <FiMonitor />, title: 'Desktop Apps', text: 'Java and C# applications for real users.' },
  { icon: <FiTarget />, title: 'Long-term Goal', text: 'Useful software, and one day video games.' },
]

function Profile() {
  return (
    <Section
      id="profile"
      label="Professional Profile"
      title="Why I build software"
      description="From a curiosity about video games to a serious engineering practice."
    >
      <div className={styles.layout}>
        <Reveal>
          <GlassCard tilt={false} className={styles.text}>
            {professionalProfile.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </GlassCard>
        </Reveal>

        <div className={styles.grid}>
          {focus.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <GlassCard className={styles.card}>
                <span className={styles.icon}>{item.icon}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Profile
