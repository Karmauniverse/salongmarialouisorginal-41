import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';
const Footer: React.FC = () => {
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
  return <footer className="bg-salon-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Contact Info - Now first column */}
          <div className="order-1 md:order-1">
            <h4 className="text-white font-medium mb-4 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">
              Kontakta Oss
            </h4>
            <ul className="space-y-3 text-sm mb-5">
              <li className="flex items-start group">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover:bg-salon-cream/20 transition-colors duration-300">
                  <MapPin size={10} className="text-salon-gold group-hover:animate-pulse" />
                </div>
                <a href="https://www.google.com/maps?q=Hägerstensvägen+170,+126+53+Hägersten" target="_blank" rel="noopener noreferrer" className="text-white/70 group-hover:text-white transition-colors duration-300">
                  Hägerstensvägen 170, 126 53 Hägersten
                </a>
              </li>
              
              <li className="flex items-center group">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-salon-cream/20 transition-colors duration-300">
                  <Phone size={10} className="text-salon-gold group-hover:animate-pulse" />
                </div>
                <a href="tel:08-549 040 50" className="text-white/70 group-hover:text-white transition-colors duration-300">
                  08-549 040 50
                </a>
              </li>
              
              <li className="flex items-center group">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-salon-cream/20 transition-colors duration-300">
                  <Mail size={10} className="text-salon-gold group-hover:animate-pulse" />
                </div>
                <a href="mailto:salongmarialouis@gmail.com" className="text-white/70 group-hover:text-white transition-colors duration-300">
                  salongmarialouis@gmail.com
                </a>
              </li>
            </ul>
            
            {/* Opening hours in inline format */}
            <div className="mb-4 text-white/70 text-sm flex items-start">
              <span className="text-salon-gold mr-2">🕒</span>
              <span>Öppettider: Mån–Fre: 10:00–18:00 · Lör: 10:00–16:00 · Sön: Stängt</span>
            </div>
            
            {/* Social media icons */}
            <div className="flex space-x-3 mb-2">
              <a href="https://www.instagram.com/salongmarialouiis/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-gold transition-all duration-300 group" aria-label="Instagram">
                <Instagram className="text-white group-hover:animate-pulse" size={14} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100063562662842" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-gold transition-all duration-300 group" aria-label="Facebook">
                <Facebook className="text-white group-hover:animate-pulse" size={14} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Navigation */}
          <div className="md:col-span-1 order-2 md:order-2 border-r border-white/10 pr-4 my-0 mx-[50px]">
            <h4 className="text-white font-medium mb-4 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">
              Snabbmeny
            </h4>
            <ul className="space-y-3 text-sm">
              {[{
              name: 'Hem',
              href: '/'
            }, {
              name: 'Behandlingar',
              href: '#services'
            }, {
              name: 'Galleri',
              href: '#gallery'
            }, {
              name: 'Om Oss',
              href: '#about'
            }, {
              name: 'Kontakt',
              href: '#contact'
            }].map(link => <li key={link.name}>
                  <a href={link.href} onClick={e => handleNavLinkClick(e, link.href)} className="text-white/60 hover:text-salon-gold transition-colors duration-300 flex items-center">
                    <span className="w-1 h-1 bg-salon-gold rounded-full mr-2"></span>
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div className="order-3 md:order-3">
            <h4 className="text-white font-medium mb-4 text-lg relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-salon-gold pb-2">
              Behandlingar  
            </h4>
            <ul className="space-y-3 text-sm">
              {['Klippning & Styling', 'Färgtjänster', 'Keratinbehandlingar', 'Barberartjänster', 'Bryn & Fransar'].map((item, index) => <li key={index}>
                  <a href="#services" className="text-white/60 hover:text-salon-gold transition-colors duration-300 flex items-center">
                    <span className="w-1 h-1 bg-salon-gold rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>
        
        {/* Map section */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-12 h-[250px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.6872873958072!2d17.979410576922515!3d59.29883711575019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77bfcad5de59%3A0x6f608f4b756a585a!2zSMOkZ2Vyc3RlbnN2w6RnZW4gMTcwLCAxMjYgNTMgSMOkZ2Vyc3Rlbg!5e0!3m2!1ssv!2sse!4v1721584307855!5m2!1ssv!2sse" width="100%" height="100%" style={{
          border: 0
        }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Maria Louis Hårsalong karta" className="w-full h-full"></iframe>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © Maria Louis {new Date().getFullYear()} · Alla rättigheter förbehållna
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;