
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
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
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?luxury,salon')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto md:ml-0">
          <div 
            ref={el => elementsRef.current[0] = el} 
            className="animated-element mb-4"
          >
            <span className="inline-block px-4 py-1.5 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-sm mb-2">
              Exklusiv Hårsalong
            </span>
          </div>
          
          <h1 
            ref={el => elementsRef.current[1] = el} 
            className="animated-element text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight"
          >
            Skönhet som får dig <br />
            <span className="text-salon-gold italic">att känna dig speciell</span>
          </h1>
          
          <p 
            ref={el => elementsRef.current[2] = el} 
            className="animated-element text-lg md:text-xl text-salon-dark/80 mb-8 max-w-xl"
          >
            Upptäck en lyxig hårupplevelse hos Maria Louis, där exceptionell service möter konstnärlig expertis.
          </p>
          
          <div 
            ref={el => elementsRef.current[3] = el} 
            className="animated-element flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#services" 
              className="px-8 py-3 bg-salon-gold text-white font-medium rounded-sm hover:bg-opacity-90 transition-all text-center"
            >
              Våra Tjänster
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-salon-gold text-salon-dark font-medium rounded-sm hover:bg-salon-gold/5 transition-all text-center"
            >
              Boka Tid
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-subtle-move">
        <a href="#about" className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-sm font-medium mb-2">Bläddra Ner</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
