import switchImg from '../assets/zemismart-clean.png'

interface Props {
  gangCount: 2 | 3 | 4
  labels: string[]
}

const POSITIONS: Record<number, number[]> = {
  2: [25, 75],
  3: [16.7, 50, 83.3],
  4: [12.5, 37.5, 62.5, 87.5],
}

export default function SwitchPreview({ gangCount, labels }: Props) {
  const positions = POSITIONS[gangCount]

  return (
    <div className="switch-preview-container">
      <div className="switch-preview">
        <img src={switchImg} alt="Zemismart switch" className="switch-img" />
        {positions.map((rightPct, i) => {
          const text = labels[i]?.slice(0, 10)
          return (
            <span
              key={i}
              className={`switch-label ${!text ? 'switch-label--empty' : ''}`}
              style={{
                right: `${rightPct}%`,
              }}
            >
              {text || `תווית ${i + 1}`}
            </span>
          )
        })}
      </div>
    </div>
  )
}
