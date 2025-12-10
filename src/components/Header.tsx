import { useState } from 'react'
import '../styles/Header.css'
import { GlobalIcon } from './Icons'

export function Header() {
  const [lang, setLang] = useState<'ES' | 'EN'>('ES')

  const toggleLang = () => {
    setLang((prev) => (prev === 'ES' ? 'EN' : 'ES'))
  }

  return (
    <header>
      <h1>Felipe U</h1>

      <div className='nav-container'>
        <nav>
          <a href='#about-me'>Sobre mí</a>
          <a href='#exp'>Experiencia</a>
          <a href='#projects'>Proyectos</a>
          <a href='#skills'>Habilidades</a>
          <a href='#contact'>Contacto</a>
        </nav>
        <button className='primary-btn lang-btn' onClick={toggleLang}>
          <span>
            <GlobalIcon />
          </span>
          {lang === 'ES' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  )
}
