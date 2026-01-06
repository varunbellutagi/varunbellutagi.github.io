import {
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaYoutube,
} from 'react-icons/fa';

function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <div className="section-header">
        <p className="eyebrow">Contact + Book</p>
        <h2>Start with a confidential consultation</h2>
      </div>
      <div className="contact-split">
        <div className="contact-info">
          <div className="contact-card accent">
            <h3>Book and contact</h3>
            <p>Share your requirement and we will respond within 24 hours.</p>
            <a
              className="button primary"
              href="https://calendly.com/varunbellutagi/30min"
            >
              Book via Calendly
            </a>
            <span className="contact-note">
              Documents will be collected after the first call.
            </span>
          </div>
          <div className="contact-card">
            <h3>Business address</h3>
            <p>6th Cross malleshwaram, Bangalore 5600003</p>
          </div>
          <div className="contact-card accent">
            <h3>Contact details</h3>
            <p>
              📧 <a href="mailto:mpsvco@gmail.com">mpsvco@gmail.com</a>
            </p>
            <p>
              📞 <a href="tel:+919019715954">+91 9019715954</a> ·{' '}
              <a href="tel:+919900088374">+91 99000 88374</a>
            </p>
            <span className="contact-note">
              Office hours: 9AM to 6PM Monday to Saturday
            </span>
          </div>
          <div className="contact-card">
            <h3>Social channels</h3>
            <p>
              <FaLinkedin aria-hidden="true" />{' '}
              <a href="https://linkedin.com">LinkedIn</a>
            </p>
            <p>
              <FaInstagram aria-hidden="true" />{' '}
              <a href="https://instagram.com">Instagram</a>
            </p>
            <p>
              <FaYoutube aria-hidden="true" />{' '}
              <a href="https://youtube.com">YouTube</a>
            </p>
            <p>
              <FaMapMarkerAlt aria-hidden="true" />{' '}
              <a href="https://business.google.com">Google Business Profile</a>
            </p>
            <span className="contact-note">Links will be added soon.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
