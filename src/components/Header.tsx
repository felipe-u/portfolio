import { useState } from 'react'
import '../styles/Header.css'
import { GlobalIcon } from './Icons'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

export function Header() {
  const { t } = useTranslation()
  const [lang, setLang] = useState<'es' | 'en'>('es')

  const toggleLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es'
    setLang(newLang)
    i18next.changeLanguage(newLang)
  }

  return (
    <header>
      <h1>Felipe U</h1>

      <div className='nav-container'>
        <nav>
          <a href='#about-me'>{t('ui.about')}</a>
          <a href='#exp'>{t('ui.exp')}</a>
          <a href='#projects'>{t('ui.projects')}</a>
          <a href='#skills'>{t('ui.skills')}</a>
          <a href='#contact'>{t('ui.contact')}</a>
        </nav>
        <button className='primary-btn lang-btn' onClick={toggleLang}>
          <span>
            <GlobalIcon />
          </span>
          {(lang === 'es' ? 'en' : 'es').toUpperCase()}
        </button>
      </div>
    </header>
  )
}
