import { useRef, useState } from 'react'
import styles from './LiquidButton.module.css'

function LiquidButton({
  children,
  href,
  onClick,
  variant = 'primary',
  icon,
  download,
  target,
  className = '',
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })

  const handleMove = (event) => {
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    })
  }

  const content = (
    <>
      <span className={styles.liquid} aria-hidden="true" />
      <span className={styles.inner}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </span>
    </>
  )

  const classes = `${styles.button} ${styles[variant]} ${className}`
  const style = { '--x': `${pos.x}%`, '--y': `${pos.y}%` }

  if (href) {
    return (
      <a
        ref={ref}
        className={classes}
        style={style}
        href={href}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        onMouseMove={handleMove}
      >
        {content}
      </a>
    )
  }

  return (
    <button ref={ref} type="button" className={classes} style={style} onClick={onClick} onMouseMove={handleMove}>
      {content}
    </button>
  )
}

export default LiquidButton
