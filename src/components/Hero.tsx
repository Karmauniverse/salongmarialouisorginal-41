
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
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
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0">
        <img src="/lovable-uploads/8762e4d0-f740-4982-97a2-dd66977bd945.png" alt="Vackert svart hår" className="w-full h-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-4">
            <span className="inline-block px-4 py-1.5 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-sm mb-2">Hårsalong</span>
          </div>
          
          <h1 ref={el => elementsRef.current[1] = el} className="animated-element text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight text-white">
            Skönhet som får dig <br />
            <span className="text-salon-gold italic text-5xl">att känna dig speciell</span>
          </h1>
          
          <p ref={el => elementsRef.current[2] = el} className="animated-element text-lg md:text-xl text-white/90 mb-6 max-w-xl mx-auto">
            Maria Louis
          </p>
          
          <p ref={el => elementsRef.current[3] = el} className="animated-element text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto">
            Sedan 2010 har vi förenat skönhet och omtanke – en prisbelönt salong med stort hjärta
          </p>
          
          <div ref={el => elementsRef.current[4] = el} className="animated-element flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="px-8 py-3 bg-salon-gold text-white font-medium rounded-sm hover:bg-opacity-90 transition-all text-center">
              Våra Tjänster
            </a>
            <a href="#contact" className="px-8 py-3 border border-salon-gold text-white font-medium rounded-sm hover:bg-salon-gold/5 transition-all text-center">
              Boka Tid
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-subtle-move">
        <a href="#about" className="flex flex-col items-center text-white opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-sm font-medium mb-2">Bläddra Ner</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
