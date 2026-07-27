import { FiGithub, FiExternalLink, FiCheckCircle, FiClock } from 'react-icons/fi'
import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import LiquidButton from '../components/ui/LiquidButton'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Things I have built"
      description="Mobile, web and personal projects where I learned the most."
    >
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <GlassCard className={styles.card}>
              <div className={styles.thumb}>
                {project.image ? (
                  <img
                    className={styles.image}
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                  />
                ) : (
                  <>
                    <span className={styles.thumbLabel}>{project.title}</span>
                    <span className={styles.thumbHint}>Image placeholder</span>
                  </>
                )}
              </div>

              <div className={styles.body}>
                <div className={styles.titleRow}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <span
                    className={`${styles.status} ${
                      project.status === 'Completed' ? styles.done : styles.progress
                    }`}
                  >
                    {project.status === 'Completed' ? <FiCheckCircle /> : <FiClock />}
                    {project.status}
                  </span>
                </div>

                <p className={styles.tagline}>{project.tagline}</p>
                <p className={styles.description}>{project.description}</p>

                <ul className={styles.features}>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <ul className={styles.tech}>
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className={styles.actions}>
                  <LiquidButton
                    href={project.github}
                    target="_blank"
                    variant="ghost"
                    icon={<FiGithub />}
                    className={styles.action}
                  >
                    GitHub
                  </LiquidButton>
                  {project.demo ? (
                    <LiquidButton
                      href={project.demo}
                      target="_blank"
                      icon={<FiExternalLink />}
                      className={styles.action}
                    >
                      Live Demo
                    </LiquidButton>
                  ) : (
                    <span className={styles.demoPlaceholder}>
                      <FiExternalLink /> Live demo coming soon
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
