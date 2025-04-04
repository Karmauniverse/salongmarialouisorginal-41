
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
        <div className="bg-salon-beige/30 rounded-full w-fit mx-auto mb-4 py-0 px-[8px]">
          <p className="font-medium font-lora text-center text-salon-gold px-[24px] py-[8px] text-sm my-0">Behandlingar</p>
        </div>
        
        <div ref={el => elementsRef.current[0] = el} className="animated-element max-w-4xl mx-auto text-center mb-4 py-[25px] my-0">
          <h3 className="md:text-4xl font-serif font-medium mb-5 text-salon-dark text-2xl my-0">
            KERATINBEHANDLING
          </h3>
          
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-md py-[17px] px-[41px]">
            {/* Image of woman with dark hair */}
            <div className="mb-8">
              <img src="/lovable-uploads/09ee0d34-8776-4e34-9099-7c28d0ca9359.png" alt="Keratinbehandling" className="rounded-lg w-full max-w-2xl mx-auto shadow-sm" />
            </div>
            
            <p className="text-lg font-lora text-salon-dark/90 mb-8 leading-relaxed max-w-3xl mx-auto my-0">
              Keratin är ett protein som finns naturligt i håret, men faktorer som sol, saltvatten och produkter av dålig kvalité bryter ner det.
              <br /><br />
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
            
            {/* Keratin Icons with labels - updated */}
            <div className="grid grid-cols-4 gap-4 mb-8 mx-auto max-w-2xl">
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/b4739355-ecb8-4cb8-bb92-e0e82ffeb79a.png" 
                  alt="Glans" 
                  className={`${isMobile ? 'w-10 h-10' : 'w-14 h-14'} object-contain mb-2`} 
                />
                <span className="text-xs font-medium text-salon-dark/80">Glans</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/2e4131c5-f210-498b-88a4-e8d9de0c08f6.png" 
                  alt="Återfukt" 
                  className={`${isMobile ? 'w-10 h-10' : 'w-14 h-14'} object-contain mb-2`} 
                />
                <span className="text-xs font-medium text-salon-dark/80">Återfukt</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/7030afd0-4c33-4ea1-b999-2a6b2690e503.png" 
                  alt="Vegan" 
                  className={`${isMobile ? 'w-10 h-10' : 'w-14 h-14'} object-contain mb-2`} 
                />
                <span className="text-xs font-medium text-salon-dark/80">Vegan</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/129c046f-e57e-493b-a26f-688bb3ad1e3a.png" 
                  alt="Cruelty-free" 
                  className={`${isMobile ? 'w-10 h-10' : 'w-14 h-14'} object-contain mb-2`} 
                />
                <span className="text-xs font-medium text-salon-dark/80">Cruelty-Free</span>
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
    </section>
  );
};

export default KeratinInfo;
