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
          <p className="font-medium font-lora text-center text-salon-gold px-[24px] text-sm my-0 py-0">Behandlingar</p>
        </div>
        
        <div ref={el => elementsRef.current[0] = el} className="animated-element max-w-4xl mx-auto text-center mb-4 py-[25px] my-0">
          <h3 className="md:text-4xl font-serif font-medium mb-4 text-salon-dark text-2xl my-0">
            KERATINBEHANDLING
          </h3>
          
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-md px-[41px] py-[65px]">
            {/* Image of woman with dark hair */}
            <div className="mb-8">
              <img src="/lovable-uploads/09ee0d34-8776-4e34-9099-7c28d0ca9359.png" alt="Keratinbehandling" className="rounded-lg w-full max-w-2xl mx-auto shadow-sm object-fill" />
            </div>
            
            <p className="text-lg font-lora text-salon-dark/90 mb-8 leading-relaxed max-w-3xl mx-auto my-0">
              Keratin är ett protein som finns naturligt i håret, men faktorer som sol, saltvatten och produkter av dålig kvalitet bryter 
              ner det.<br /><br />
              En keratinbehandling återställer hårets styrka och glans genom att kapsla in varje hårstrå och ge det en chans att läka och vila. 
              Våra behandlingar är 100% veganska och cruelty-free – skonsamma mot både dig och miljön.
            </p>
            
            <div className="bg-salon-cream/40 p-6 md:p-8 rounded-lg border border-salon-gold/20 mb-8">
              <div className="flex items-center justify-center mb-4">
                <SparkleIcon size={28} className="text-salon-gold mr-3" />
                <h4 className="text-xl font-medium font-lora text-salon-dark">Resultatet</h4>
              </div>
              <p className="text-salon-dark/80 font-lora">
                Friskare, återfuktat, återuppbyggt hår med glans och mjukhet. Eliminerar frizzighet och ger ett rakare, 
                mer lättskött resultat.
              </p>
            </div>
            
            {/* New Keratin Icons with labels */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/a664e16e-6fed-443c-ab96-e509e8e64f7c.png" alt="Glans" className={`${isMobile ? 'w-14 h-14' : 'w-20 h-20'} object-contain`} />
                <span className="text-xs font-medium text-salon-dark/70 mt-2">Glans</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/6d229b61-d343-44be-8f29-98f8bd23d332.png" alt="Återfukt" className={`${isMobile ? 'w-14 h-14' : 'w-20 h-20'} object-contain`} />
                <span className="text-xs font-medium text-salon-dark/70 mt-2 py-0 my-[9px]">Återfukt</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/676e9e55-34a5-4db4-a58d-553fd76d764b.png" alt="Vegan" className={`${isMobile ? 'w-14 h-14' : 'w-20 h-20'} object-contain`} />
                <span className="text-xs font-medium text-salon-dark/70 mt-2">Vegan</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/55b2088e-6c16-47ee-8d2d-e5e7554f14c7.png" alt="Cruelty-Free" className={`${isMobile ? 'w-14 h-14' : 'w-20 h-20'} object-contain`} />
                <span className="text-xs font-medium text-salon-dark/70 mt-2">Cruelty-Free</span>
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