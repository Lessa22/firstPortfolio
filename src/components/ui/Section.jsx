import Reveal from './Reveal'
import styles from './Section.module.css'

function Section({ id, label, title, description, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            {label && <span className={styles.label}>{label}</span>}
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export default Section
