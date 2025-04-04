
import React from 'react';

interface TestimonialHeaderProps {
  refCallback: (el: HTMLDivElement | null) => void;
}

const TestimonialHeader: React.FC<TestimonialHeaderProps> = ({ refCallback }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      <div 
        ref={refCallback} 
        className="animated-element mb-4"
      >
        <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">
          Omdömen
        </span>
      </div>
      
      <h2 
        className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6"
      >
        Vad Våra Kunder Säger
      </h2>
      
      <p 
        className="animated-element text-salon-dark/80 font-lora"
      >
        Vi är stolta över att skapa exceptionella upplevelser för våra kunder.
      </p>
    </div>
  );
};

export default TestimonialHeader;
