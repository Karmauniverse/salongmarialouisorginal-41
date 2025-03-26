
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import CustomerReviews from '../components/CustomerReviews';
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
      <CustomerReviews />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
