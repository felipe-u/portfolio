import { GoToWebsiteIcon } from '../components/Icons'
import { projects } from '../data'
import '../styles/Projects.css'

export function ProjectsPage() {
  return (
    <div className='projects-container'>
      <h2>Proyectos</h2>

      <div className='projects'>
        {projects.map((project) => (
          <div className='project' key={project.id}>
            <img src={project.imgLoc} alt='Random Image' />
            <div className='project-desc'>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div className='project-tags'>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <hr />
              <div className='project-links'>
                <a href={project.repoUrl} target='_blank' rel='noreferrer'>
                  Repository
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
