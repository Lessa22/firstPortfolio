import { FiGithub, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import LiquidButton from '../components/ui/LiquidButton'
import { useTranslation } from 'react-i18next'
import { contactPositionKeys, profile } from '../data/portfolio'
import styles from './Contact.module.css'

function Contact() {
  const { t } = useTranslation()
  return (
    <Section
      id="contact"
      label={t('contact_label')}
      title={t('contact_title')}
      description={t('contact_description')}
    >
      <Reveal>
        <GlassCard tilt={false} className={styles.panel}>
          <div className={styles.left}>
            <h3 className={styles.heading}>{t('contact_heading')}</h3>
            <p className={styles.text}>
              {t('contact_text', { city: t('profile_internship_city') })}
            </p>
            <ul className={styles.positions}>
              {contactPositionKeys.map((positionKey) => (
                <li key={positionKey}>{t(positionKey)}</li>
              ))}
            </ul>

            <div className={styles.location}>
              <FiMapPin />
              <span>{t('profile_city')}</span>
            </div>

            <div className={styles.actions}>
              <LiquidButton href={`mailto:${profile.email}`} icon={<FiSend />} ariaLabel={t('aria_send_email')}>
                {t('contact_send')}
              </LiquidButton>
              <LiquidButton
                href={profile.github}
                target="_blank"
                variant="ghost"
                icon={<FiGithub />}
                ariaLabel={t('aria_github_profile')}
              >
                {t('contact_github')}
              </LiquidButton>
            </div>
          </div>

          <ul className={styles.details}>
            <li>
              <span className={styles.icon}>
                <FiMail />
              </span>
              <div>
                <span className={styles.label}>{t('contact_email')}</span>
                <a href={`mailto:${profile.email}`} aria-label={t('aria_send_email_to', { email: profile.email })}>{profile.email}</a>
              </div>
            </li>
            {profile.phones.map((phone) => (
              <li key={phone}>
                <span className={styles.icon}>
                  <FiPhone />
                </span>
                <div>
                <span className={styles.label}>{t('contact_phone')}</span>
                <a href={`tel:${phone}`} aria-label={t('aria_call', { phone })}>{phone}</a>
                </div>
              </li>
            ))}
            <li>
              <span className={styles.icon}>
                <FiGithub />
              </span>
              <div>
                <span className={styles.label}>{t('hero_github')}</span>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label={t('aria_github_profile')}>
                  {t('contact_github_url')}
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
