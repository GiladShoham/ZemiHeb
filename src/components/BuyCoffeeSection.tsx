import { FaMugHot } from 'react-icons/fa6'

export default function BuyCoffeeSection() {
  return (
    <section className="coffee">
      <p className="coffee-text">
        This project is free and open source. If you find it useful and want to give back,
        consider buying me a coffee!
      </p>
      <a
        href="https://buymeacoffee.com/shohamgilax"
        target="_blank"
        rel="noopener noreferrer"
        className="coffee-btn"
      >
        <FaMugHot size={20} />
        Buy me a coffee
      </a>
    </section>
  )
}
