import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Faq from './pages/Faq';
import Home from './pages/Home';

function Layout() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            MSVP
          </div>
          <div className="brand-text">
            <span className="brand-name">MSVP and CO</span>
            <span className="brand-sub">Financial Consultants</span>
          </div>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <a href="/#services">Services</a>
          <a href="/#about">About</a>
          <a href="/#case-studies">Case Studies</a>
          <Link to="/blog">Blog</Link>
          <Link to="/faq">FAQ</Link>
          <a href="/#contact">Contact + Book</a>
        </nav>
        <a className="nav-cta" href="/#contact">
          Book a call
        </a>
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
