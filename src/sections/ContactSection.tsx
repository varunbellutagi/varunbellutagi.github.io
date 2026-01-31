import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaYoutube,
} from 'react-icons/fa';

function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <p className="eyebrow">Contact + Book</p>
        <h2>Start with a confidential consultation</h2>
      </div>

      <div className="contact-container">
        {/* Left Column: Primary CTA */}
        <div className="contact-main">
          <h3>Ready to clear the confusion?</h3>
          <p className="contact-lead">
            Book a 30-minute discovery call directly on our calendar. We’ll
            discuss your specific situation and outline how we can help.
          </p>
          <a
            className="button primary"
            href="https://calendly.com/varunbellutagi/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book via Calendly
          </a>
          <p className="contact-subtext">
            * Documents will be collected only after the first call. No
            commitment required.
          </p>
        </div>

        {/* Right Column: Contact Info & Socials */}
        <div className="contact-details">
          <div className="detail-group">
            <h4>Reach us directly</h4>
            <div className="detail-list">
              <a href="mailto:msvpco@gmail.com" className="detail-item">
                <div className="detail-icon-box">
                  <FaEnvelope aria-hidden="true" />
                </div>
                <span>msvpco@gmail.com</span>
              </a>
              <a href="tel:+919019715954" className="detail-item">
                <div className="detail-icon-box">
                  <FaPhone aria-hidden="true" />
                </div>
                <span>+91 90197 15954</span>
              </a>
              <a href="tel:+919900088374" className="detail-item">
                <div className="detail-icon-box">
                  <FaPhone aria-hidden="true" />
                </div>
                <span>+91 99000 88374</span>
              </a>
            </div>
          </div>

          <div className="detail-group">
            <h4>Visit us</h4>
            <div className="detail-item">
              <div className="detail-icon-box">
                <FaMapMarkerAlt aria-hidden="true" />
              </div>
              <span>
                6th Cross, Malleshwaram, <br />
                Bangalore 560003
              </span>
            </div>
          </div>

          <div className="social-row">
            <a
              href="https://www.linkedin.com/company/msvpco/"
              className="social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/msvp.co?igsh=MWk1ZHVscGU1NWlpaQ=="
              className="social-link"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
