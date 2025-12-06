import { AboutPage } from '../pages/About'
import { ContactPage } from '../pages/Contact'
import { ExpPage } from '../pages/Exp'
import { ProjectsPage } from '../pages/Projects'
import { SkillsPage } from '../pages/Skills'
import '../styles/Main.css'

export function Main() {
  return (
    <main>
      <section id='about-me-section'>
        <AboutPage />
      </section>

      <section id='exp-section'>
        <ExpPage />
      </section>

      <section id='projects-section'>
        <ProjectsPage />
      </section>

      <section id='skills-section'>
        <SkillsPage />
      </section>

      <section id='contact-section'>
        <ContactPage />
      </section>
    </main>
  )
}
