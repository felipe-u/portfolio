export function AboutPage() {
  return (
    <div className='about-container'>
      <div className='about-inner-container'>
        <h2>Hola, soy Felipe Urrea</h2>
        <h3>Desarrollador Frontend</h3>
        <p>
          Ingeniero de Sistemas enfocado en el desarrollo Frontend con React. Me
          apasiona todo este mundo, saber cómo cada parte de una aplicación
          encaja en un flujo más grande y saber el cómo impactan las soluciones
          tecnológicas a los usuarios.
        </p><br />
        <p>
          Tengo experiencia en entornos ágiles, contribuyendo en plataformas
          empresariales y siguiendo buenas prácticas de desarrollo. Ahora estoy
          enfocado en fortalecer mis habilidades con React, testing y
          arquitectura Frontend.
        </p><br />
        <p>
          Busco un rol donde pueda aportar desde el primero día y seguir
          creciendo como desarrollador.
        </p>
      </div>
      <div className='photo-container'>
        <img src='src/assets/profile-pic.png' alt='Profile picture' />
      </div>
    </div>
  )
}
