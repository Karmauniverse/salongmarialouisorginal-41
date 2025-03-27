
import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-salon-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Map section */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-16 max-w-5xl mx-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.9250243611065!2d18.069699415981644!3d59.44113108169673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9b3d5d6eaedd%3A0xb6e30f06b5b23da7!2sCentralv%C3%A4gen%201%2C%20187%2062%20T%C3%A4by!5e0!3m2!1ssv!2sse!4v1657881642421!5m2!1ssv!2sse" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title="Maria Louis Hårsalong karta" 
            className="w-full"
          ></iframe>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {/* Logo and description */}
          <div className="flex flex-col items-start">
            <img 
              src="/lovable-uploads/7f539d77-5c4f-417e-bc3b-e9a15c1628bf.png" 
              alt="Maria Louis Logotyp" 
              className="h-32 mb-4 object-scale-down" 
            />
            <p className="text-white/60 text-sm mx-[14px] my-0">
              Sedan 2010 har vi levererat högkvalitativ hårservice i Hägersten – en prisbelönt salong med hjärta!
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-6 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">
              Behandlingar
            </h4>
            <ul className="space-y-3">
              {['Klippning & Styling', 'Färgtjänster', 'Keratinbehandlingar', 'Barberartjänster', 'Bryn & Fransar'].map((item, index) => (
                <li key={index} className="text-white/70 hover:text-white transition-colors duration-300">
                  <a href="/#services" className="hover:text-salon-gold transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-white font-medium mb-6 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover:bg-salon-cream/20 transition-colors duration-300">
                  <MapPin size={16} className="text-salon-gold group-hover:animate-pulse" />
                </div>
                <a 
                  href="https://www.google.com/maps?q=Hägerstensvägen+170,+126+53+Hägersten" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 group-hover:text-white transition-colors duration-300"
                >
                  Hägerstensvägen 170<br />
                  126 53 Hägersten
                </a>
              </li>
              
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-salon-cream/20 transition-colors duration-300">
                  <Phone size={16} className="text-salon-gold group-hover:animate-pulse" />
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                  08-549 040 50
                </span>
              </li>
              
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-salon-cream/20 transition-colors duration-300">
                  <Mail size={16} className="text-salon-gold group-hover:animate-pulse" />
                </div>
                <a 
                  href="mailto:salongmarialouis@gmail.com" 
                  className="text-white/70 group-hover:text-white transition-colors duration-300"
                >
                  salongmarialouis@gmail.com
                </a>
              </li>
              
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover:bg-salon-cream/20 transition-colors duration-300">
                  <Clock size={16} className="text-salon-gold group-hover:animate-pulse" />
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                  Måndag–Fredag: 10:00 – 18:00<br />
                  Lördag: 10:00 – 16:00<br />
                  Söndag: Stängt
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social media icons */}
        <div className="text-center mb-8">
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
        
        {/* Navigation links */}
        <div className="text-center mb-6">
          <div className="inline-flex flex-wrap justify-center gap-x-3 gap-y-2">
            {['Hem', 'Behandlingar', 'Galleri', 'Om Oss', 'Kontakt'].map((item, index) => (
              <React.Fragment key={item}>
                <a 
                  href={index === 0 ? '/' : `/#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-white/60 hover:text-salon-gold transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
                {index < 4 && <span className="text-white/30">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm mb-4 my-0">
            © Maria Louis 2025 · Alla rättigheter förbehållna
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
