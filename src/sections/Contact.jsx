import { FiGithub, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import LiquidButton from '../components/ui/LiquidButton'
import { contactPositions, profile } from '../data/portfolio'
import styles from './Contact.module.css'

function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let us build something together"
      description="I am currently looking for a 3-month internship in Antananarivo."
    >
      <Reveal>
        <GlassCard tilt={false} className={styles.panel}>
          <div className={styles.left}>
            <h3 className={styles.heading}>Open to internship offers</h3>
            <p className={styles.text}>
              I am looking for a 3-month internship in {profile.internshipCity}. Preferred positions:
            </p>
            <ul className={styles.positions}>
              {contactPositions.map((position) => (
                <li key={position}>{position}</li>
              ))}
            </ul>

            <div className={styles.location}>
              <FiMapPin />
              <span>{profile.city}</span>
            </div>

            <div className={styles.actions}>
              <LiquidButton href={`mailto:${profile.email}`} icon={<FiSend />}>
                Send an email
              </LiquidButton>
              <LiquidButton
                href={profile.github}
                target="_blank"
                variant="ghost"
                icon={<FiGithub />}
              >
                GitHub profile
              </LiquidButton>
            </div>
          </div>

          <ul className={styles.details}>
            <li>
              <span className={styles.icon}>
                <FiMail />
              </span>
              <div>
                <span className={styles.label}>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </li>
            {profile.phones.map((phone) => (
              <li key={phone}>
                <span className={styles.icon}>
                  <FiPhone />
                </span>
                <div>
                  <span className={styles.label}>Phone</span>
                  <a href={`tel:${phone}`}>{phone}</a>
                </div>
              </li>
            ))}
            <li>
              <span className={styles.icon}>
                <FiGithub />
              </span>
              <div>
                <span className={styles.label}>GitHub</span>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  github.com/Lessa22
                </a>
              </div>
            </li>
          </ul>
        </GlassCard>
      </Reveal>
    </Section>
  )
}

export default Contact
