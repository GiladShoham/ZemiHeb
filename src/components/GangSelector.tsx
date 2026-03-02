import { useTranslation } from '../i18n/LanguageContext'

type GangCount = 1 | 2 | 3 | 4

interface Props {
  gangCount: GangCount
  onGangCountChange: (count: GangCount) => void
}

const OPTIONS: GangCount[] = [1, 2, 3, 4]

export default function GangSelector({ gangCount, onGangCountChange }: Props) {
  const { t, language } = useTranslation()

  return (
    <div className="gang-selector" role="radiogroup" aria-label={t('gangSelector.ariaLabel')}>
      {OPTIONS.map((count) => (
        <button
          key={count}
          role="radio"
          aria-checked={gangCount === count}
          className={`gang-btn ${gangCount === count ? 'gang-btn--active' : ''}`}
          onClick={() => onGangCountChange(count)}
        >
          {language === 'he' ? `${count} ${t('gangSelector.gang')}` : `${count}-${t('gangSelector.gang')}`}
        </button>
      ))}
    </div>
  )
}
