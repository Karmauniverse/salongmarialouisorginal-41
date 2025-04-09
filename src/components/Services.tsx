import React, { useEffect, useRef } from 'react';
import { Calendar, Scissors } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ServiceGrid from './ServiceGrid';
import { serviceCategories } from '@/data/serviceData';
const Services: React.FC = () => {
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
  return <section id="services" className="py-20 bg-salon-cream">
      <div className="section-container">
        <div className="text-center mb-12">
          <div ref={el => elementsRef.current[0] = el} className="animated-element opacity-0">
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">Behandlingar</span>
          </div>
          
          <h2 ref={el => elementsRef.current[1] = el} className="animated-element text-3xl md:text-4xl font-serif font-medium mt-4 mb-6 opacity-0">Vi tar hand om dig</h2>
          
          <p ref={el => elementsRef.current[2] = el} className="animated-element text-salon-dark/90 max-w-2xl mx-auto opacity-0">
            Alla våra klippningar inkluderar tvätt, fön & styling. Vi ser till att du får ett färdigt resultat – redo för vardag, fest eller vila.
          </p>
        </div>
        
        <ServiceGrid serviceCategories={serviceCategories} elementsRef={elementsRef} />
        
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-6 transition-all">
          <a href="https://bokning.voady.se/marialouis/marialouisebarbershop/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 py-3 px-8 bg-salon-gold text-white hover:bg-salon-gold/90 transition-all rounded-full shadow-md hover:shadow-lg transform hover:translate-y-[-1px]">
            <Calendar size={18} />
            <span>Boka nu</span>
          </a>
        </div>
      </div>
    </section>;
};
export default Services;