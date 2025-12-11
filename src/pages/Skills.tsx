import { useTranslation } from 'react-i18next'
import { skills } from '../data'
import '../styles/Skills.css'
import { useState } from 'react'

export function SkillsPage() {
  const { t } = useTranslation()
  const [skillsTab, setSkillsTab] = useState<'tech' | 'soft'>('tech')

  return (
    <div className='skills-container'>
      <h2>{t('ui.skills')}</h2>

      <div className='skills-wrap'>
        <div className='skills-selector'>
          <h3
            className={skillsTab === 'tech' ? 'show' : 'hide'}
            onClick={() => setSkillsTab('tech')}
          >
            {t('ui.tech-skills')}
          </h3>
          <h3
            className={skillsTab === 'soft' ? 'show' : 'hide'}
            onClick={() => setSkillsTab('soft')}
          >
            {t('ui.soft-skills')}
          </h3>
        </div>

        <div className='skills-view'>
          {skillsTab === 'tech' ? (
            <div className='tech-skills'>
              {skills.tech.map((skill) => (
                <div className='skill-container' key={skill.name}>
                  <img src={skill.imgLoc} alt={skill.name} />
                  <div className='overlay'>
                    <p>{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='soft-skills'>
              <ul>
                {skills.soft.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
