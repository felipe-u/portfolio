import { useTranslation } from 'react-i18next'
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from '../components/Icons'
import '../styles/Contact.css'

export function ContactPage() {
  const { t } = useTranslation()

  return (
    <div className='contact-container'>
      <div className='contact-info'>
        <h2>{t('ui.contact')}</h2>
        <div className='contact-item'>
          <span>
            <MailIcon />
          </span>
          <p>felipe_uv@outlook.com</p>
        </div>

        <div className='contact-item'>
          <span>
            <PhoneIcon />
          </span>
          <p>+57 312 775 1316</p>
        </div>
      </div>

      <hr />

      <div className='contact-info networking'>
        <h2>Links</h2>
        <div className='icons'>
          <div className='icon'>
            <a
              href='https://www.linkedin.com/in/felipe-urrea-valencia-77084020b'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className='icon'>
            <a
              href='https://github.com/felipe-u'
              target='_blank'
              rel='noreferrer'
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
