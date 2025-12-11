import { useTranslation } from 'react-i18next'
import { experience } from '../data'
import '../styles/Exp.css'

export function ExpPage() {
  const { t } = useTranslation()

  return (
    <div className='exp-container'>
      <h2>{t('ui.exp')}</h2>
      <div className='timeline'>
        {experience.map((exp) => (
          <div key={exp.id} className='timeline-item'>
            <p className='timeline-date'>{exp.date}</p>
            <div className='timeline-dot' />
            <div className='timeline-job'>
              <h3>{exp.occupation}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
