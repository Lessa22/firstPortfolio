import styles from './Particles.module.css'

const COUNT = 42

const particles = Array.from({ length: COUNT }, (item, index) => ({
  id: index,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 1 + Math.random() * 2.6,
  duration: 14 + Math.random() * 22,
  delay: Math.random() * -30,
  opacity: 0.2 + Math.random() * 0.5,
}))

function Particles() {
  return (
    <div className={styles.field}>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={styles.particle}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Particles
