import { useEffect, useState } from 'react'
import styles from './TypingText.module.css'

function TypingText({ words, typingSpeed = 90, deletingSpeed = 45, pause = 1600 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (deleting && text === '') {
      const timeout = setTimeout(() => {
        setDeleting(false)
        setIndex((value) => (value + 1) % words.length)
      }, 220)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(
      () => {
        setText((value) =>
          deleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1),
        )
      },
      deleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause])

  return (
    <span className={styles.typing}>
      {text}
      <span className={styles.caret} />
    </span>
  )
}

export default TypingText
