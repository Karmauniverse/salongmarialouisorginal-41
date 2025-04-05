
import React, { useRef, useEffect } from 'react';

const Gabriel: React.FC = () => {
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

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left side for Gabriel (opposite of Valentine) */}
          <div ref={el => elementsRef.current[0] = el} className="animated-element order-2 lg:order-1">
            <h3 className="text-xl text-salon-gold font-medium mb-3">Frisör</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Möt Gabriel</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Gabriel är en erfaren och professionell frisör med över 20 år i branschen. 
              Hans passion för kreativitet och frisöryrket genomsyrar varje behandling, 
              där han med trygghet och känsla för detaljer skapar både stil och självkänsla hos sina kunder.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Han lyssnar alltid in dina önskemål och välkomnar både barn och vuxna, 
              damer som herrar. Gabriel utför alla typer av klippningar och färgbehandlingar 
              – med ett varmt bemötande och ett öga för det personliga.
            </p>
            
            <a 
              href="https://bokning.voady.se/marialouis/marialouisebarbershop/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all shadow-md hover:shadow-lg"
            >
              Boka Tid med Gabriel
            </a>
          </div>
          
          {/* Image - Right side */}
          <div ref={el => elementsRef.current[1] = el} className="animated-element order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-4 lg:aspect-w-1 lg:aspect-h-1 overflow-hidden rounded-xl shadow-xl">
                <img 
                  src="/WhatsApp Bild 2025-04-01 kl. 15.33.00_ecf4452e" 
                  alt="Gabriel - Frisör på Maria Louis" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-salon-gold/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 h-32 w-32 bg-salon-gold/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gabriel;
