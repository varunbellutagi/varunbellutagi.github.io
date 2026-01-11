import { useState } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
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
            <div className="brand-mark" aria-hidden="true">
              MSVP
            </div>
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
            <Link to="/" onClick={closeMenu}>Home</Link>
            <a href="/#services" onClick={closeMenu}>Services</a>
            <a href="/#about" onClick={closeMenu}>About</a>
            <a href="/#case-studies" onClick={closeMenu}>Case Studies</a>
            <Link to="/blog" onClick={closeMenu}>Blog</Link>
            <Link to="/faq" onClick={closeMenu}>FAQ</Link>
            <a href="/#contact" onClick={closeMenu}>Contact + Book</a>
          </nav>
          <a className="nav-cta" href="/#contact" onClick={closeMenu}>
            Book a call
          </a>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <p>© 2024 MSVP and CO. Financial Consultants. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/blog">Blog</Link>
          <Link to="/faq">Policies</Link>
          <a href="/#contact">Contact</a>
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
