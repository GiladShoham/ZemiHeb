import { FaLinkedin, FaXTwitter, FaInstagram, FaGithub, FaGlobe } from 'react-icons/fa6'
import { useTranslation } from '../i18n/LanguageContext'

const PHOTO_URL = 'https://res.cloudinary.com/dzc7cp7jh/image/upload/w_150,h_150,c_fill,g_face,q_auto,f_auto/v1772482350/Gilad-Shoham_Session-402_1141_qrgyij.jpg'

const SOCIALS = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/shohamgilad/', label: 'LinkedIn' },
  { icon: FaXTwitter, url: 'https://x.com/ShohamGilad', label: 'X (Twitter)' },
  { icon: FaInstagram, url: 'https://www.instagram.com/shohamgilad88', label: 'Instagram' },
  { icon: FaGithub, url: 'https://github.com/GiladShoham', label: 'GitHub' },
  { icon: FaGlobe, url: 'https://gilad.dev', label: 'Website' },
]

export default function AuthorSection() {
  const { t } = useTranslation()

  return (
    <section className="author">
      <img src={PHOTO_URL} alt={t('author.photoAlt')} className="author-photo" />
      <div className="author-info">
        <h3 className="author-name">{t('author.name')}</h3>
        <div className="author-socials">
          {SOCIALS.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-link"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
