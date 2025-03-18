
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
              Exklusiva hårsalongstjänster dedikerade till att hjälpa dig se och känna dig som bäst.
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
            <h4 className="text-white font-medium mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-salon-gold transition-colors">Hem</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-salon-gold transition-colors">Om Oss</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Tjänster</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-salon-gold transition-colors">Galleri</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-salon-gold transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Tjänster</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Klippning & Styling</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Färgtjänster</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Hårvårdsbehandlingar</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Brudtjänster</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Hårförlängning</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-white/70">
                123 Elegansvägen<br />
                Stockholm, 114 42
              </li>
              <li className="text-white/70">
                08-123 45 67
              </li>
              <li className="text-white/70">
                info@marialouissalong.se
              </li>
              <li className="text-white/70">
                Tisdag - Lördag: 09:00 - 19:00<br />
                Söndag - Måndag: Stängt
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {currentYear} Maria Louis Hårsalong. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
