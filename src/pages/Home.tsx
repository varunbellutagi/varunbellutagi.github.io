import AboutSection from '../sections/AboutSection';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import ContactSection from '../sections/ContactSection';
import HeroSection from '../sections/HeroSection';
import RequestsSection from '../sections/RequestsSection';
import ServicesSection from '../sections/ServicesSection';

function Home() {
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
