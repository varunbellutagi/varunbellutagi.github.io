function RequestsSection() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Common requests</p>
        <h2>What clients ask us for most often</h2>
      </div>
      <div className="grid three">
        <article className="request-card">
          <h3>Income Tax Planning</h3>
          <p>
            Strategic optimization strategies to minimize liability and ensure
            tax efficiency.
          </p>
        </article>

        <article className="request-card">
          {/* Fixed typo: Restructing -> Restructuring */}
          <h3>Corporate Restructuring</h3>
          <p>
            Seamless reorganization advice to align business goals with
            operational efficiency.
          </p>
        </article>

        <article className="request-card">
          {/* Renamed slightly to differentiate from the next card */}
          <h3>Tax Scrutiny & Assessments</h3>
          <p>
            Comprehensive support during detailed audits to ensure accurate fact
            representation.
          </p>
        </article>

        <article className="request-card">
          <h3>Notice Handling & Litigation</h3>
          <p>
            Expert legal representation and precise drafting of responses to
            department inquiries.
          </p>
        </article>

        <article className="request-card">
          <h3>Financial Planning & Analysis</h3>
          <p>
            Data-driven forecasting, budgeting, and insights to drive growth
            decisions.
          </p>
        </article>

        <article className="request-card">
          <h3>Cost Management</h3>
          <p>
            In-depth analysis of operational expenses to optimize margins and
            profitability.
          </p>
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
