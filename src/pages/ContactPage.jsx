import { useState } from 'react'

const contactEmail = 'fxstemtech@gmail.com'
const whatsappNumber = '233548083273'
const whatsappDisplay = '+233 548 083 273'

function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setIsSubmitting(true)
    setSubmissionStatus('')

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'The message could not be sent.')
      }

      form.reset()
      setSubmissionStatus('Thanks for reaching out. Your message has been sent.')
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setSubmissionStatus(
        'We could not send your message. Please try again or email us directly.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

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
          action={`https://formsubmit.co/ajax/${contactEmail}`}
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New FxStemTech website enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
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

          <button className="button button-primary form-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send message'} <span aria-hidden="true">→</span>
          </button>
          {submissionStatus && (
            <p className="form-privacy" role="status" aria-live="polite">
              {submissionStatus}{' '}
              {submissionStatus.startsWith('We could not') && (
                <a href={`mailto:${contactEmail}`}>Email us</a>
              )}
            </p>
          )}
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
