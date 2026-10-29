const contactEmail = 'fxstemtech@gmail.com'
const whatsappNumber = '233548083273'
const whatsappDisplay = '+233 548 083 273'

function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-title section-wrap">
        <p className="eyebrow">LET&apos;S BUILD SOMETHING</p>
        <h1>Get in <span>touch.</span></h1>
        <p>
          Ask about robotics training, STEM programs, projects, or how to work
          with FxStemTech. We&apos;d love to hear from you.
        </p>
      </section>

      <section className="contact-layout section-wrap">
        <div className="contact-details">
          <h2>Talk to our team</h2>
          <p>Choose what works best for you, or send us a message using the form.</p>
          <a className="contact-method whatsapp-method" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            <span className="contact-method-icon" aria-hidden="true">W</span>
            <span><strong>WhatsApp</strong><small>{whatsappDisplay}</small></span>
            <span className="contact-method-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="contact-method" href={`mailto:${contactEmail}`}>
            <span className="contact-method-icon email-icon" aria-hidden="true">@</span>
            <span><strong>Email</strong><small>{contactEmail}</small></span>
            <span className="contact-method-arrow" aria-hidden="true">↗</span>
          </a>
          <div className="delivery-note">
            <strong>About the contact form</strong>
            <p>
              Messages are delivered by FormSubmit to our email. The first
              submission requires us to confirm the inbox with FormSubmit.
            </p>
          </div>
        </div>

        <form
          className="contact-form"
          action={`https://formsubmit.co/${contactEmail}`}
          method="POST"
        >
          <input type="hidden" name="_subject" value="New FxStemTech website enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" className="honeypot" tabIndex="-1" autoComplete="off" />

          <h2>Send us a message</h2>
          <p>We&apos;ll get back to you as soon as we can.</p>

          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Ama Mensah"
            required
          />

          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="contact-topic">What would you like to discuss?</label>
          <select id="contact-topic" name="topic" defaultValue="Robotics training">
            <option>Robotics training</option>
            <option>STEM education</option>
            <option>Projects and workshops</option>
            <option>Other enquiry</option>
          </select>

          <label htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Tell us a little about what you have in mind..."
            required
          />

          <button className="button button-primary form-submit" type="submit">
            Send message <span aria-hidden="true">→</span>
          </button>
          <p className="form-privacy">
            By submitting, you agree that FxStemTech may reply to your enquiry
            using the email address you provided.
          </p>
        </form>
      </section>
    </div>
  )
}

export default ContactPage
