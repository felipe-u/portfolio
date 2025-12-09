import { AboutPage } from '../pages/About'
import { ContactPage } from '../pages/Contact'
import { ExpPage } from '../pages/Exp'
import { ProjectsPage } from '../pages/Projects'
import { SkillsPage } from '../pages/Skills'
import '../styles/Main.css'

export function Main() {
  return (
    <main>
      <section id='about-me' className='center-layout'>
        <AboutPage />
      </section>
      <hr />

      <section id='exp'>
        <ExpPage />
      </section>
      <hr />

      <section id='projects'>
        <ProjectsPage />
      </section>
      <hr />

      <section id='skills'>
        <SkillsPage />
      </section>
      <hr />

      <section id='contact'>
        <ContactPage />
      </section>
    </main>
  )
}
