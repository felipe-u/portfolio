import { useTranslation } from 'react-i18next'
import { DownloadIcon } from '../components/Icons'

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className='about-container'>
      <div className='about-inner-container'>
        <h2>{t('about.greetings')} Felipe Urrea</h2>
        <h3>{t('about.dev')}</h3>
        <p>{t('about.p1')}</p>
        <br />
        <p>{t('about.p2')}</p>
        <br />
        <p>{t('about.p3')}</p>
        <button className='primary-btn cv-btn'>
          <a href='/CV.pdf' download='CV-FELIPE-U.pdf'>
            {t('ui.download')}
            <span>
              <DownloadIcon />
            </span>
          </a>
        </button>
      </div>
      <div className='photo-container'>
        <img src='/profile-pic.png' alt='Profile picture' />
      </div>
    </div>
  )
}
