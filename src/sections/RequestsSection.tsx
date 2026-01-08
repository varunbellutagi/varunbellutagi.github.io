function RequestsSection() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Common requests</p>
        <h2>What clients ask us for most often</h2>
      </div>
      <div className="grid three">
        <article className="request-card">
          <h3>Income tax returns and tax planning</h3>
          <p>Structured filings with forward-looking guidance.</p>
        </article>
        <article className="request-card">
          <h3>GST registration, returns, compliance</h3>
          <p>End-to-end handling for accuracy and timeliness.</p>
        </article>
        <article className="request-card">
          <h3>Audit and assurance services</h3>
          <p>Independent reviews with documented controls.</p>
        </article>
        <article className="request-card">
          <h3>Notice handling and assessments</h3>
          <p>Representation and response support.</p>
        </article>
        <article className="request-card">
          <h3>Accounting, reporting, MIS</h3>
          <p>Monthly close and decision-ready insights.</p>
        </article>
      </div>
      <div className="cta-row">
        <a className="button primary" href="/#contact">
          Book a call
        </a>
        <span className="cta-note">For both individuals and companies.</span>
      </div>
    </section>
  );
}

export default RequestsSection;
