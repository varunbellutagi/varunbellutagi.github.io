function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">Structured guidance for every client path</p>
        <h1>Compliance, clarity, and confident decisions.</h1>
        <p className="lead">
          MSVP and CO supports individuals and companies with end-to-end tax,
          audit, and reporting services that prioritize accuracy,
          responsiveness, and long-term value.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/#contact">
            Book a call
          </a>
          <a className="text-link" href="/#services">
            Explore services
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <span className="stat-value">3+ yrs</span>
            <span className="stat-label">Founding team experience</span>
          </div>
          <div>
            <span className="stat-value">15-20</span>
            <span className="stat-label">Clients served</span>
          </div>
          <div>
            <span className="stat-value">~24 hrs</span>
            <span className="stat-label">Typical response time</span>
          </div>
          <div>
            <span className="stat-value">Individuals + Businesses</span>
            <span className="stat-label">Focused client segments</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
