import React, { useEffect, useRef } from 'react';
import ServiceGrid from './ServiceGrid';
import { serviceCategories } from '../data/serviceData';
import { ArrowRight } from 'lucide-react';
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
  return <section id="services" className="py-16 bg-gradient-to-b from-white to-salon-cream/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-4">
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">
              Våra Behandlingar
            </span>
          </div>
          
          <h2 ref={el => elementsRef.current[1] = el} className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6">
            Din stund hos oss
          </h2>
          
          <p ref={el => elementsRef.current[2] = el} className="animated-element text-salon-dark/80">Alla våra klippningar inkluderar tvätt, fön & styling. Vi ser till att du får ett färdigt 
resultat – redo för vardag, fest eller vila.</p>
        </div>
        
        <div ref={el => elementsRef.current[3] = el} className="animated-element">
          <ServiceGrid serviceCategories={serviceCategories} />
        </div>
        
        <div ref={el => elementsRef.current[4] = el} className="animated-element text-center mt-10">
          <a href="https://bokning.voady.se/marialouis/marialouisebarbershop/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-3 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all shadow-md hover:shadow-lg transform hover:scale-105 duration-300">
            Boka Din Tid
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>;
};
export default Services;