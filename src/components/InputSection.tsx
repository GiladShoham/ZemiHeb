import { FaTimes } from 'react-icons/fa'
import { useTranslation } from '../i18n/LanguageContext'

interface Props {
  gangCount: 1 | 2 | 3 | 4
  labels: string[]
  onLabelsChange: (labels: string[]) => void
}

export default function InputSection({ gangCount, labels, onLabelsChange }: Props) {
  const { t } = useTranslation()

  const handleChange = (index: number, value: string) => {
    const newLabels = [...labels]
    newLabels[index] = value
    onLabelsChange(newLabels)
  }

  const handleClear = (index: number) => {
    const newLabels = [...labels]
    newLabels[index] = ''
    onLabelsChange(newLabels)
  }

  return (
    <section className="input-section">
      <h2 className="section-title">{t('input.title')}</h2>
      <div className="input-grid">
        {Array.from({ length: gangCount }, (_, i) => {
          const len = labels[i]?.length ?? 0
          const isAtLimit = len >= 10
          return (
            <div key={i} className="input-row">
              <label className="input-label">{t('input.button')} {i + 1}</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  dir="rtl"
                  value={labels[i] ?? ''}
                  maxLength={10}
                  onChange={(e) => handleChange(i, e.target.value)}
                  placeholder={t('input.placeholder')}
                  className="input-field"
                />
                {labels[i] && (
                  <button
                    className="clear-btn"
                    onClick={() => handleClear(i)}
                    aria-label={`${t('input.clearAriaLabel')} ${i + 1}`}
                  >
                    <FaTimes size={14} />
                  </button>
                )}
              </div>
              <span className={`char-count ${isAtLimit ? 'char-count--warning' : ''}`}>
                {len}/10
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
