import { useState } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import logoSrc from './assets/msvpcologo.svg';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Faq from './pages/Faq';
import Home from './pages/Home';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="page">
      <header className="site-header">
        <div className="header-bar">
          <div className="brand">
            <img src={logoSrc} className="site-logo" alt="MSVP and CO Logo" />
            <div className="brand-text">
              <span className="brand-name">MSVP and CO</span>
              <span className="brand-sub">Financial Consultants</span>
            </div>
          </div>
          <button
            className="mobile-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <div className="hamburger-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <div className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
          <nav className="nav">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <a href="/#services" onClick={closeMenu}>
              Services
            </a>
            <a href="/#about" onClick={closeMenu}>
              About
            </a>
            <a href="/#case-studies" onClick={closeMenu}>
              Case Studies
            </a>
            <Link to="/blog" onClick={closeMenu}>
              Blog
            </Link>
            <Link to="/faq" onClick={closeMenu}>
              FAQ
            </Link>
            <a href="/#contact" onClick={closeMenu}>
              Contact + Book
            </a>
          </nav>
          <a className="nav-cta" href="/#contact" onClick={closeMenu}>
            Book a call
          </a>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-nav">
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/">Home</Link>
              <a href="/#about">About Us</a>
              <a href="/#services">Services</a>
              <a href="/#case-studies">Case Studies</a>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <Link to="/blog">Blog</Link>
              <Link to="/faq">FAQ</Link>
              <a href="/#contact">Contact</a>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <p>
                6th Cross, Malleshwaram
                <br />
                Bangalore 560003
              </p>
              <a href="mailto:msvpco@gmail.com">msvpco@gmail.com</a>
              <a href="tel:+919019715954">+91 90197 15954</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {new Date().getFullYear()} MSVP and CO. All rights reserved.
            </p>
            <p className="developer-credit">
              Developed by{' '}
              <a
                href="https://linkedin.com/in/vibhavari-bellutagi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vibhavari Bellutagi
              </a>{' '}
              ·{' '}
              <a
                href="https://buildwithvibs.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </p>
          </div>
          <div className="footer-bottom-links">
            <Link to="/faq">Privacy Policy</Link>
            <Link to="/faq">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
