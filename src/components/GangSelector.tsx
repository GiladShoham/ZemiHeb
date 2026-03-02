type GangCount = 2 | 3 | 4

interface Props {
  gangCount: GangCount
  onGangCountChange: (count: GangCount) => void
}

const OPTIONS: GangCount[] = [2, 3, 4]

export default function GangSelector({ gangCount, onGangCountChange }: Props) {
  return (
    <div className="gang-selector" role="radiogroup" aria-label="Number of switch buttons">
      {OPTIONS.map((count) => (
        <button
          key={count}
          role="radio"
          aria-checked={gangCount === count}
          className={`gang-btn ${gangCount === count ? 'gang-btn--active' : ''}`}
          onClick={() => onGangCountChange(count)}
        >
          {count}-Gang
        </button>
      ))}
    </div>
  )
}
