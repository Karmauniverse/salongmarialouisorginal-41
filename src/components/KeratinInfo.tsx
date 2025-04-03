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
  return <section className="py-16 bg-gradient-to-b from-white to-salon-cream/20">
      <div className="section-container">
        <div className="bg-salon-beige/30 rounded-full w-fit mx-auto mb-4 py-0 px-[8px]">
          <p className="font-medium font-lora text-center text-salon-gold px-[24px] py-[8px] text-sm">Behandlingar</p>
        </div>
        
        <div ref={el => elementsRef.current[0] = el} className="animated-element max-w-4xl mx-auto text-center mb-4 py-[25px]">
          <h3 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-salon-dark">
            KERATINBEHANDLING
          </h3>
          
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-md">
            <p className="text-lg font-lora text-salon-dark/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Keratin är ett protein som finns naturligt i håret, men faktorer som sol, saltvatten och produkter av dålig kvalité bryter ner det.<br /><br />
              En keratinbehandling återställer hårets styrka och glans genom att kapsla in varje hårstrå och ge det en chans att läka och vila. Våra behandlingar är 100% veganska och cruelty-free – skonsamma mot både dig och miljön.
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
                <img src="/lovable-uploads/4f030c05-4b0c-4707-be92-418290b5a609.png" alt="Återfuktande" className="w-16 h-16 object-contain" />
              </div>
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/71017648-7268-4dd7-806d-f04557b45081.png" alt="Glansigt Hår" className="w-16 h-16 object-contain" />
              </div>
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/4bb90aca-51ba-464b-b255-1dc4d11a4df1.png" alt="100% Vegan" className="w-16 h-16 object-contain" />
              </div>
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/e12c1cbf-6e18-442f-95a4-9ca53561bc18.png" alt="Cruelty-Free" className="w-16 h-16 object-contain" />
              </div>
            </div>
            
            <p className="text-salon-dark/80 italic font-lora mb-6 py-0">
              Kontakta oss gärna för mer information eller för att boka en konsultation.
            </p>
            
            <div className="mt-6">
              <a href="https://bokning.voady.se/marialouis/marialouisebarbershop/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all shadow-md hover:shadow-lg transform hover:scale-105 duration-300">
                Boka Konsultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default KeratinInfo;