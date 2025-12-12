import { useEffect, useRef, useState } from 'react'
import '../styles/Header.css'
import { GlobalIcon, MenuIcon } from './Icons'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

export function Header() {
  const { t } = useTranslation()
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const [openMenu, setOpenMenu] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)

  const toggleLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es'
    setLang(newLang)
    i18next.changeLanguage(newLang)
  }

  const closeMenu = () => setOpenMenu(false)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        openMenu &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openMenu])

  return (
    <header>
      <h1>Felipe U</h1>

      <div className='nav-container' ref={navRef}>
        <nav className={openMenu ? 'open' : ''}>
          <a href='#about-me' onClick={closeMenu}>
            {t('ui.about')}
          </a>
          <a href='#exp' onClick={closeMenu}>
            {t('ui.exp')}
          </a>
          <a href='#projects' onClick={closeMenu}>
            {t('ui.projects')}
          </a>
          <a href='#skills' onClick={closeMenu}>
            {t('ui.skills')}
          </a>
          <a href='#contact' onClick={closeMenu}>
            {t('ui.contact')}
          </a>
        </nav>

        <button className='primary-btn lang-btn' onClick={toggleLang}>
          <span>
            <GlobalIcon />
          </span>
          {(lang === 'es' ? 'en' : 'es').toUpperCase()}
        </button>

        <button
          className='menu-icon'
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}
