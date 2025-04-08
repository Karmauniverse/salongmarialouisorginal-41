
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'; 

<Hero />

<section className="py-16 px-4 text-center bg-white">
  <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
    Välkommen till Maria Louis – i hjärtat av Örnsberg
  </h2>
  <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-gray-800 leading-relaxed">
    Med över 35 års samlad expertis erbjuder vi en plats där skönhet, omtanke och kvalitet möts.
    Här står du i fokus – oavsett om du kommer för en klippning, färg eller barbering.
  </p>
  <div className="mt-2">
    <a
      href="#about"
      className="italic text-base inline-flex items-center gap-1 text-[#C8AA8B] hover:text-black hover:underline transition-colors"
    >
      Läs mer om oss
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</section>

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
    <div className="min-h-screen bg-salon-cream overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <Hero />
      <Services />
      <KeratinInfo />
      <Gallery />
      <About />

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
