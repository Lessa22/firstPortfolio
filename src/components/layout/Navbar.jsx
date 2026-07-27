import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navItems } from '../../data/navigation'
import styles from './Navbar.module.css'

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links = navItems.filter((item) => item.id !== 'hero')

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className={styles.nav}>
        <a className={styles.brand} href="#hero">
          <span className={styles.brandMark}>ASJ</span>
          <span className={styles.brandText}>Sandratra Josiah</span>
        </a>

        <ul className={styles.links}>
          {links.map((item) => (
            <li key={item.id}>
              <a
                className={`${styles.link} ${activeSection === item.id ? styles.linkActive : ''}`}
                href={`#${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span layoutId="nav-pill" className={styles.pill} transition={{ duration: 0.4 }} />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {links.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
