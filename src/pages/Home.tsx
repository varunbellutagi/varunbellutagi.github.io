import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutSection from '../sections/AboutSection';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import ContactSection from '../sections/ContactSection';
import HeroSection from '../sections/HeroSection';
import RequestsSection from '../sections/RequestsSection';
import ServicesSection from '../sections/ServicesSection';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main className="home">
      <HeroSection />
      <ServicesSection />
      <RequestsSection />
      <AboutSection />
      <CaseStudiesSection />
      <ContactSection />
    </main>
  );
}

export default Home;
