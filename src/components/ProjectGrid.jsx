import { Link } from 'react-router-dom'
import projects from '../data/projects.js'
import ArrowIcon from './ArrowIcon.jsx'

function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.number}>
          <div
            className={`project-art${project.imageFit === 'contain' ? ' project-art-contained' : ''}`}
          >
            {project.showNumber !== false && (
              <span className="project-number">{project.number} / FX LAB</span>
            )}
            {project.video ? (
              <video
                className="project-image project-video"
                controls
                playsInline
                preload="metadata"
                poster={project.image}
                aria-label={`Project video: ${project.title}`}
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support embedded videos.
              </video>
            ) : (
              <img
                src={project.image}
                alt={project.imageAlt}
                className={`project-image${project.imageFit === 'contain' ? ' project-image-contained' : ''}`}
                loading="lazy"
              />
            )}
          </div>
          <div className="project-info">
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-footer">
              <span>{project.tag}</span>
              <Link
                to="/contact"
                aria-label={`Ask about ${project.title}`}
                className="project-link"
              >
                <ArrowIcon diagonal />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ProjectGrid
