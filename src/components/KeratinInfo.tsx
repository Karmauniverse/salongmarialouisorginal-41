
import React, { useEffect, useRef } from 'react';
import { SparkleIcon } from 'lucide-react';

const KeratinInfo: React.FC = () => {
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
    <section className="py-16 bg-gradient-to-b from-white to-salon-cream/20">
      <div className="section-container">
        <div ref={el => elementsRef.current[0] = el} className="animated-element max-w-4xl mx-auto text-center mb-4">
          <h3 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-salon-dark">
            KERATINBEHANDLING
          </h3>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-lg text-salon-dark/90 mb-6 leading-relaxed">
              Keratin är ett protein som finns naturligt i håret, men faktorer som sol, saltvatten och produkter av dålig kvalité bryter ner det.<br/><br/>
              En keratinbehandling återställer hårets styrka och glans genom att kapsla in varje hårstrå och ge det en chans att läka och vila.
            </p>
            
            <div className="bg-salon-cream/40 p-6 rounded-lg border border-salon-gold/20 mb-6">
              <div className="flex items-center justify-center mb-3">
                <SparkleIcon size={24} className="text-salon-gold mr-2" />
                <h4 className="text-xl font-medium text-salon-dark">Resultatet</h4>
              </div>
              <p className="text-salon-dark/80">
                Friskare, återfuktat, återuppbyggt hår med glans och mjukhet. Eliminerar frizzighet och ger ett rakare, mer lättskött resultat.
              </p>
            </div>
            
            <p className="text-salon-dark/80 italic">
              Kontakta oss gärna för mer information eller för att boka en konsultation.
            </p>
            
            <div className="mt-6">
              <a 
                href="https://bokning.voady.se/marialouis/marialouisebarbershop/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all shadow-md hover:shadow-lg transform hover:scale-105 duration-300"
              >
                Boka Konsultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeratinInfo;
