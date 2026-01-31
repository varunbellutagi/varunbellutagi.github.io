function AboutSection() {
  const partners = [
    {
      name: 'Varun Bellutagi',
      role: 'Chartered Accountant',
      bio: 'Expertise in the field of Income Tax including Income Tax Return filing, tax planning, advisory, handling tax notices and assessments, TDS compliance, and representation before tax authorities for individuals and businesses.',
      image: '/varun.jpg',
      linkedin: 'https://www.linkedin.com/in/varun-bellutagi/',
      email: 'mailto:varunbellutagi@gmail.com',
    },
    {
      name: 'Manvitha Udupa',
      role: 'GST and compliance',
      bio: 'Expertise in GST consultancy and advisory, statutory audits including bank and company audits, internal audits, and stock audits',
      image: '/manvitha.JPG',
      linkedin: 'https://www.linkedin.com/in/manvitha-udupa-189a4318b',
      email: 'mailto:manviudupa@gmail.com',
    },
  ];
  const industries = [
    { name: 'Manufacturing', meta: '2+ clients · 1+ yrs' },
    { name: 'Technology', meta: '1+ clients · 1+ yrs' },
    { name: 'Healthcare', meta: '3+ clients · 1+ yrs' },
    { name: 'Logistics', meta: '1+ clients · 1+ yrs' },
    { name: 'Financial Services', meta: '2+ clients · 1+ yrs' },
    { name: 'Hospitality', meta: '3+ clients · 1+ yrs' },
    { name: 'Education', meta: '1+ clients · 1+ yrs' },
  ];

  return (
    <section id="about" className="section alt">
      <div className="section-header">
        <p className="eyebrow">About</p>
        <h2>Trusted expertise, dedicated to your success</h2>
      </div>
      <div className="partners-grid">
        {partners.map((partner) => (
          <article className="partner-card" key={partner.name}>
            <img
              className="partner-photo"
              src={partner.image}
              alt={partner.name}
            />
            <div>
              <h3>{partner.name}</h3>
              <p className="partner-role">{partner.role}</p>
              <p>{partner.bio}</p>
              <div className="partner-links">
                <a
                  className="icon-link"
                  href={partner.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${partner.name} on LinkedIn`}
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5C1.1 6 .01 4.88.01 3.5S1.1 1 2.5 1c1.37 0 2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.83v1.98h.05c.53-1 1.84-2.06 3.78-2.06C19.98 8.42 22 10.5 22 15.02V23h-4v-7.03c0-1.68-.03-3.85-2.35-3.85-2.36 0-2.72 1.84-2.72 3.73V23h-4V8.5z" />
                  </svg>
                </a>
                <a
                  className="icon-link"
                  href={partner.email}
                  aria-label={`Email ${partner.name}`}
                  title="Email"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.2l8 5.6 8-5.6V6H4zm16 12V9.1l-7.43 5.2a1 1 0 0 1-1.14 0L4 9.1V18h16z" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="industry-band">
        <div className="industry-list">
          {industries.map((industry) => (
            <div className="industry-item" key={industry.name}>
              <span className="industry-name">{industry.name}</span>
              <span className="industry-meta">{industry.meta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
