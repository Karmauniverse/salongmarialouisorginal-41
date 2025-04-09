
import React, { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

const ClosingMessage: React.FC = () => {
  const messageRef = useRef<HTMLDivElement>(null);

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

    if (messageRef.current) {
      observer.observe(messageRef.current);
    }

    return () => {
      if (messageRef.current) {
        observer.unobserve(messageRef.current);
      }
    };
  }, []);

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-salon-cream/20 to-salon-beige/10">
      <div className="container mx-auto px-4">
        <div 
          ref={messageRef}
          className="text-center opacity-0 transition-all duration-700 flex flex-col items-center"
        >
          <div className="relative mb-3">
            <div className="absolute -inset-1 bg-gradient-to-r from-salon-gold/30 to-salon-brown/20 rounded-full blur-md"></div>
            <Heart 
              size={28} 
              className="relative text-salon-gold transition-all duration-500 hover:scale-110" 
              fill="currentColor" 
              fillOpacity={0.2}
              strokeWidth={1.5}
            />
          </div>
          
          <p className="font-serif text-salon-dark text-lg md:text-xl italic flex items-center gap-2 justify-center relative">
            <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-salon-gold/30">
              Vi ser fram emot att träffa dig
            </span>
          </p>
          
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-salon-gold/40 to-transparent mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ClosingMessage;
