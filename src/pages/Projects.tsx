import { useTranslation } from 'react-i18next'
import { GoToWebsiteIcon } from '../components/Icons'
import { projects } from '../data'
import '../styles/Projects.css'

export function ProjectsPage() {
  const { t } = useTranslation()

  return (
    <div className='projects-container'>
      <h2>{t('ui.projects')}</h2>

      <div className='projects'>
        {projects.map((project) => (
          <div className='project' key={project.id}>
            <img src={project.imgLoc} alt='Random Image' />
            <div className='project-desc'>
              <h3>{project.name}</h3>
              <p>{t(project.descKey)}</p>
              <div className='project-tags'>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <hr />
              <div className='project-links'>
                <a href={project.repoUrl} target='_blank' rel='noreferrer'>
                  {t('ui.repo')}
                  <span>
                    <GoToWebsiteIcon />
                  </span>
                </a>
                <a href={project.demoUrl} target='_blank' rel='noreferrer'>
                  Demo
                  <span>
                    <GoToWebsiteIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
