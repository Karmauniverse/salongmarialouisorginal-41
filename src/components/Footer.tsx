
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-salon-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <span className="font-serif text-xl font-medium text-white">Maria Louis</span>
            </a>
            <p className="text-white/70 mb-6">
              Premium hair salon services dedicated to helping you look and feel your best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-salon-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-salon-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-salon-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-salon-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-salon-gold transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-salon-gold transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-salon-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Haircuts & Styling</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Color Services</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Hair Treatments</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Bridal Services</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Extensions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/70">
                123 Elegance Avenue<br />
                San Francisco, CA 94105
              </li>
              <li className="text-white/70">
                (555) 123-4567
              </li>
              <li className="text-white/70">
                info@marialouissalon.com
              </li>
              <li className="text-white/70">
                Tuesday - Saturday: 9am - 7pm<br />
                Sunday - Monday: Closed
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {currentYear} Maria Louis Hair Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
