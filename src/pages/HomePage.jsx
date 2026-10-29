import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'

function HomePage() {
  return (
    <>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            BUILD THE FUTURE, ONE IDEA AT A TIME
          </p>
          <h1>
            Big ideas.
            <br />
            <span>Built by</span> curious minds.
          </h1>
          <p className="hero-description">
            We make STEM and robotics hands-on, exciting, and open to everyone.
            Dream it, build it, bring it to life.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">
              Explore our projects <ArrowIcon />
            </Link>
            <Link className="text-link" to="/about">
              Get to know us <ArrowIcon diagonal />
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>Curiosity is the first component.</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-grid" />
          <div className="floating-label label-top">
            <span className="label-dot" /> STEM STARTS HERE
          </div>
          <img
            className="hero-photo"
            src="/images/fxstemtech-logo.jpg"
            alt="FxStemTech logo featuring a young learner, a robotics car, and STEM subjects"
          />
          <div className="floating-label label-bottom">
            <span className="sparkle">✳</span> MADE TO MAKE
          </div>
        </div>

        <div className="hero-bottomline">
          <span>STEM EDUCATION <i /> ROBOTICS <i /> CREATIVE LEARNING</span>
          <Link to="/projects">EXPLORE PROJECTS <span aria-hidden="true">↓</span></Link>
        </div>
      </section>

      <section className="projects-section section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW THINGS WE&apos;VE BEEN MAKING</p>
            <h2>Ideas in <span>motion.</span></h2>
          </div>
          <p className="section-intro">
            From a first blink of an LED to a robot on the move, every project
            is a chance to learn by doing.
          </p>
        </div>
        <ProjectGrid />
        <Link className="text-link all-projects-link" to="/projects">
          See all projects <ArrowIcon />
        </Link>
      </section>

      <section className="learning-banner section-wrap">
        <div>
          <p className="eyebrow">LEARN BY MAKING</p>
          <h2>Learn robotics with African instructors.</h2>
          <p>
            Build confidence with hands-on STEM lessons, patient guidance, and
            projects that connect technology to everyday life.
          </p>
        </div>
        <Link className="button button-light" to="/about">
          About FxStemTech <ArrowIcon />
        </Link>
      </section>
    </>
  )
}

export default HomePage
