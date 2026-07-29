import { Suspense, lazy, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Background from './components/background/Background'
import MouseGlow from './components/background/MouseGlow'
import CustomCursor from './components/layout/CustomCursor'
import Dock from './components/layout/Dock'
import Footer from './components/layout/Footer'
import Loader from './components/layout/Loader'
import Navbar from './components/layout/Navbar'
import ScrollProgress from './components/layout/ScrollProgress'
import Hero from './sections/Hero'
import About from './sections/About'
import useActiveSection from './hooks/useActiveSection'
import { navItems } from './data/navigation'
import { useTranslation } from 'react-i18next'
import styles from './App.module.css'

const Profile = lazy(() => import('./sections/Profile'))
const Skills = lazy(() => import('./sections/Skills'))
const Projects = lazy(() => import('./sections/Projects'))
const Experience = lazy(() => import('./sections/Experience'))
const Education = lazy(() => import('./sections/Education'))
const Languages = lazy(() => import('./sections/Languages'))
const Qualities = lazy(() => import('./sections/Qualities'))
const Interests = lazy(() => import('./sections/Interests'))
const Contact = lazy(() => import('./sections/Contact'))

const sectionIds = navItems.map((item) => item.id)

function App() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(true)
  const activeSection = useActiveSection(sectionIds)

  return (
    <>
      <AnimatePresence>{loading && <Loader onFinish={() => setLoading(false)} />}</AnimatePresence>

      <Background />
      <MouseGlow />
      <CustomCursor />
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      <Dock activeSection={activeSection} />

      <motion.main
        className={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        <About />
        <Suspense fallback={<div className={styles.fallback}>{t('app_loading')}</div>}>
          <Profile />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Languages />
          <Qualities />
          <Interests />
          <Contact />
        </Suspense>
        <Footer />
      </motion.main>
    </>
  )
}

export default App
