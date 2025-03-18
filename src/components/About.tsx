
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
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
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div 
              ref={el => elementsRef.current[0] = el} 
              className="animated-element relative z-10 rounded-sm overflow-hidden shadow-lg"
            >
              <img 
                src="https://source.unsplash.com/random/800x1000/?hairstylist,salon" 
                alt="Maria Louis salongsägare" 
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
            <div className="absolute top-8 -left-8 w-full h-full border-2 border-salon-gold rounded-sm -z-10"></div>
          </div>
          
          <div>
            <div 
              ref={el => elementsRef.current[1] = el} 
              className="animated-element mb-4"
            >
              <span className="inline-block px-4 py-1.5 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-sm">
                Om Oss
              </span>
            </div>
            
            <h2 
              ref={el => elementsRef.current[2] = el} 
              className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6"
            >
              Välkommen till <span className="text-salon-gold italic">Maria Louis</span> Hårsalong
            </h2>
            
            <p 
              ref={el => elementsRef.current[3] = el} 
              className="animated-element text-salon-dark/80 mb-6"
            >
              Grundad 2010 har Maria Louis Hårsalong etablerat sig som en förstklassig destination för de som söker exceptionella hårtjänster. Vår salong kombinerar konstnärlig vision med teknisk precision för att skapa looks som förhöjer din naturliga skönhet.
            </p>
            
            <p 
              ref={el => elementsRef.current[4] = el} 
              className="animated-element text-salon-dark/80 mb-8"
            >
              På Maria Louis tror vi att vackert hår är friskt hår. Vårt team av expertstylister håller sig i framkant av branschens trender och tekniker, vilket säkerställer att du får service av högsta kvalitet vid varje besök.
            </p>
            
            <div 
              ref={el => elementsRef.current[5] = el} 
              className="animated-element grid grid-cols-2 gap-6"
            >
              <div className="salon-card p-6">
                <h3 className="text-xl font-serif mb-2">Vår Mission</h3>
                <p className="text-salon-dark/80 text-sm">
                  Att tillhandahålla exceptionella hårtjänster som förhöjer våra kunders naturliga skönhet och ökar deras självförtroende.
                </p>
              </div>
              
              <div className="salon-card p-6">
                <h3 className="text-xl font-serif mb-2">Våra Värderingar</h3>
                <p className="text-salon-dark/80 text-sm">
                  Excellens, kreativitet, kontinuerlig utbildning och personligt omhändertagande för varje kund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
