import Particles from './Particles'
import styles from './Background.module.css'

function Background() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.gradient} />
      <div className={`${styles.blob} ${styles.blobOne}`} />
      <div className={`${styles.blob} ${styles.blobTwo}`} />
      <div className={`${styles.blob} ${styles.blobThree}`} />
      <Particles />
      <div className={styles.noise} />
    </div>
  )
}

export default Background
