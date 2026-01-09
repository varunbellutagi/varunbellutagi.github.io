import { useState } from 'react';

const CASE_STUDIES = [
  {
    tag: 'Startup Setup',
    icon: 'launch',
    title: 'Software Services Startup Setup',
    lede: 'End-to-end setup from incorporation to operational readiness.',
    overview:
      'We assisted a software services startup in setting up its business in India from scratch, providing end-to-end support from incorporation to operational readiness.',
    role: [
      'Advisory on business structure and compliance',
      'Formation of Private Limited Company and MCA filings',
      'PAN, TAN, and GST registration for software services',
      'Setup of bookkeeping and accounting systems',
      'GST, TDS, and statutory compliance framework',
    ],
    outcome: [
      'Fully compliant software services company',
      'GST-ready invoicing and return filing system',
      'Structured accounting and MIS reporting',
      'Smooth transition from incorporation to operations',
    ],
    whyThisMatters:
      'A clean compliance foundation removes friction for growth and protects founders as they scale.',
  },
  {
    tag: 'Freelancer Advisory',
    icon: 'briefcase',
    title: 'Freelancer Income Tax & GST Advisory',
    lede: 'Practical tax clarity and stress-free compliance for freelancers.',
    overview:
      'We supported a group of freelancers in managing income tax filings and optional GST registration.',
    role: [
      'Advisory on GST applicability for services',
      'Income tax planning and quarterly filings',
      'Digital bookkeeping setup for multiple clients',
      'Guidance on tax-saving investments',
    ],
    outcome: [
      'Accurate tax filing with minimized liability',
      'Clear GST compliance strategy',
      'Stress-free financial management for freelancers',
    ],
    whyThisMatters:
      'Freelancers need clarity on GST thresholds and tax planning to avoid costly surprises.',
  },
  {
    tag: 'TDS Dispute',
    icon: 'shield',
    title: 'Salary TDS Deducted but Not Deposited by Employer',
    lede: 'Resolved a salary TDS mismatch demand through statutory protection.',
    problem:
      'An employee received salary after TDS deduction, but the tax did not appear in Form 26AS. The Income-tax Department raised a demand, alleging non-payment.',
    insight: [
      'Once TDS is deducted, the employee cannot be asked to pay again.',
      'Liability rests with the employer, even if TDS is not deposited.',
      'This is upheld by courts, including the Bombay High Court in Yashpal Sahni v. Rekha Hajarnavis.',
    ],
    solution: [
      'Established that TDS was actually deducted from salary.',
      'Invoked Section 205 to prevent double taxation.',
      'Redirected recovery action only against the employer.',
    ],
    outcome: [
      'Tax demand on the employee held unsustainable',
      'Full TDS credit allowed',
      'Department directed to proceed against employer',
    ],
    whyThisMatters:
      'The law protects employees from double taxation. When handled correctly, missing TDS does not become your liability.',
    callout:
      'Facing a TDS mismatch or wrongful tax demand? Our tax experts resolve salary TDS disputes efficiently and legally.',
  },
];

const CASE_ICONS: Record<string, string> = {
  launch:
    'M12 2l2.2 4.4L19 8.2l-4.3 3.2.9 5.3L12 14.8 7.4 16.7l.9-5.3L4 8.2l4.8-.8L12 2z',
  briefcase:
    'M7 6V4.5A2.5 2.5 0 0 1 9.5 2h5A2.5 2.5 0 0 1 17 4.5V6h3a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a2 2 0 0 1 2-2h3zm2 0h6V4.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V6z',
  shield:
    'M12 2l7 3v6c0 5-3.5 9.2-7 11-3.5-1.8-7-6-7-11V5l7-3z',
};

function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState<
    (typeof CASE_STUDIES)[number] | null
  >(null);

  return (
    <section id="case-studies" className="section">
      <div className="section-header">
        <p className="eyebrow">Case Studies</p>
        <h2>Measured outcomes backed by disciplined execution</h2>
      </div>
      <div className="grid three">
        {CASE_STUDIES.map((item) => (
          <button
            key={item.title}
            className="case-card case-trigger"
            type="button"
            onClick={() => setActiveCase(item)}
          >
            <div className="case-card__content">
              <span className="case-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d={CASE_ICONS[item.icon]} />
                </svg>
              </span>
              <header className="case-card__header">
                <span className="case-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p className="case-lede">{item.lede}</p>
              </header>
              <span className="case-cta">View details</span>
            </div>
          </button>
        ))}
      </div>
      {activeCase && (
        <div
          className="service-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Case study details"
          onClick={() => setActiveCase(null)}
        >
          <div className="case-modal" onClick={(event) => event.stopPropagation()}>
            <div className="case-modal__grid">
              {activeCase.overview && (
                <div className="case-block">
                  <h4>Overview</h4>
                  <p>{activeCase.overview}</p>
                </div>
              )}
              {activeCase.problem && (
                <div className="case-block">
                  <h4>The Problem</h4>
                  <p>{activeCase.problem}</p>
                </div>
              )}
              {activeCase.role && (
                <div className="case-block">
                  <h4>Our Role</h4>
                  <ul>
                    {activeCase.role.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeCase.insight && (
                <div className="case-block">
                  <h4>Key Legal Insight</h4>
                  <ul>
                    {activeCase.insight.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeCase.solution && (
                <div className="case-block">
                  <h4>Our Solution</h4>
                  <ul>
                    {activeCase.solution.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeCase.outcome && (
                <div className="case-block">
                  <h4>Outcome</h4>
                  <ul>
                    {activeCase.outcome.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeCase.whyThisMatters && (
                <div className="case-block">
                  <h4>Why This Matters</h4>
                  <p>{activeCase.whyThisMatters}</p>
                  {activeCase.callout && (
                    <p className="case-callout">{activeCase.callout}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CaseStudiesSection;
