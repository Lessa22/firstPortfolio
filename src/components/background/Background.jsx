import Particles from "./Particles";
import styles from "./Background.module.css";

function Background() {
  return (
    <div className={styles.background}>
      <div className={styles.gradient}></div>

      <div className={`${styles.blob} ${styles.blobOne}`} />
      <div className={`${styles.blob} ${styles.blobTwo}`} />
      <div className={`${styles.blob} ${styles.blobThree}`} />

      {/* Nouvelle couche de lumière */}
      <div className={styles.liquid}></div>

      <Particles />

      <div className={styles.noise}></div>
    </div>
  );
}

export default Background;