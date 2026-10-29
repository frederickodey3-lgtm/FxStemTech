import ProjectGrid from '../components/ProjectGrid.jsx'

function ProjectsPage() {
  return (
    <div className="page-shell">
      <section className="page-title section-wrap">
        <p className="eyebrow">THE FX LAB</p>
        <h1>Projects made for <span>curious minds.</span></h1>
        <p>
          Explore the kinds of robotics, coding, and maker projects that turn
          STEM concepts into something you can see, touch, and improve.
        </p>
      </section>
      <section className="projects-section section-wrap projects-page-grid">
        <ProjectGrid />
      </section>
    </div>
  )
}

export default ProjectsPage
