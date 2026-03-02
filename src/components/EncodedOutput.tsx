import { useState } from 'react'
import { FaRegCopy, FaCheck } from 'react-icons/fa6'
import { encodeHebrewForZemismart } from '../utils/hebrewEncoder'

interface Props {
  gangCount: 2 | 3 | 4
  labels: string[]
}

export default function EncodedOutput({ gangCount, labels }: Props) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 1500)
  }

  return (
    <section className="output-section">
      <h2 className="section-title">Encoded Output</h2>
      <p className="section-desc">Copy the encoded text below and paste it in Home Assistant / Zigbee2MQTT.</p>
      <div className="input-grid">
        {Array.from({ length: gangCount }, (_, i) => {
          const encoded = labels[i] ? encodeHebrewForZemismart(labels[i]) : ''
          const isCopied = copiedIndex === i
          return (
            <div key={i} className="input-row">
              <label className="input-label">Button {i + 1} — Encoded</label>
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
                  aria-label={`Copy encoded text for button ${i + 1}`}
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
