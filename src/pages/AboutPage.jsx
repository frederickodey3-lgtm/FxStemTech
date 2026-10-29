import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'

function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero section-wrap about-hero">
        <div>
          <p className="eyebrow">ABOUT FXSTEMTECH</p>
          <h1>Building tomorrow&apos;s <span>innovators.</span></h1>
          <p>
            We help young people discover how exciting science, technology,
            engineering, and math can be when you get to build something real.
          </p>
          <Link className="button button-primary" to="/contact">
            Learn with us <ArrowIcon />
          </Link>
        </div>
        <img
          src="/images/fxstemtech-logo.jpg"
          alt="FxStemTech brand artwork: a young learner with a laptop and robotics car"
        />
      </section>

      <section className="values-section section-wrap">
        <p className="eyebrow">WHAT WE BELIEVE</p>
        <div className="value-grid">
          <article>
            <span className="value-number">01</span>
            <h2>Curiosity comes first.</h2>
            <p>Great learning begins with a question and the confidence to explore it.</p>
          </article>
          <article>
            <span className="value-number">02</span>
            <h2>Everyone can build.</h2>
            <p>Welcoming, hands-on teaching helps learners of different levels take part.</p>
          </article>
          <article>
            <span className="value-number">03</span>
            <h2>Practice makes progress.</h2>
            <p>Try, test, learn from mistakes, and improve your idea one step at a time.</p>
          </article>
        </div>
      </section>

      <section className="instructor-section section-wrap">
        <div>
          <p className="eyebrow">LOCAL KNOWLEDGE. BIG POSSIBILITIES.</p>
          <h2>Learn robotics with African instructors.</h2>
          <p>
            FxStemTech is building a learning experience led by African
            instructors—bringing practical robotics, coding, and STEM skills
            closer to our communities.
          </p>
          <Link className="text-link" to="/contact">
            Ask about training <ArrowIcon diagonal />
          </Link>
        </div>
        <div className="instructor-image-wrap">
          <img
            src="/images/fxstemtech-logo.jpg"
            alt="Young learner exploring technology with FxStemTech"
            loading="lazy"
          />
          <span>Building tomorrow&apos;s innovators</span>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
