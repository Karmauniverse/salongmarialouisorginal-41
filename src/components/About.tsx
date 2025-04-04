
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Instagram, Facebook } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-4">
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">
              Om Oss
            </span>
          </div>
          
          <h2 ref={el => elementsRef.current[1] = el} className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6">
            Välkommen till Maria Louis
          </h2>
          
          <p ref={el => elementsRef.current[2] = el} className="animated-element text-salon-dark/80 font-lora">
            En moderna salong med dedikerade frisörer som brinner för konsten att skapa skönhet och förändring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Maria */}
          <div ref={el => elementsRef.current[3] = el} className="animated-element bg-white p-5 rounded-xl shadow-lg hover-lift">
            <div className="mb-3 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/4d446271-aa78-473e-be1e-ae8d64314e46.png" 
                alt="Maria Louis" 
                className="w-full h-auto rounded-lg transition-transform duration-700 hover:scale-105" 
              />
            </div>
            
            <div className="bg-salon-gold/10 py-1 px-4 rounded-full text-center text-sm text-salon-gold font-medium mb-3 w-fit mx-auto">
              Grundare
            </div>
            
            <h3 className="text-xl font-serif font-medium text-center mb-3">Möt Maria</h3>
            
            <p className="text-salon-dark/80 text-center font-lora mb-5 leading-relaxed">
              Maria Louis grundade salongen 2010 och har sedan dess varit en av de ledande frisörerna i Stockholm. Med erfarenhet från internationella tävlingar och prestigefulla event erbjuder hon det bästa inom frisörkonsten.
            </p>
            
            <div className="flex justify-center space-x-3">
              <a 
                href="https://www.instagram.com/salongmarialouiis/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-salon-gold/10 rounded-full text-salon-gold hover:bg-salon-gold hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/SalongMariaLouis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-salon-gold/10 rounded-full text-salon-gold hover:bg-salon-gold hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Valentina */}
          <div ref={el => elementsRef.current[4] = el} className="animated-element bg-white p-5 rounded-xl shadow-lg hover-lift">
            <div className="mb-3 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/5573a92a-5f13-4c18-9be6-e18b749cd68e.png" 
                alt="Valentina" 
                className="w-full h-auto rounded-lg transition-transform duration-700 hover:scale-105" 
              />
            </div>
            
            <div className="bg-salon-gold/10 py-1 px-4 rounded-full text-center text-sm text-salon-gold font-medium mb-3 w-fit mx-auto">
              Frisör
            </div>
            
            <h3 className="text-xl font-serif font-medium text-center mb-3">Möt Valentina</h3>
            
            <p className="text-salon-dark/80 text-center font-lora mb-5 leading-relaxed">
              Valentina är en skicklig stylist specialiserad på färgtekniker och moderna klippningar. Med sitt öga för detaljer och förmåga att förstå kundens önskemål, skapar hon personliga stilar som förhöjer naturlig skönhet.
            </p>
            
            <div className="flex justify-center space-x-3">
              <a 
                href="https://www.instagram.com/salongmarialouiis/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-salon-gold/10 rounded-full text-salon-gold hover:bg-salon-gold hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/SalongMariaLouis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-salon-gold/10 rounded-full text-salon-gold hover:bg-salon-gold hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Gabriel - New staff member */}
          <div ref={el => elementsRef.current[5] = el} className="animated-element bg-white p-5 rounded-xl shadow-lg hover-lift">
            <div className="mb-3 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/aabc24c7-aa07-4015-97c5-ec1040571ca0.png" 
                alt="Gabriel" 
                className="w-full h-auto rounded-lg transition-transform duration-700 hover:scale-105" 
              />
            </div>
            
            <div className="bg-salon-gold/10 py-1 px-4 rounded-full text-center text-sm text-salon-gold font-medium mb-3 w-fit mx-auto">
              Frisör
            </div>
            
            <h3 className="text-xl font-serif font-medium text-center mb-3">Möt Gabriel</h3>
            
            <p className="text-salon-dark/80 text-center font-lora mb-5 leading-relaxed">
              Gabriel är en mycket professionell och erfaren frisör med över 20 års erfarenhet i branschen. Med sin stora passion för kreativitet och konstverk sprider han kärlek till alla sina kunder.
              <br /><br />
              Gabriel välkomnar dig varmt och lyssnar gärna på dina önskemål. Han tar emot både stora och små, damer och herrar, och utför alla typer av färgbehandlingar.
            </p>
            
            <div className="flex justify-center space-x-3">
              <a 
                href="https://www.instagram.com/salongmarialouiis/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-salon-gold/10 rounded-full text-salon-gold hover:bg-salon-gold hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/SalongMariaLouis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-salon-gold/10 rounded-full text-salon-gold hover:bg-salon-gold hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
