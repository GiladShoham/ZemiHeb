import switchImg1 from '../assets/1 gang.png'
import switchImg2 from '../assets/2 gangs.png'
import switchImg3 from '../assets/3 gangs.png'
import switchImg4 from '../assets/4 gangs.png'

interface Props {
  gangCount: 1 | 2 | 3 | 4
  labels: string[]
}

const IMAGES: Record<number, string> = {
  1: switchImg1,
  2: switchImg2,
  3: switchImg3,
  4: switchImg4,
}

const POSITIONS: Record<number, number[]> = {
  1: [50],
  2: [25, 75],
  3: [16.7, 50, 83.3],
  4: [12.5, 37.5, 62.5, 87.5],
}

export default function SwitchPreview({ gangCount, labels }: Props) {
  const positions = POSITIONS[gangCount]

  return (
    <div className="switch-preview-container">
      <div className="switch-preview">
        <img src={IMAGES[gangCount]} alt="Zemismart switch" className="switch-img" />
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
