
import React, { useEffect, useRef } from 'react';
import { Calendar, Heart, Phone } from 'lucide-react';
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

  // Choose the hanging roses image for desktop, vertical roses for mobile
  const flowerImage = isMobile 
    ? "/lovable-uploads/1efcadfc-9bef-48e3-b161-b1401bfbe36d.png"
    : "/lovable-uploads/72954ffc-deff-48c9-a460-1a6db97045de.png";

  return (
    <section className="py-16 bg-gradient-to-b from-white to-salon-cream/20 relative overflow-hidden">
      <div className="section-container">
        <div ref={el => elementsRef.current[0] = el} className="animated-element max-w-4xl mx-auto text-center mb-4 relative">
          {/* Decorative flower image */}
          {!isMobile && (
            <div className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/6 opacity-80 pointer-events-none w-64 z-0">
              <img src={flowerImage} alt="" className="w-full h-auto" />
            </div>
          )}
          
          <h3 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-salon-dark relative z-10">
            INFÖR DIN STORA DAG
          </h3>
          
          <div className="bg-salon-beige/30 p-8 rounded-xl shadow-md border border-salon-gold/10 relative">
            {isMobile && (
              <div className="absolute top-0 right-0 transform -translate-y-1/3 opacity-70 pointer-events-none w-32 z-0">
                <img src={flowerImage} alt="" className="w-full h-auto" />
              </div>
            )}

            <div className="relative z-10">
              <p className="text-lg text-salon-dark/90 mb-6 leading-relaxed">
                Ska du på bröllop, ta studenten, eller har du ett annat viktigt tillfälle på gång?
              </p>
              
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-salon-gold/20 mb-6">
                <p className="text-salon-dark/80 leading-relaxed">
                  Vi på Maria Louis hjälper dig gärna att göra dig fin inför din stora dag – med hårstyling, färg & Champagne eller annat som passar dina önskemål.
                  <br/><br/>
                  Vi lyssnar gärna på dina behov och ser vad vi kan erbjuda utifrån vår tillgänglighet.
                </p>
              </div>
              
              <p className="text-salon-dark/80 italic mb-6">
                Hör gärna av dig om du har frågor eller funderingar.
              </p>
              
              <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all shadow-md hover:shadow-lg"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Skicka förfrågan
                </a>
                
                <div className="flex items-center text-salon-dark mt-2 sm:mt-0">
                  <Phone className="mr-2 h-5 w-5 text-salon-gold" />
                  <a href="tel:08-549 040 50" className="hover:text-salon-gold transition-colors">
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
