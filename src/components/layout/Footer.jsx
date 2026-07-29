import { FiGithub, FiMail, FiArrowUp } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { profile } from '../../data/portfolio'
import styles from './Footer.module.css'

function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.panel}>
          <div>
            <p className={styles.name}>{t('person_name')}</p>
            <p className={styles.tag}>{[t('hero_role_student'), t('hero_role_developer')].join(' \u00b7 ')}</p>
          </div>

          <div className={styles.social}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label={t('aria_github_profile')}>
              <FiGithub />
            </a>
            <a href={`mailto:${profile.email}`} aria-label={t('aria_send_email')}>
              <FiMail />
            </a>
            <a href="#hero" aria-label={t('aria_back_to_top')}>
              <FiArrowUp />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            &copy; {year} {t('person_name')}. {t('footer_rights')}
          </span>
          <span>{t('footer_made_with')}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
