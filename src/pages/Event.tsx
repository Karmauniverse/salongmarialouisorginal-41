
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SpecialDay from '../components/SpecialDay';

const Event = () => {
  return (
    <div className="min-h-screen bg-salon-cream">
      <Navbar />
      <div className="pt-32">
        <SpecialDay />
      </div>
      <Footer />
    </div>
  );
};

export default Event;
