import '../styles/Exp.css'

const experience = [
  {
    id: 1,
    occupation: 'Arquitecto Desarrollador',
    company: 'Ceiba Software (Clienste Sura)',
    date: 'Nov 2022 - Nov 2023',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumquesit pariatur vitae consequuntur, cupiditate maxime minus reiciendis ipsa eius exercitationem ipsam. Accusamus corrupti enimdoloremque culpa quidem itaque incidunt minima?',
  },
  {
    id: 2,
    occupation: 'Practicante Arquitecto Desarrollador',
    company: 'Ceiba Software (Clienste Sura)',
    date: 'May 2022 - Oct 2022',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumquesit pariatur vitae consequuntur, cupiditate maxime minus reiciendis ipsa eius exercitationem ipsam. Accusamus corrupti enimdoloremque culpa quidem itaque incidunt minima?',
  },
]

export function ExpPage() {
  return (
    <div className='exp-container'>
      <h2>Experiencia</h2>
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
