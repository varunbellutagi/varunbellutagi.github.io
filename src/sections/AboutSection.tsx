function AboutSection() {
  return (
    <section id="about" className="section alt">
      <div className="section-header">
        <p className="eyebrow">About</p>
        <h2>Four partners, one shared standard of rigor</h2>
      </div>
      <div className="grid four">
        <article className="partner-card">
          <div className="partner-photo" aria-hidden="true" />
          <div>
            <h3>Varun Bellutagi</h3>
            <p className="partner-role">Chartered Accountant</p>
            <p>
              Focused on statutory audits, internal controls, and risk
              assessments for growing companies.
            </p>
          </div>
        </article>
        <article className="partner-card">
          <div className="partner-photo" aria-hidden="true" />
          <div>
            <h3>Shashank Iyengar</h3>
            <p className="partner-role">Chartered Accountant</p>
            <p>
              Specializes in tax planning, assessments, and high-value filings
              for individuals and founders.
            </p>
          </div>
        </article>
        <article className="partner-card">
          <div className="partner-photo" aria-hidden="true" />
          <div>
            <h3>Manvitha Udupa</h3>
            <p className="partner-role">GST and compliance</p>
            <p>
              Oversees GST registrations, returns, reconciliations, and
              compliance systems for businesses.
            </p>
          </div>
        </article>
        <article className="partner-card">
          <div className="partner-photo" aria-hidden="true" />
          <div>
            <h3>Preethi Ramesh</h3>
            <p className="partner-role">Income Tax and Assessments</p>
            <p>
              Builds reporting cadence, MIS dashboards, and financial structures
              that support decision-making.
            </p>
          </div>
        </article>
      </div>
      <div className="industry-band">
        <span>Industries served</span>
        <p>
          Manufacturing · Technology · Healthcare · Real Estate · Logistics ·
          Financial Services · Hospitality · Education
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
