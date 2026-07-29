import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import { useTranslation } from 'react-i18next'
import { education } from '../data/portfolio'
import styles from './Education.module.css'

function Education() {
  const { t } = useTranslation()
  return (
    <Section
      id="education"
      label={t('education_label')}
      title={t('education_title')}
      description={t('education_description')}
    >
      <div className={styles.timeline}>
        <motion.span
          className={styles.line}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {education.map((item, index) => (
          <Reveal key={item.school} delay={index * 0.12} className={styles.row}>
            <span className={styles.marker}>
              <FiBookOpen />
            </span>
            <GlassCard className={styles.card}>
              <span className={styles.period}>{item.period}</span>
              <h3 className={styles.school}>{item.school}</h3>
              <p className={styles.degree}>{t(item.degreeKey)}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Education
