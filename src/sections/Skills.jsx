import { FiCode, FiDatabase, FiTerminal, FiTool, FiAlertCircle } from 'react-icons/fi'
import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import ProgressBar from '../components/ui/ProgressBar'
import { useTranslation } from 'react-i18next'
import {
  databases,
  languagesSkills,
  notFamiliar,
  operatingSystems,
  tools,
} from '../data/portfolio'
import styles from './Skills.module.css'

function Skills() {
  const { t } = useTranslation()
  return (
    <Section
      id="skills"
      label={t('skills_label')}
      title={t('skills_title')}
      description={t('skills_description')}
    >
      <div className={styles.layout}>
        <Reveal className={styles.wide}>
          <GlassCard tilt={false}>
            <header className={styles.header}>
              <span className={styles.icon}>
                <FiCode />
              </span>
              <h3>{t('skills_languages')}</h3>
            </header>
            <div className={styles.bars}>
              {languagesSkills.map((skill, index) => (
                <ProgressBar
                  key={skill.name}
                  label={skill.name}
                  level={t(skill.levelKey)}
                  value={skill.value}
                  delay={index * 0.04}
                />
              ))}
            </div>
          </GlassCard>
        </Reveal>

        <div className={styles.column}>
          <Reveal delay={0.05}>
            <GlassCard>
              <header className={styles.header}>
                <span className={styles.icon}>
                  <FiDatabase />
                </span>
                <h3>{t('skills_databases')}</h3>
              </header>
              <ul className={styles.chips}>
                {databases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard>
              <header className={styles.header}>
                <span className={styles.icon}>
                  <FiTerminal />
                </span>
                <h3>{t('skills_os')}</h3>
              </header>
              <ul className={styles.chips}>
                {operatingSystems.map((item) => (
                  <li key={item.name}>
                    {item.name}
                    {item.note && <span className={styles.note}>{t('skills_favorite')}</span>}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.15}>
            <GlassCard>
              <header className={styles.header}>
                <span className={styles.icon}>
                  <FiTool />
                </span>
                <h3>{t('skills_tools')}</h3>
              </header>
              <ul className={styles.chips}>
                {tools.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.2}>
            <GlassCard>
              <header className={styles.header}>
                <span className={styles.icon}>
                  <FiAlertCircle />
                </span>
                <h3>{t('skills_learning')}</h3>
              </header>
              <ul className={`${styles.chips} ${styles.chipsMuted}`}>
                {notFamiliar.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

export default Skills
