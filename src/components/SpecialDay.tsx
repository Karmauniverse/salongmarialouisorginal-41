
import React, { useEffect, useRef } from 'react';
import { Phone, Heart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const SpecialDay: React.FC = () => {
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

  return (
    <section className="py-16 bg-gradient-to-b from-white to-salon-cream/20 relative overflow-hidden">
      <div className="section-container">
        <div ref={el => elementsRef.current[0] = el} className="animated-element max-w-4xl mx-auto text-center mb-4 relative">
          <h3 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-salon-dark relative z-10">
            FIRA MED STIL
          </h3>
          
          <div className="bg-salon-beige/30 p-8 md:p-10 rounded-xl shadow-md border border-salon-gold/10 relative">
            <div className="relative z-10">
              <p className="text-lg font-lora text-salon-dark/90 mb-6 leading-relaxed max-w-2xl mx-auto">
                Ska du på bröllop, ta studenten, eller har du ett annat viktigt tillfälle på gång?
              </p>
              
              {/* Icons Row - Placed above the white box */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/2bf4bdaa-ca27-42a6-9c8c-ed97f0058ff0.png" 
                    alt="Champagne" 
                    className="w-20 h-20 object-contain"
                  />
                  <span className="text-sm text-salon-dark/80 font-lora mt-2">Champagne</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/d8cfa377-a904-4e60-af98-7fa38559c6fd.png" 
                    alt="Styling" 
                    className="w-20 h-20 object-contain"
                  />
                  <span className="text-sm text-salon-dark/80 font-lora mt-2">Styling</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/b108dc2c-7eb6-4ed9-927d-e943d4a73315.png" 
                    alt="Bröllop" 
                    className="w-20 h-20 object-contain"
                  />
                  <span className="text-sm text-salon-dark/80 font-lora mt-2">Bröllop</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/66759130-777a-43be-8271-92b24f27e078.png"
                    alt="Student"
                    className="w-20 h-20 object-contain"
                  />
                  <span className="text-sm text-salon-dark/80 font-lora mt-2">Student</span>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-salon-gold/20 mb-6">
                <p className="text-salon-dark/80 leading-relaxed max-w-2xl mx-auto font-lora">
                  Vi på Maria Louis hjälper dig gärna att göra dig fin inför din stora dag – med hårstyling, färg & Champagne eller annat som passar dina önskemål.
                </p>
                <p className="text-salon-dark/80 leading-relaxed mt-4 max-w-2xl mx-auto font-lora">
                  Vi lyssnar gärna på dina behov och ser vad vi kan erbjuda utifrån vår tillgänglighet.
                </p>
              </div>
              
              <p className="text-salon-dark/80 italic mb-6 max-w-2xl mx-auto font-lora">
                Hör gärna av dig om du har frågor eller funderingar.
              </p>
              
              <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-6 md:px-6">
                <a 
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Skicka förfrågan
                </a>
                
                <div className="flex items-center text-salon-dark mt-2 sm:mt-0 w-full sm:w-auto justify-center">
                  <Phone className="mr-2 h-5 w-5 text-salon-gold" />
                  <a href="tel:08-549 040 50" className="hover:text-salon-gold transition-colors font-lora">
                    08-549 040 50
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDay;
