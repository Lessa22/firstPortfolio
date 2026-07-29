import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('portfolio-language', lng);
  };

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.button} ${i18n.language === 'en' ? styles.active : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label={t('aria_switch_english')}
      >
        {t('language_switch_english_short')}
      </button>
      <button
        className={`${styles.button} ${i18n.language === 'fr' ? styles.active : ''}`}
        onClick={() => changeLanguage('fr')}
        aria-label={t('aria_switch_french')}
      >
        {t('language_switch_french_short')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
