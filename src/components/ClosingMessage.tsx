
import React, { useEffect, useRef } from 'react';

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
          className="text-center opacity-0 transition-all duration-700"
        >
          <p className="font-serif text-salon-dark/70 text-lg md:text-xl italic">
            Vi ser fram emot att träffa dig.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClosingMessage;
