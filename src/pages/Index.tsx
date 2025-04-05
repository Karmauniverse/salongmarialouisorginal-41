
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Gabriel from '../components/Gabriel';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import KeratinInfo from '../components/KeratinInfo';
import SpecialDay from '../components/SpecialDay';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    document.title = 'Maria Louis Hårsalong | Premiumstyling';
    
    const preventScrollJitter = () => {
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overscrollBehavior = 'none';
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
      <KeratinInfo />
      <Gallery />
      <About />
      <Gabriel />

      {isMobile ? (
        <>
          <Testimonials />
          <Contact />
          <section id="event">
            <SpecialDay />
          </section>
        </>
      ) : (
        <>
          <Testimonials />
          <section id="event">
            <SpecialDay />
          </section>
          <Contact />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Index;
