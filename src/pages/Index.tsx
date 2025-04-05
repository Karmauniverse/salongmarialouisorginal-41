
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import KeratinInfo from '../components/KeratinInfo';
import SpecialDay from '../components/SpecialDay';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    document.title = 'Maria Louis Hårsalong | Premiumstyling';
    
    // Enhanced fix for mobile scrolling bug
    const preventScrollJitter = () => {
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overscrollBehavior = 'none';
      
      // Fix for automatic scrolling from sliders
      document.body.style.overscrollBehaviorY = 'none';
      
      return () => {
        document.body.style.overflowX = '';
        document.documentElement.style.overscrollBehavior = '';
        document.body.style.overscrollBehaviorY = '';
      };
    };
    
    const cleanup = preventScrollJitter();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-salon-cream">
      <Navbar />
      <Hero />
      <Services />
      {/* Keratin section moved after Services as requested */}
      <KeratinInfo />
      <Gallery />
      <About />
      
      {/* Different order based on screen size */}
      {isMobile ? (
        <>
          <Testimonials />
          <Contact />
          <section id="event">
            <SpecialDay /> {/* After Contact on mobile */}
          </section>
        </>
      ) : (
        <>
          <Testimonials />
          <section id="event">
            <SpecialDay /> {/* Before Contact on desktop */}
          </section>
          <Contact />
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
