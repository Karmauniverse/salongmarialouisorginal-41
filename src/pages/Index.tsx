
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Maria Louis Hårsalong | Premiumstyling';
  }, []);

  return (
    <div className="min-h-screen bg-salon-cream">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
