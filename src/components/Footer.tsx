
import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Mail, Clock, CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-salon-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="mb-6 relative">
            <img 
              src="/lovable-uploads/7f539d77-5c4f-417e-bc3b-e9a15c1628bf.png" 
              alt="Maria Louis Logotyp" 
              className="h-40 object-contain" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-salon-dark to-transparent bottom-0 h-1/3"></div>
          </div>
          <h3 className="font-serif font-medium text-salon-gold mb-2 text-3xl">Maria Louis</h3>
          <p className="text-white/60 max-w-md text-sm">Sedan 2010 har vi levererat högkvalitativ hårservice i Hägersten – en prisbelönt salong med hjärta</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <h4 className="text-white font-medium mb-6 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">Betalsätt</h4>
            <div className="flex space-x-3 mb-4">
              <div className="bg-white p-2 rounded">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
              </div>
              <div className="bg-white p-2 rounded">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
              </div>
              <div className="bg-white p-2 rounded">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-6" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">Snabblänkar</h4>
            <ul className="space-y-3">
              {['Hem', 'Om Oss', 'Tjänster', 'Galleri', 'Kontakt'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-white/70 hover:text-salon-gold transition-colors inline-block relative hover:pl-2 duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">Tjänster</h4>
            <ul className="space-y-3">
              {['Klippning & Styling', 'Färgtjänster', 'Keratinbehandlingar', 'Barberartjänster', 'Bryn & Fransar'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-white/70 hover:text-salon-gold transition-colors inline-block relative hover:pl-2 duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin size={18} className="text-salon-gold mr-3 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                  Hägerstensvägen 170<br />
                  126 53 Hägersten
                </span>
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="text-salon-gold mr-3 flex-shrink-0 group-hover:animate-pulse" />
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                  08-549 040 50
                </span>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="text-salon-gold mr-3 flex-shrink-0 group-hover:animate-pulse" />
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                  salongmarialouis@gmail.com
                </span>
              </li>
              <li className="flex items-start group">
                <Clock size={18} className="text-salon-gold mr-3 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                  Måndag–Fredag: 10:00 – 18:00<br />
                  Lördag: 10:00 – 16:00<br />
                  Söndag: Stängt
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h4 className="text-white font-medium mb-4 text-lg">Följ oss</h4>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.instagram.com/salongmarialouiis/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-gold transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="text-white group-hover:animate-pulse" size={18} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100063562662842" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-gold transition-all duration-300 group"
              aria-label="Facebook"
            >
              <Facebook className="text-white group-hover:animate-pulse" size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            Salong Marialouis © 2025 om inget annat anges.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
