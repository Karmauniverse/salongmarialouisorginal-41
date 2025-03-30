
import React, { useEffect, useRef } from 'react';
import { Calendar, Heart } from 'lucide-react';

const SpecialDay: React.FC = () => {
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
    <section className="py-16 bg-white">
      <div className="section-container">
        <div ref={el => elementsRef.current[0] = el} className="animated-element max-w-4xl mx-auto text-center mb-4">
          <h3 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-salon-dark">
            INFÖR DIN STORA DAG
          </h3>
          
          <div className="bg-salon-cream/30 p-8 rounded-xl shadow-md border border-salon-gold/10">
            <p className="text-lg text-salon-dark/90 mb-6 leading-relaxed">
              Ska du på bröllop, ta studenten, eller har du ett annat viktigt tillfälle på gång?
            </p>
            
            <div className="bg-white p-6 rounded-lg border border-salon-gold/20 mb-6">
              <p className="text-salon-dark/80 leading-relaxed">
                Vi på Maria Louis hjälper dig gärna att göra dig fin inför din stora dag – med hårstyling, färg & Champagne eller annat som passar dina önskemål.
                <br/><br/>
                Vi lyssnar gärna på dina behov och ser vad vi kan erbjuda utifrån vår tillgänglighet.
              </p>
            </div>
            
            <p className="text-salon-dark/80 italic">
              Hör gärna av dig om du har frågor eller funderingar.
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://bokning.voady.se/marialouis/marialouisebarbershop/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all shadow-md hover:shadow-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Boka Tid
              </a>
              
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-salon-gold border border-salon-gold font-medium rounded-full hover:bg-salon-gold hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                Kontakta Oss
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDay;
