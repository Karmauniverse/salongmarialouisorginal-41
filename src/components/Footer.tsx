
import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from '@/hooks/use-mobile';

const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-salon-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Snabbmeny */}
          <div className="p-6 bg-salon-dark/80 rounded-lg border border-white/5">
            <h4 className="text-white font-medium mb-4 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">
              Snabbmeny
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Hem', href: '/' },
                { name: 'Behandlingar', href: '#services' },
                { name: 'Galleri', href: '#gallery' },
                { name: 'Om Oss', href: '#about' },
                { name: 'Kontakt', href: '#contact' }
              ].map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={e => handleNavLinkClick(e, link.href)} 
                    className="text-white/70 hover:text-salon-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-salon-gold rounded-full mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 2: Behandlingar */}
          <div className="p-6 bg-salon-dark/80 rounded-lg border border-white/5">
            <h4 className="text-white font-medium mb-4 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">
              Behandlingar
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                'Klippning & Styling', 
                'Färgtjänster', 
                'Keratinbehandlingar', 
                'Barberartjänster', 
                'Bryn & Fransar'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-white/70 hover:text-salon-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-salon-gold rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Öppettider */}
          <div className="p-6 bg-salon-dark/60 rounded-lg border border-white/10 shadow-md backdrop-blur-sm">
            <h4 className="text-white font-medium mb-4 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">
              Öppettider
            </h4>
            {isMobile ? (
              // Mobile: Condensed hours format
              <div className="space-y-2 text-sm">
                <p className="text-white/70 flex flex-col">
                  <span className="mb-1">Mån–Fre: 10–18</span>
                  <span className="mb-1">Lördag: 10–16</span>
                  <span>Söndag: Stängt</span>
                </p>
              </div>
            ) : (
              // Desktop: Detailed hours format
              <ul className="space-y-2 text-sm">
                {[
                  { day: 'Måndag', hours: '10:00–18:00' },
                  { day: 'Tisdag', hours: '10:00–18:00' },
                  { day: 'Onsdag', hours: '10:00–18:00' },
                  { day: 'Torsdag', hours: '10:00–18:00' },
                  { day: 'Fredag', hours: '10:00–18:00' },
                  { day: 'Lördag', hours: '10:00–16:00' },
                  { day: 'Söndag', hours: 'Stängt' }
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="text-white/70 flex justify-between items-center"
                  >
                    <span>{item.day}:</span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Column 4: Kontakta Oss */}
          <div className="p-6 bg-salon-dark/60 rounded-lg border border-white/10 shadow-md backdrop-blur-sm">
            <h4 className="text-white font-medium mb-4 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">
              Kontakta Oss
            </h4>
            <ul className="space-y-3 text-sm mb-5">
              <li className="flex items-start group">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover:bg-salon-cream/20 transition-colors duration-300">
                  <MapPin size={10} className="text-salon-gold group-hover:animate-pulse" />
                </div>
                <a 
                  href="https://www.google.com/maps?q=Hägerstensvägen+170,+126+53+Hägersten" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 group-hover:text-white transition-colors duration-300 my-[3px]"
                >
                  Hägerstensvägen 170, 126 53 Hägersten
                </a>
              </li>
              
              <li className="flex items-center group">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-salon-cream/20 transition-colors duration-300">
                  <Phone size={10} className="text-salon-gold group-hover:animate-pulse" />
                </div>
                <a 
                  href="tel:08-549 040 50" 
                  className="text-white/70 group-hover:text-white transition-colors duration-300 my-[2px]"
                >
                  08-549 040 50
                </a>
              </li>
              
              <li className="flex items-center group">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-salon-cream/20 transition-colors duration-300">
                  <Mail size={10} className="text-salon-gold group-hover:animate-pulse" />
                </div>
                <a 
                  href="mailto:salongmarialouis@gmail.com" 
                  className="text-white/70 group-hover:text-white transition-colors duration-300 my-[6px]"
                >
                  salongmarialouis@gmail.com
                </a>
              </li>
            </ul>
            
            {/* Social media icons */}
            <div className="flex space-x-3 mt-4">
              <a 
                href="https://www.instagram.com/salongmarialouiis/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-gold transition-all duration-300 group" 
                aria-label="Instagram"
              >
                <Instagram className="text-white group-hover:animate-pulse" size={14} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100063562662842" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-gold transition-all duration-300 group" 
                aria-label="Facebook"
              >
                <Facebook className="text-white group-hover:animate-pulse" size={14} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Map section */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-12 h-[250px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.6872873958072!2d17.979410576922515!3d59.29883711575019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77bfcad5de59%3A0x6f608f4b756a585a!2zSMOkZ2Vyc3RlbnN2w6RnZW4gMTcwLCAxMjYgNTMgSMOkZ2Vyc3Rlbg!5e0!3m2!1ssv!2sse!4v1721584307855!5m2!1ssv!2sse" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title="Maria Louis Hårsalong karta" 
            className="w-full h-full"
             filter: 'grayscale(100%) brightness(112%)'
          />
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © Maria Louis {new Date().getFullYear()} · Alla rättigheter förbehållna
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
