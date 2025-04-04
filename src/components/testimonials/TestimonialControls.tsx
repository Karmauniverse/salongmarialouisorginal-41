
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialControlsProps {
  activeTestimonial: number;
  testimonialCount: number;
  isTransitioning: boolean;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const TestimonialControls: React.FC<TestimonialControlsProps> = ({
  activeTestimonial,
  testimonialCount,
  isTransitioning,
  onPrev,
  onNext,
  onDotClick,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div className="flex justify-center mt-8 space-x-4">
      <button 
        onClick={onPrev}
        className="p-3 rounded-full border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white transition-colors shadow-md hover:shadow-lg transform hover:scale-105 duration-300"
        aria-label="Föregående omdöme"
        disabled={isTransitioning}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <ChevronLeft size={20} />
      </button>
      
      <div className="flex space-x-3 items-center">
        {[...Array(testimonialCount)].map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={cn(
              "transition-all duration-300 rounded-full",
              activeTestimonial === index 
                ? "bg-salon-gold w-6 h-2" 
                : "bg-salon-gold/30 w-2 h-2 hover:bg-salon-gold/60"
            )}
            aria-label={`Gå till omdöme ${index + 1}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        ))}
      </div>
      
      <button 
        onClick={onNext}
        className="p-3 rounded-full border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white transition-colors shadow-md hover:shadow-lg transform hover:scale-105 duration-300"
        aria-label="Nästa omdöme"
        disabled={isTransitioning}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default TestimonialControls;
