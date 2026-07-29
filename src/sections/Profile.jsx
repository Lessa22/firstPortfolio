import { FiTarget, FiLayers, FiDatabase, FiMonitor } from 'react-icons/fi'
import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import { useTranslation } from 'react-i18next'
import { professionalProfileKeys } from '../data/portfolio'
import styles from './Profile.module.css'

function Profile() {
  const { t } = useTranslation()

  const focus = [
    { icon: <FiLayers />, title: t('profile_web'), text: t('profile_web_text') },
    { icon: <FiDatabase />, title: t('profile_databases'), text: t('profile_databases_text') },
    { icon: <FiMonitor />, title: t('profile_desktop'), text: t('profile_desktop_text') },
    { icon: <FiTarget />, title: t('profile_goal'), text: t('profile_goal_text') },
  ]

  return (
    <Section
      id="profile"
      label={t('profile_label')}
      title={t('profile_title')}
      description={t('profile_description')}
    >
      <div className={styles.layout}>
        <Reveal>
          <GlassCard tilt={false} className={styles.text}>
            {professionalProfileKeys.map((key) => (
              <p key={key}>{t(key)}</p>
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
