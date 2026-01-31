import { useEffect } from 'react';
import FaqSection from '../sections/FaqSection';

function Faq() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="faq">
      <FaqSection />
    </main>
  );
}

export default Faq;
