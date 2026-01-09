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
      <div className="hero-illustration" aria-hidden="true">
        <div className="hero-illustration-card">
          <svg viewBox="0 0 320 260" role="presentation">
            <defs>
              <linearGradient id="heroAccent" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--ink-700)" />
              </linearGradient>
            </defs>
            <rect
              x="12"
              y="16"
              width="296"
              height="228"
              rx="22"
              fill="var(--surface-900)"
              stroke="var(--card-border)"
              strokeWidth="2"
            />
            <rect
              x="32"
              y="36"
              width="256"
              height="48"
              rx="14"
              fill="var(--card-bg)"
              stroke="var(--card-border)"
            />
            <rect
              x="44"
              y="52"
              width="120"
              height="8"
              rx="4"
              fill="var(--card-text-secondary)"
            />
            <rect
              x="44"
              y="68"
              width="90"
              height="8"
              rx="4"
              fill="var(--card-text-muted)"
            />
            <rect
              x="32"
              y="96"
              width="170"
              height="120"
              rx="16"
              fill="var(--card-bg)"
              stroke="var(--card-border)"
            />
            <rect
              x="214"
              y="96"
              width="74"
              height="120"
              rx="16"
              fill="var(--card-bg)"
              stroke="var(--card-border)"
            />
            <path
              d="M52 182 L92 142 L124 166 L168 118"
              fill="none"
              stroke="url(#heroAccent)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="92" cy="142" r="6" fill="var(--accent)" />
            <circle cx="124" cy="166" r="6" fill="var(--accent)" />
            <circle cx="168" cy="118" r="6" fill="var(--accent)" />
            <rect
              x="230"
              y="112"
              width="40"
              height="10"
              rx="5"
              fill="var(--card-text-secondary)"
            />
            <rect
              x="230"
              y="132"
              width="28"
              height="10"
              rx="5"
              fill="var(--card-text-muted)"
            />
            <rect
              x="230"
              y="152"
              width="44"
              height="10"
              rx="5"
              fill="var(--card-text-secondary)"
            />
            <rect
              x="230"
              y="172"
              width="32"
              height="10"
              rx="5"
              fill="var(--card-text-muted)"
            />
          </svg>
        </div>
        <div className="hero-illustration-chip">
          Your Financial snapshots in one view
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
