import { useState } from 'react'
import { FaRegCopy, FaCheck } from 'react-icons/fa6'
import { encodeHebrewForZemismart } from '../utils/hebrewEncoder'
import { useTranslation } from '../i18n/LanguageContext'

interface Props {
  gangCount: 1 | 2 | 3 | 4
  labels: string[]
}

export default function EncodedOutput({ gangCount, labels }: Props) {
  const { t } = useTranslation()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 1500)
  }

  return (
    <section className="output-section">
      <h2 className="section-title">{t('output.title')}</h2>
      <p className="section-desc">{t('output.desc')}</p>
      <div className="input-grid">
        {Array.from({ length: gangCount }, (_, i) => {
          const encoded = labels[i] ? encodeHebrewForZemismart(labels[i]) : ''
          const isCopied = copiedIndex === i
          return (
            <div key={i} className="input-row">
              <label className="input-label">{t('output.buttonEncoded')} {i + 1} {t('output.encodedSuffix')}</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  readOnly
                  value={encoded}
                  dir="ltr"
                  className="input-field input-field--readonly"
                  placeholder="—"
                />
                <button
                  className={`copy-btn ${isCopied ? 'copy-btn--copied' : ''}`}
                  onClick={() => handleCopy(encoded, i)}
                  aria-label={`${t('output.copyAriaLabel')} ${i + 1}`}
                  disabled={!encoded}
                >
                  {isCopied ? <FaCheck size={14} /> : <FaRegCopy size={14} />}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
