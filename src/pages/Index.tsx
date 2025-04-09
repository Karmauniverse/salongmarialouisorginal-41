
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import CustomerReviews from '../components/CustomerReviews';
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
    
    const preventScrollJitter = () => {
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overscrollBehavior = 'none';
      document.body.style.overscrollBehaviorY = 'none';
      document.documentElement.style.maxWidth = '100vw';
      document.body.style.maxWidth = '100vw';
      
      return () => {
        document.body.style.overflowX = '';
        document.documentElement.style.overscrollBehavior = '';
        document.body.style.overscrollBehaviorY = '';
        document.documentElement.style.maxWidth = '';
        document.body.style.maxWidth = '';
      };
    };
    
    const cleanup = preventScrollJitter();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] bg-inherit">
      <Navbar />
      <Hero />

      <section style={{
        backgroundColor: "#f8f5f2"
      }} className="py-12 md:py-16 px-4 text-center bg-gradient-to-b from-salon-beige/80 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/1efcadfc-9bef-48e3-b161-b1401bfbe36d.png')] opacity-[0.03] bg-repeat"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-xl md:text-3xl font-serif font-medium mb-4 text-gray-900">
            Välkommen till oss
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-5 text-gray-800 leading-relaxed font-lora">
            Med över 35 års samlad expertis erbjuder vi en plats där skönhet, omtanke och kvalitet möts.
            Här står du i fokus – oavsett om du kommer för en klippning, färg eller barbering.
          </p>
          <div className="mt-3">
            <a href="#about" className="italic text-base inline-flex items-center gap-1 text-salon-gold hover:text-salon-brown hover:underline transition-colors font-medium">
              Läs mer om oss
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Services />
      
      {isMobile ? (
        <>
          <KeratinInfo />
          <section id="event">
            <SpecialDay />
          </section>
          <Gallery />
          <About />
          <Contact />
          <CustomerReviews />
        </>
      ) : (
        <>
          <KeratinInfo />
          <Gallery />
          <About />
          <section id="event">
            <SpecialDay />
          </section>
          <Contact />
          <CustomerReviews />
        </>
      )}

      <div className="h-16 md:h-20 bg-gradient-to-b from-white to-salon-beige/10"></div>

      <Footer />
    </div>
  );
};

export default Index;
