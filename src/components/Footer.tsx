
import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Mail, Clock } from 'lucide-react';

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
              <a 
                href="https://www.instagram.com/salongmarialouiis/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-salon-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100063562662842" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-salon-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
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
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Keratinbehandlingar</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Barberartjänster</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-salon-gold transition-colors">Bryn & Fransar</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-salon-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  Hägerstensvägen 170<br />
                  126 53 Hägersten
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-salon-gold mr-2 flex-shrink-0" />
                <span className="text-white/70">
                  08-549 040 50
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-salon-gold mr-2 flex-shrink-0" />
                <span className="text-white/70">
                  salongmarialouis@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-salon-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  Måndag–Fredag: 10:00 – 18:00<br />
                  Lördag: 10:00 – 16:00<br />
                  Söndag: Stängt
                </span>
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
