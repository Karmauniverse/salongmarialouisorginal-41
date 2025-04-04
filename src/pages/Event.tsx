
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SpecialDay from '../components/SpecialDay';

const Event = () => {
  return (
    <div className="min-h-screen bg-salon-cream">
      <Navbar />
      <section className="py-20 pt-32">
        <div className="container mx-auto">
          <SpecialDay />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Event;
