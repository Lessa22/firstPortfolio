import { FiCpu, FiTruck } from 'react-icons/fi'
import { IoGameControllerOutline, IoBasketballOutline } from 'react-icons/io5'
import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import { drivingLicense, interests } from '../data/portfolio'
import styles from './Interests.module.css'

const icons = {
  'Software Development': <FiCpu />,
  'Video Games': <IoGameControllerOutline />,
  Basketball: <IoBasketballOutline />,
  Automobiles: <FiTruck />,
}

function Interests() {
  return (
    <Section
      id="interests"
      label="Interests"
      title="Outside the editor"
      description="What keeps me curious when I am not writing code."
    >
      <div className={styles.grid}>
        {interests.map((interest, index) => (
          <Reveal key={interest} delay={index * 0.07}>
            <GlassCard className={styles.card}>
              <span className={styles.icon}>{icons[interest]}</span>
              <h3 className={styles.title}>{interest}</h3>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <GlassCard tilt={false} className={styles.license}>
          <div>
            <span className={styles.licenseLabel}>Driving License</span>
            <p className={styles.licenseText}>All four categories</p>
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
