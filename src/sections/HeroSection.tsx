import BackgroundAnimation from './BackgroundAnimation';
import Typewriter from '../components/Typewriter';
import CountUp from '../components/CountUp';

const rotatingWords = [
  'Strategic Growth.',
  'Smart Investments.',
  'Financial Clarity.',
  'Risk Minimized.',
  'Tax Compliance.',
];

function HeroSection() {
  return (
    <section id="home" className="hero">
      <BackgroundAnimation />
      <div className="hero-content">
        <h1>
          <span className="hero-highlight">
            {' '}
            <Typewriter
              words={rotatingWords}
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={2500}
            />
          </span>
        </h1>
        <p className="hero-lead">
          MSVP and CO supports individuals and companies with end-to-end tax,
          audit, and reporting services that prioritize accuracy,
          responsiveness, and long-term value.
        </p>
        <div className="hero-actions">
          <a href="/#contact" className="button primary">
            Book a call
          </a>
          <a href="/#services" className="button secondary">
            Explore services
          </a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <span className="stat-value">
            <CountUp end={3} duration={1500} suffix="+" />
          </span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="stat-value">
            <CountUp end={20} duration={2000} suffix="+" />
          </span>
          <span className="stat-label">Clients Served</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="stat-value">
            <CountUp prefix="<" end={24} duration={1800} suffix="h" />
          </span>
          <span className="stat-label">Response Time</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="stat-value">
            <CountUp end={100} duration={2200} suffix="%" />
          </span>
          <span className="stat-label">Compliance Rate</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
