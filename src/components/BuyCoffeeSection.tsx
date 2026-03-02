import { FaMugHot } from 'react-icons/fa6'
import { useTranslation } from '../i18n/LanguageContext'

export default function BuyCoffeeSection() {
  const { t } = useTranslation()

  return (
    <section className="coffee">
      <p className="coffee-text">{t('coffee.text')}</p>
      <a
        href="https://buymeacoffee.com/shohamgilax"
        target="_blank"
        rel="noopener noreferrer"
        className="coffee-btn"
      >
        <FaMugHot size={20} />
        {t('coffee.button')}
      </a>
    </section>
  )
}
