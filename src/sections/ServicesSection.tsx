function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="section-header">
        <p className="eyebrow">Services</p>
        <h2>Structured services for individuals and companies</h2>
      </div>
      <div className="grid two">
        <article className="service-card">
          <h3>Individuals</h3>
          <ul>
            <li>ITR filing/revision and tax planning</li>
            <li>Investment advisory</li>
            <li>Capital gains (stocks, MF, property), ESOP taxation</li>
            <li>NRI taxation + DTAA + foreign income disclosure</li>
            <li>Notice handling and assessment support</li>
            <li>TDS refunds, income proofs, net worth certificates</li>
          </ul>
          <a className="text-link" href="/#contact">
            Book a call for individual services
          </a>
        </article>
        <article className="service-card">
          <h3>Companies</h3>
          <ul>
            <li>GST registration, returns, reconciliations</li>
            <li>TDS compliance</li>
            <li>ROC/MCA compliance (annual + event-based)</li>
            <li>Bookkeeping, monthly close, MIS reporting</li>
            <li>Tax audit and statutory audit support</li>
            <li>Management consultancy services</li>
            <li>Cost cutting planning</li>
            <li>Streamlining processes</li>
          </ul>
          <a className="text-link" href="/#contact">
            Book a call for company services
          </a>
        </article>
      </div>
      <div className="service-note">
        <p>
          Outcomes: High quality of service and measurable value addition.
          Documents are collected after the first discussion. Timelines and
          pricing vary by file and requirements. Delivery mode: remote,
          in-person, or hybrid.
        </p>
      </div>
    </section>
  );
}

export default ServicesSection;
