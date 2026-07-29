import { FiGithub, FiExternalLink, FiCheckCircle, FiClock } from 'react-icons/fi'
import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import LiquidButton from '../components/ui/LiquidButton'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

function Projects() {
  const { t } = useTranslation()
  return (
    <Section
      id="projects"
      label={t('projects_label')}
      title={t('projects_title')}
      description={t('projects_description')}
    >
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Reveal key={project.titleKey} delay={index * 0.08}>
            <GlassCard className={styles.card}>
              <div className={styles.thumb}>
                {project.image ? (
                  <img
                    className={styles.image}
                    src={project.image}
                    alt={t('projects_screenshot_alt', { title: t(project.titleKey) })}
                    loading="lazy"
                  />
                ) : (
                  <>
                    <span className={styles.thumbLabel}>{t(project.titleKey)}</span>
                    <span className={styles.thumbHint}>{t('projects_placeholder')}</span>
                  </>
                )}
              </div>

              <div className={styles.body}>
                <div className={styles.titleRow}>
                  <h3 className={styles.title}>{t(project.titleKey)}</h3>
                  <span
                    className={`${styles.status} ${
                      project.status === 'done' ? styles.done : styles.progress
                    }`}
                  >
                    {project.status === 'done' ? <FiCheckCircle /> : <FiClock />}
                    {project.status === 'done' ? t('projects_status_done') : t('projects_status_progress')}
                  </span>
                </div>

                <p className={styles.tagline}>{t(project.taglineKey)}</p>
                <p className={styles.description}>{t(project.descriptionKey)}</p>

                <ul className={styles.features}>
                  {project.features.map((featureKey) => (
                    <li key={featureKey}>{t(featureKey)}</li>
                  ))}
                </ul>

                <ul className={styles.tech}>
                  {project.tech.map((item) => (
                    <li key={item}>{item === 'project_personal_tech' ? t(item) : item}</li>
                  ))}
                </ul>

                <div className={styles.actions}>
                  <LiquidButton
                    href={project.github}
                    target="_blank"
                    variant="ghost"
                    icon={<FiGithub />}
                    className={styles.action}
                    ariaLabel={t('projects_code_aria', { title: t(project.titleKey) })}
                  >
                    {t('projects_view_code')}
                  </LiquidButton>
                  {project.demo ? (
                    <LiquidButton
                      href={project.demo}
                      target="_blank"
                      icon={<FiExternalLink />}
                      className={styles.action}
                      ariaLabel={t('projects_demo_aria', { title: t(project.titleKey) })}
                    >
                      {t('projects_view_demo')}
                    </LiquidButton>
                  ) : (
                    <span className={styles.demoPlaceholder} aria-label={t('projects_demo_soon_aria')}>
                      <FiExternalLink /> {t('projects_demo_soon')}
                    </span>
                  )}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Projects
