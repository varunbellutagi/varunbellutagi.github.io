import { useState } from 'react';

const SERVICES = [
  {
    title: 'Tax Consultancy',
    items: [
      'Income Tax Return Filing for Individuals, Firms & Companies',
      'Tax Planning & Advisory',
      'Advance Tax Computation',
      'TDS Compliance & Returns',
      'Handling Income Tax Notices & Scrutiny',
      'Capital Gains Tax Advisory',
    ],
  },
  {
    title: 'GST Consultancy',
    items: [
      'GST Registration',
      'Monthly / Quarterly GST Returns',
      'GST Annual Return & Reconciliation',
      'GST Advisory & Compliance Review',
      'Handling GST Notices & Appeals',
      'LUT Filing for Exporters',
      'E-Invoice & E-Way Bill Compliance',
    ],
  },
  {
    title: 'Bookkeeping & Accounting',
    items: [
      'Day-to-Day Bookkeeping',
      'Accounting as per Ind AS / AS',
      'Ledger Scrutiny & Finalisation of Accounts',
      'Preparation of Financial Statements',
      'MIS Reports & Cash Flow Statements',
      'Payroll Accounting & Compliance',
    ],
  },
  {
    title: 'Statutory Audit',
    items: [
      'Statutory Audit of Companies',
      'LLP Audit',
      'Tax Audit under Income Tax Act',
      'Internal Audit',
      'Concurrent Audit',
      'Stock Audit',
    ],
  },
  {
    title: 'Company Formation & Registration',
    items: [
      'Company Registration',
      'LLP Registration',
      'OPC Registration',
      'Partnership Firm Registration',
      'NGO Registration',
      'MSME (Udyam) Registration',
      'PAN, TAN & GST Registration',
      'ROC Compliance & Annual Filings',
    ],
  },
];

function ServicesSection() {
  const [activeService, setActiveService] = useState<
    (typeof SERVICES)[number] | null
  >(null);

  return (
    <section id="services" className="section">
      <div className="section-header">
        <p className="eyebrow">Services</p>
        <h2>Structured services for individuals and companies</h2>
      </div>
      <div className="grid five">
        {SERVICES.map((service) => (
          <button
            key={service.title}
            className="service-card compact service-trigger"
            type="button"
            onClick={() => setActiveService(service)}
          >
            <h3>{service.title}</h3>
            <span className="service-cta">View details</span>
          </button>
        ))}
      </div>
      {activeService && (
        <div
          className="service-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={() => setActiveService(null)}
        >
          <div
            className="service-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="service-modal-close"
              type="button"
              aria-label="Close service details"
              onClick={() => setActiveService(null)}
            >
              Close
            </button>
            <h3 id="service-modal-title">{activeService.title}</h3>
            <ul className="service-modal-list">
              {activeService.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesSection;
