import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'

const programmes = [
  {
    title: 'Robotics & Arduino',
    description:
      'Introducing learners to robot design, electronics, programming, and automation through practical projects.',
  },
  {
    title: 'Coding & Programming',
    description:
      'Developing computational thinking, logical reasoning, and problem-solving skills.',
  },
  {
    title: 'STEM Education',
    description:
      'Making science, technology, engineering, and mathematics interactive through practical activities and experiments.',
  },
  {
    title: 'Physics & Science Experiments',
    description:
      'Bringing scientific principles to life through demonstrations, models, and real-world applications.',
  },
  {
    title: 'Engineering & Innovation',
    description:
      'Encouraging learners to design, build, test, and improve creative solutions.',
  },
  {
    title: 'STEM Workshops & School Programmes',
    description:
      'Delivering engaging learning experiences, demonstrations, and technology-based activities for schools and educational institutions.',
  },
]

const values = [
  {
    title: 'Innovation',
    description: 'Encouraging creativity, curiosity, and new ways of thinking.',
  },
  {
    title: 'Practical Learning',
    description: 'Learning by doing, experimenting, building, and discovering.',
  },
  {
    title: 'Excellence',
    description:
      'Maintaining high standards in education, service delivery, and project development.',
  },
  {
    title: 'Accessibility',
    description: 'Making technology and STEM education available to more learners.',
  },
  {
    title: 'Empowerment',
    description: 'Equipping individuals with skills and confidence to shape the future.',
  },
]

function AboutPage() {
  return (
    <div className="page-shell about-page">
      <section className="about-intro section-wrap">
        <div className="about-intro-copy">
          <p className="eyebrow">ABOUT FXSTEMTECH</p>
          <h1>Who <span>We Are</span></h1>
          <p className="about-lead">
            FxStemTech is a STEM education and technology company committed to
            inspiring innovation, developing practical skills, and preparing
            the next generation for a technology-driven world.
          </p>
          <p>
            We believe that learning goes beyond textbooks and theories. It is
            about exploring ideas, asking questions, experimenting, building
            solutions, and turning imagination into reality.
          </p>
          <p>
            At FxStemTech, we make Science, Technology, Engineering, and
            Mathematics (STEM) exciting, accessible, and practical through
            hands-on learning experiences. Our activities cover Robotics,
            Coding, Arduino projects, Physics demonstrations, engineering
            concepts, and technology-based learning.
          </p>
          <p>
            We work to create an environment where learners don&apos;t just
            consume technology but understand it, interact with it, and develop
            the confidence to create with it.
          </p>
          <Link className="button button-primary" to="/contact">
            Learn with us <ArrowIcon />
          </Link>
        </div>
        <figure className="about-intro-photo">
          <img
            src="/images/about-workshop-trainer.jpeg"
            alt="An instructor guides learners as they build and test a small robot"
          />
          <figcaption>
            <span className="status-dot" />
            Curiosity in action
          </figcaption>
        </figure>
      </section>

      <section className="about-purpose section-wrap" aria-label="Our purpose">
        <article className="purpose-card">
          <span className="about-card-index">01 / OUR MISSION</span>
          <h2>Make learning practical.</h2>
          <p>
            To make STEM education practical, engaging, and accessible while
            equipping learners with the knowledge, creativity, and technical
            skills needed to solve real-world problems.
          </p>
        </article>
        <article className="purpose-card purpose-card-highlight">
          <span className="about-card-index">02 / OUR VISION</span>
          <h2>Inspire a generation.</h2>
          <p>
            To become a leading STEM education and technology hub in Africa,
            inspiring a generation of innovative thinkers, skilled creators,
            engineers, and problem-solvers.
          </p>
        </article>
      </section>

      <section className="about-programmes section-wrap">
        <div className="about-section-heading">
          <p className="eyebrow">LEARN IT. BUILD IT. MAKE IT REAL.</p>
          <h2>What We <span>Do</span></h2>
          <p>
            From first ideas to working inventions, our programmes turn
            technology into something learners can explore and create.
          </p>
        </div>
        <div className="programme-grid">
          {programmes.map((programme, index) => (
            <article className="programme-card" key={programme.title}>
              <span className="programme-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{programme.title}</h3>
              <p>{programme.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-photo-strip section-wrap" aria-label="Learning in action">
        <figure>
          <img
            src="/images/about-arduino-team.jpeg"
            alt="Learners collaborate around an Arduino electronics project"
            loading="lazy"
          />
          <figcaption>Ideas take shape when we build together.</figcaption>
        </figure>
        <figure>
          <img
            src="/images/about-student-mentoring.jpeg"
            alt="A mentor helps a student connect an electronics project to a laptop"
            loading="lazy"
          />
          <figcaption>Every experiment is a chance to discover.</figcaption>
        </figure>
      </section>

      <section className="about-values section-wrap">
        <div className="about-section-heading">
          <p className="eyebrow">THE PRINCIPLES BEHIND EVERY BUILD</p>
          <h2>Our Core <span>Values</span></h2>
        </div>
        <div className="about-values-grid">
          {values.map((value, index) => (
            <article className="about-value-card" key={value.title}>
              <span className="programme-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-why section-wrap">
        <div>
          <p className="eyebrow">A FUTURE FULL OF POSSIBILITIES</p>
          <h2>Why <span>FxStemTech?</span></h2>
        </div>
        <div className="about-why-copy">
          <p>
            We believe every learner has the potential to become an innovator.
            Our approach combines education with practical technology, making
            complex concepts easier to understand and giving learners
            opportunities to experience what they learn.
          </p>
          <p>
            We are not just teaching today&apos;s technology; we are helping
            prepare tomorrow&apos;s creators, engineers, and innovators.
          </p>
          <Link className="text-link" to="/contact">
            Start a conversation <ArrowIcon diagonal />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
