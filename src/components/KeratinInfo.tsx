
import React, { useEffect, useRef } from 'react';
import { SparkleIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const KeratinInfo: React.FC = () => {
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
    <section className="py-16 bg-gradient-to-b from-white to-salon-cream/20">
      <div className="section-container">
        <div ref={el => elementsRef.current[0] = el} className="animated-element max-w-4xl mx-auto text-center mb-4">
          <h3 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-salon-dark">
            KERATINBEHANDLING
          </h3>
          
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-md">
            <p className="text-lg font-lora text-salon-dark/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Keratin är ett protein som finns naturligt i håret, men faktorer som sol, saltvatten och produkter av dålig kvalité bryter ner det.<br/><br/>
              En keratinbehandling återställer hårets styrka och glans genom att kapsla in varje hårstrå och ge det en chans att läka och vila.
            </p>
            
            <div className="bg-salon-cream/40 p-6 md:p-8 rounded-lg border border-salon-gold/20 mb-8">
              <div className="flex items-center justify-center mb-4">
                <SparkleIcon size={28} className="text-salon-gold mr-3" />
                <h4 className="text-xl font-medium font-lora text-salon-dark">Resultatet</h4>
              </div>
              <p className="text-salon-dark/80 font-lora">
                Friskare, återfuktat, återuppbyggt hår med glans och mjukhet. Eliminerar frizzighet och ger ett rakare, mer lättskött resultat.
              </p>
            </div>
            
            {/* Keratin Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-salon-cream/70 flex items-center justify-center mb-2 border border-salon-gold/20">
                  <img 
                    src="/lovable-uploads/d63ca13d-69ca-453b-be7f-3e193e8b60b1.png" 
                    alt="Återfuktande" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-salon-cream/70 flex items-center justify-center mb-2 border border-salon-gold/20">
                  <img 
                    src="/lovable-uploads/71ec8801-db45-4bf9-b456-accfdce44c19.png" 
                    alt="Glansigt Hår" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-salon-cream/70 flex items-center justify-center mb-2 border border-salon-gold/20">
                  <img 
                    src="/lovable-uploads/2bb75429-e85f-4b25-9926-068ec1a61002.png" 
                    alt="100% Vegan" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-salon-cream/70 flex items-center justify-center mb-2 border border-salon-gold/20">
                  <img 
                    src="/lovable-uploads/d1417059-fbca-40c2-8e43-27848b63ee32.png" 
                    alt="Cruelty-Free" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-salon-dark/80 italic font-lora mb-6">
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
