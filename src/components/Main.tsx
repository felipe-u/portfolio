import { AboutPage } from '../pages/About'
import { ContactPage } from '../pages/Contact'
import { ExpPage } from '../pages/Exp'
import { ProjectsPage } from '../pages/Projects'
import { SkillsPage } from '../pages/Skills'
import '../styles/Main.css'

export function Main() {
  return (
    <main>
      <section id='about' className='center-layout'>
        <AboutPage />
      </section>
      <div className='diamond-hr' />

      <section id='exp'>
        <ExpPage />
      </section>
      <div className='diamond-hr' />

      <section id='projects'>
        <ProjectsPage />
      </section>
      <div className='diamond-hr' />

      <section id='skills'>
        <SkillsPage />
      </section>
      <div className='diamond-hr' />

      <section id='contact' className='contact-sec'>
        <ContactPage />
      </section>
    </main>
  )
}
