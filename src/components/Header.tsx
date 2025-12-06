import '../styles/Header.css'

export function Header() {
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

        <div>
          <button>ES / EN</button>
        </div>
      </div>
    </header>
  )
}
