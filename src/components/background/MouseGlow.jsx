import { useEffect, useState } from 'react'
import styles from './MouseGlow.module.css'

function MouseGlow() {
  const [position, setPosition] = useState({ x: -300, y: -300 })

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return (
    <div
      className={styles.glow}
      aria-hidden="true"
      style={{ transform: `translate3d(${position.x - 260}px, ${position.y - 260}px, 0)` }}
    />
  )
}

export default MouseGlow
