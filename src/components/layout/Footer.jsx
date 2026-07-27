import { FiGithub, FiMail, FiArrowUp } from 'react-icons/fi'
import { profile } from '../../data/portfolio'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.panel}>
          <div>
            <p className={styles.name}>{profile.name}</p>
            <p className={styles.tag}>{profile.roles.join(' \u00b7 ')}</p>
          </div>

          <div className={styles.social}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
            <a href="#hero" aria-label="Back to top">
              <FiArrowUp />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            &copy; {year} {profile.name}. All rights reserved.
          </span>
          <span>Made with React</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
