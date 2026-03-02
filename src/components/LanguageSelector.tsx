import { useTranslation } from '../i18n/LanguageContext'

export default function LanguageSelector() {
  const { language, setLanguage } = useTranslation()

  return (
    <button
      className="lang-toggle"
      onClick={() => setLanguage(language === 'he' ? 'en' : 'he')}
      aria-label={language === 'he' ? 'Switch to English' : 'עבור לעברית'}
    >
      {language === 'he' ? 'EN' : 'עב'}
    </button>
  )
}
