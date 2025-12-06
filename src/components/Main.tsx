import { AboutPage } from '../pages/About'
import { ContactPage } from '../pages/Contact'
import { ExpPage } from '../pages/Exp'
import { ProjectsPage } from '../pages/Projects'
import { SkillsPage } from '../pages/Skills'
import '../styles/Main.css'

export function Main() {
  return (
    <main>
      <section id='about-me'>
        <AboutPage />
      </section>

      <section id='exp'>
        <ExpPage />
      </section>

      <section id='projects'>
        <ProjectsPage />
      </section>

      <section id='skills'>
        <SkillsPage />
      </section>

      <section id='contact'>
        <ContactPage />
      </section>
    </main>
  )
}
