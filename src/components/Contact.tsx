import React, { useEffect, useRef } from 'react';
import { CalendarDays, Phone, Clock, Scissors, Sparkles, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';
const Contact: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });
    return () => {
      elementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  return <div id="contact" className="bg-gradient-to-b from-white to-salon-cream/50 py-24 md:py-32">
      <div className="section-container bg-salon-cream rounded-2xl shadow-sm">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-4 opacity-0">
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">
              Boka tid
            </span>
          </div>
          
          <h2 ref={el => elementsRef.current[1] = el} className="animated-element text-3xl md:text-4xl font-serif font-medium mb-5 opacity-0">
            Välkommen till oss
          </h2>
          
          <p ref={el => elementsRef.current[2] = el} className="animated-element text-salon-dark/80 max-w-2xl mx-auto opacity-0 font-lora text-lg px-4 md:px-0 leading-relaxed">
            Hos oss är alla välkomna – stora som små, unga som gamla. Vi lyssnar, anpassar oss och strävar efter att göra din stund hos oss trygg, smidig och personlig.
            <br className="hidden md:block" />
            <span className="block mt-2">Vi värdesätter varje besök och möter dig med omtanke och respekt –
oavsett vem du är.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center px-4 md:px-8 py-6">
          {/* Left Column - Image */}
          <div ref={el => elementsRef.current[3] = el} className="animated-element opacity-0 flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 relative">
              <img src="/lovable-uploads/43060cc3-2a10-4c5d-8048-43961faab9eb.png" alt="Diverse group of happy people enjoying together" className="w-full h-auto object-cover transition-all duration-500 hover:scale-105" />
              {!isMobile && <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-salon-dark/70 via-salon-dark/40 to-transparent p-6">
                  <p className="text-white font-serif text-xl md:text-2xl font-light italic typewriter-text">
                    Alla är välkomna hos oss
                  </p>
                </div>}
            </div>

            {/* Feature cards - Only shown on desktop */}
            {!isMobile && <div className="grid grid-cols-3 gap-4 w-full">
                <div className="bg-salon-gold/5 p-4 rounded-lg text-center">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-salon-gold/70" />
                  <p className="text-sm font-medium text-salon-dark">Flexibla tider</p>
                </div>
                <div className="bg-salon-gold/5 p-4 rounded-lg text-center">
                  <Sparkles className="w-6 h-6 mx-auto mb-2 text-salon-gold/70" />
                  <p className="text-sm font-medium text-salon-dark">Expertis & kreativitet</p>
                </div>
                <div className="bg-salon-gold/5 p-4 rounded-lg text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-salon-gold/70" />
                  <p className="text-sm font-medium text-salon-dark">Tryggt & välkomnande</p>
                </div>
              </div>}
          </div>
          
          {/* Right Column - Content */}
          <div ref={el => elementsRef.current[4] = el} className="animated-element opacity-0 flex flex-col items-center md:items-start justify-center space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-salon-gold/10 shadow-sm w-full">
              <div className="space-y-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-serif mb-4 text-salon-dark">Våra Behandlingar</h3>
                  <p className="font-lora text-lg text-salon-dark mb-6 leading-relaxed">
                    Vill du veta mer om våra klippningar, färgningar eller styling?
                  </p>
                  
                  <a href="#services" className="inline-flex items-center gap-2 text-lg font-medium text-salon-gold hover:text-salon-brown transition-colors group">
                    <Scissors size={18} className="text-salon-gold transition-all duration-300 group-hover:rotate-12" />
                    Se våra behandlingar
                  </a>
                </div>
                
                <Separator className="my-6 bg-salon-gold/20" />
                
                <div className="flex flex-col items-center md:items-start space-y-3">
                  <span className="text-salon-dark/60 text-sm">Ring oss direkt</span>
                  <a href="tel:08-549 040 50" className="text-2xl md:text-3xl font-serif text-salon-dark hover:text-salon-gold transition-colors">
                    <span className="flex items-center gap-2">
                      <Phone size={24} className="text-salon-gold" />
                      08-549 040 50
                    </span>
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
                  <span className="inline-block px-3 py-1 bg-salon-cream text-salon-brown text-xs font-medium rounded-full">
                    35+ års erfarenhet
                  </span>
                  <span className="inline-block px-3 py-1 bg-salon-cream text-salon-brown text-xs font-medium rounded-full">
                    Professionell service
                  </span>
                  <span className="inline-block px-3 py-1 bg-salon-cream text-salon-brown text-xs font-medium rounded-full">
                    Noggrant utvalda produkter
                  </span>
                </div>
                
                <div className="pt-4 mt-2">
                  <a href="https://bokning.voady.se/marialouis/marialouisebarbershop/" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full md:w-auto px-8 py-6 bg-salon-gold hover:bg-salon-gold/90 text-white font-medium rounded-full shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all text-lg flex items-center gap-2 justify-center">
                      <CalendarDays className="w-5 h-5" />
                      Boka tid online
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;