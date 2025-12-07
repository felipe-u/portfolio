import '../styles/Projects.css'

export function ProjectsPage() {
  return (
    <div className='projects-container'>
      <h2>Proyectos</h2>

      <div className='projects'>
        <div className='project'>
          <img
            src='https://i.pinimg.com/1200x/76/75/42/767542303972a837a7fa4d2cf26bf5f5.jpg'
            alt='Random Image'
          />
          <div className='project-desc'>
            <h3>Project Name</h3>
            <p>
              Project description Lorem ipsum dolor sit amet consectetur
              adipisicing elit
            </p>
            <div className='project-tags'>
              <span>HTML</span>
              <span>React</span>
              <span>TypeScript</span>
            </div>
            <p>
              <a href='#'>Go to website</a>
            </p>
          </div>
        </div>

        <div className='project'>
          <img
            src='https://i.pinimg.com/1200x/76/75/42/767542303972a837a7fa4d2cf26bf5f5.jpg'
            alt='Random Image'
          />
          <div className='project-desc'>
            <h3>Project Name</h3>
            <p>
              Project description Lorem ipsum dolor sit amet consectetur
              adipisicing elit
            </p>
            <div className='project-tags'>
              <span>HTML</span>
              <span>React</span>
              <span>TypeScript</span>
            </div>
            <p>
              <a href='#'>Go to website</a>
            </p>
          </div>
        </div>

        <div className='project'>
          <img
            src='https://i.pinimg.com/1200x/76/75/42/767542303972a837a7fa4d2cf26bf5f5.jpg'
            alt='Random Image'
          />
          <div className='project-desc'>
            <h3>Project Name</h3>
            <p>
              Project description Lorem ipsum dolor sit amet consectetur
              adipisicing elit
            </p>
            <div className='project-tags'>
              <span>HTML</span>
              <span>React</span>
              <span>TypeScript</span>
            </div>
            <p>
              <a href='#'>Go to website</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
