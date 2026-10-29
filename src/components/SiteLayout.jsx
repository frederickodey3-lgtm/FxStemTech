import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const currentYear = new Date().getFullYear()

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="FxStemTech home">
          <img
            className="brand-logo"
            src="/images/fxstemtech-wordmark.jpg"
            alt="FxStemTech — Building Tomorrow's Innovators"
          />
        </Link>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            className="nav-cta"
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer section-wrap">
        <Link className="footer-brand" to="/" aria-label="FxStemTech home">
          <img
            src="/images/fxstemtech-wordmark.jpg"
            alt="FxStemTech"
            loading="lazy"
          />
        </Link>
        <p>Building tomorrow&apos;s innovators.</p>
        <span className="copyright">© {currentYear} FXSTEMTECH</span>
      </footer>
    </>
  )
}

export default SiteLayout
