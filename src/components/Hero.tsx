import React, { useEffect, useRef } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const Hero = () => {
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
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/lovable-uploads/2caa78f5-f83a-423d-b043-03fcbcf01718.png" alt="Maria Louis Hårsalong" className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out" />
      </div>
      
      {/* Frosted glass effect overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/[0.63]"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-6">
            <span className="inline-block px-6 py-2 bg-salon-gold/20 text-salon-gold text-sm font-medium rounded-full border border-salon-gold/30 backdrop-blur-sm">Salong</span>
          </div>
          
          <h1 ref={el => elementsRef.current[1] = el} className="animated-element font-playfair text-5xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight text-white">
            <span className="font-playfair text-4xl block mb-1 text-white font-light tracking-wider md:text-5xl">
              Maria Louis
            </span>
          </h1>
          
          <p ref={el => elementsRef.current[2] = el} className="animated-element md:text-xl text-salon-beige mb-6 max-w-xl mx-auto font-lora px-0 py-0 text-center font-normal text-lg md:text-xl">Sedan 2010 har vi förenat skönhet 
och omtanke – en prisbelönt 
salong med hjärta</p>
          
          <div ref={el => elementsRef.current[4] = el} className="animated-element flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="px-8 py-3 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all text-center shadow-md hover:shadow-lg transform hover:scale-105 duration-300">
              Behandlingar
            </a>
            <a href="https://bokning.voady.se/marialouis/marialouisebarbershop/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-salon-gold text-white font-medium rounded-full hover:bg-salon-gold/30 transition-all text-center backdrop-blur-sm hover:border-white">
              Boka Tid
            </a>
          </div>
          
          {isMobile && <div className="mt-4 animated-element">
              <a href="tel:+46701234567" className="inline-flex items-center px-5 py-2 border border-salon-gold/60 text-white rounded-full backdrop-blur-sm hover:bg-salon-gold/20 transition-all">
                <Phone size={16} className="mr-2" />
                070-123 45 67
              </a>
            </div>}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#services" className="flex flex-col items-center text-white hover:text-salon-gold transition-colors">
          <span className="text-sm font-light mb-2 tracking-wide">Bläddra Ner</span>
          <div className="rounded-full p-1 border border-white/30 hover:border-salon-gold/60 transition-colors">
            <ChevronDown size={18} className="animate-bounce" />
          </div>
        </a>
      </div>
    </section>;
};
export default Hero;
