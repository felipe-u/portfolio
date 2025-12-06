import '../styles/Header.css'

export function Header() {
  return (
    <header>
      <h1>Felipe U</h1>

      <div className='nav-container'>
        <nav>
          <a href='#'>Sobre mí</a>
          <a href='#'>Experiencia</a>
          <a href='#'>Proyectos</a>
          <a href='#'>Habilidades</a>
          <a href='#'>Contacto</a>
        </nav>

        <div>
          <button>ES / EN</button>
        </div>
      </div>
    </header>
  )
}
