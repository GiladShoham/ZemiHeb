import { useTranslation } from '../i18n/LanguageContext'

export default function IntroSection() {
  const { t } = useTranslation()

  return (
    <section className="intro">
      <h1 className="intro-title">ZemiHeb</h1>
      <p className="intro-subtitle">{t('intro.subtitle')}</p>
      <p className="intro-desc">{t('intro.desc')}</p>
      <p className="intro-credit">
        {t('intro.credit.prefix')}{' '}
        <a
          href="https://www.linkedin.com/in/shohamgilad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gilad Shoham
        </a>
        {' '}{t('intro.credit.suffix')}
      </p>
    </section>
  )
}
