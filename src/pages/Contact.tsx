import '../styles/Contact.css'

export function ContactPage() {
  return (
    <div className='contact-container'>
      <div className='contact-info'>
        <h2>Contacto</h2>
        <div className='contact-item'>
          <span>♠</span>
          <p>felipe_uv@outlook.com</p>
        </div>

        <div className='contact-item'>
          <span>♠</span>
          <p>+57 312 775 1316</p>
        </div>
      </div>
      <hr />
      <div className='contact-info'>
        <h2>Redes</h2>
        <div className='icons'>
          <div className='icon'>
            <a
              href='https://www.linkedin.com/in/felipe-urrea-valencia-77084020b'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </div>
          <div className='icon'>
            <a
              href='https://github.com/felipe-u'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
