function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section">
      <div className="section-header">
        <p className="eyebrow">Case Studies</p>
        <h2>Measured outcomes backed by disciplined execution</h2>
      </div>
      <div className="grid three">
        <article className="case-card">
          <h3>Regional manufacturer</h3>
          <p>
            Re-engineered inventory valuation and compliance controls,
            improving audit readiness within one quarter.
          </p>
          <span className="pill">Assurance</span>
        </article>
        <article className="case-card">
          <h3>High-growth SaaS</h3>
          <p>
            Implemented GST structuring and tax incentives to improve cash
            efficiency for expansion.
          </p>
          <span className="pill">Tax Strategy</span>
        </article>
        <article className="case-card">
          <h3>Family office</h3>
          <p>
            Designed a succession framework and asset governance structure for
            multi-generational transition.
          </p>
          <span className="pill">Advisory</span>
        </article>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
