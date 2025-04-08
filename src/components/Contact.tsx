import React, { useEffect, useRef } from 'react';
import { CalendarDays, Phone } from 'lucide-react';
import { Button } from './ui/button';
const Contact: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
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
  return <div id="contact" className="bg-gradient-to-b from-white to-salon-cream/50 mx-0 px-0 py-0 my-[199px] bg-salon-beige">
      <div className="section-container bg-salon-cream">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-4 opacity-0">
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">
              Boka tid
            </span>
          </div>
          
          <h2 ref={el => elementsRef.current[1] = el} className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6 opacity-0">
            Välkommen till oss
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div ref={el => elementsRef.current[2] = el} className="animated-element opacity-0">
            <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-500">
              <img src="/lovable-uploads/43060cc3-2a10-4c5d-8048-43961faab9eb.png" alt="Diverse group of happy people enjoying together" className="w-full h-auto object-cover transition-all duration-500 hover:scale-105" />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div ref={el => elementsRef.current[3] = el} className="animated-element opacity-0 flex flex-col items-center md:items-start justify-center space-y-8">
            <div className="text-center md:text-left">
              <p className="text-lg md:text-xl text-salon-dark mb-4">
                Vill du veta mer om våra klippningar, färgningar eller styling?
              </p>
              <a href="#services" className="text-lg md:text-xl font-medium text-salon-gold hover:text-salon-brown transition-colors group">
                👉 Se våra behandlingar
              </a>
            </div>
            
            <a href="tel:08-549 040 50" className="text-2xl md:text-3xl font-serif text-salon-dark hover:text-salon-gold transition-colors">
              <span className="flex items-center gap-2">
                <Phone size={24} className="text-salon-gold" />
                08-549 040 50
              </span>
            </a>
            
            <a href="https://bokning.voady.se/marialouis/marialouisebarbershop/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <Button className="w-full md:w-auto px-8 py-6 bg-salon-gold hover:bg-salon-gold/90 text-white font-medium rounded-full shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all text-lg flex items-center gap-2">
                <CalendarDays className="w-5 h-5" />
                Boka tid
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;