import { FaGithub } from 'react-icons/fa6'
import haLogo from '../assets/ha-logo.svg'

const ZEMISMART_LOGO = 'https://ueeshop.ly200-cdn.com/u_file/UPBE/UPBE110/2501/14/photo/logo.png?x-oss-process=image/format,webp/quality,q_100'
const Z2M_LOGO = 'https://www.zigbee2mqtt.io/logo.png'

export default function Header() {
  return (
    <header className="header">
      <div className="header-logos">
        <img src={ZEMISMART_LOGO} alt="Zemismart" className="header-logo" />
        <img src={haLogo} alt="Home Assistant" className="header-logo" />
        <img src={Z2M_LOGO} alt="Zigbee2MQTT" className="header-logo" />
      </div>
      <a
        href="https://github.com/GiladShoham/ZemiHeb"
        target="_blank"
        rel="noopener noreferrer"
        className="header-github"
        aria-label="View on GitHub"
      >
        <FaGithub size={28} />
      </a>
    </header>
  )
}
