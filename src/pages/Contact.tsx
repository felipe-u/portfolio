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

      <div className='contact-info'>
        <h2>Redes</h2>
        <div className='icons'>
          <div className='icon'>♠</div>
          <div className='icon'>♠</div>
        </div>
      </div>
    </div>
  )
}
