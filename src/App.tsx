import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

function App() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`fade-in ${fadeIn ? 'show' : ''}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
