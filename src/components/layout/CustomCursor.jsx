import { useEffect, useState } from 'react'
import styles from './CustomCursor.module.css'

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })

      const target = event.target
      const interactive = target.closest('a, button, [data-cursor="hover"]')
      setActive(Boolean(interactive))
    }

    const down = () => setPressed(true)
    const up = () => setPressed(false)

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
    }
  }, [])

  const scale = pressed ? 0.7 : active ? 1.9 : 1

  return (
    <>
      <div
        className={styles.dot}
        style={{ transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)` }}
      />
      <div
        className={`${styles.ring} ${active ? styles.ringActive : ''}`}
        style={{
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${scale})`,
        }}
      />
    </>
  )
}

export default CustomCursor
