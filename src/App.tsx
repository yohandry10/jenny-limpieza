import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import WorkPlan from './components/WorkPlan';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <div className="app">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <WhyChooseUs />
              <Services />
              <WorkPlan />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
          </>
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;