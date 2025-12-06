import '../styles/Header.css'

export function Header() {
  return (
    <header>
      <h1>Felipe U</h1>

      <div className='nav-container'>
        <nav>
          <a href='#about-me-section'>Sobre mí</a>
          <a href='#exp-section'>Experiencia</a>
          <a href='#projects-section'>Proyectos</a>
          <a href='#skills-section'>Habilidades</a>
          <a href='#contact-section'>Contacto</a>
        </nav>

        <div>
          <button>ES / EN</button>
        </div>
      </div>
    </header>
  )
}
