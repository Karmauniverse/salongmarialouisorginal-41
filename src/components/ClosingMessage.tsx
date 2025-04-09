
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
          <p className="font-serif text-salon-dark/70 text-lg md:text-xl italic flex items-center gap-2 justify-center">
            Vi ser fram emot att träffa dig
            <Heart 
              size={18} 
              className="text-salon-gold ml-1 transition-all duration-500 hover:scale-110" 
              fill="currentColor" 
              fillOpacity={0.2}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClosingMessage;
