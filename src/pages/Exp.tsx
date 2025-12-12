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
            <p className='timeline-date'>{t(exp.dateKey)}</p>
            <div className='timeline-dot' />
            <div className='timeline-job'>
              <h3>{t(exp.occupationKey)}</h3>
              <h4>{t(exp.companyKey)}</h4>
              <h5>{t(exp.dateKey)}</h5>
              <hr className='job-hr' />
              <p>{t(exp.descKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
