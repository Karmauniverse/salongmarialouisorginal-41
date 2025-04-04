
import React from 'react';
import { Quote } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import { TestimonialData } from './types';

interface TestimonialContentProps {
  activeTestimonial: number;
  testimonials: TestimonialData[];
  isTransitioning: boolean;
}

const TestimonialContent: React.FC<TestimonialContentProps> = ({
  activeTestimonial,
  testimonials,
  isTransitioning
}) => {
  return (
    <div className="p-6 md:p-10 relative">
      <Quote size={120} className="text-salon-gold/5 absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4" />
      <Quote size={120} className="text-salon-gold/5 absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 rotate-180" />
      
      <div className="relative z-10">
        <TestimonialCard
          quote={testimonials[activeTestimonial].quote}
          author={testimonials[activeTestimonial].author}
          role={testimonials[activeTestimonial].role}
          fbLink={testimonials[activeTestimonial].fbLink}
          isTransitioning={isTransitioning}
        />
      </div>
    </div>
  );
};

export default TestimonialContent;
