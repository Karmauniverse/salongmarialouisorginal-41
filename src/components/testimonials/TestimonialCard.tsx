
import React from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  fbLink: string;
  isTransitioning: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  fbLink,
  isTransitioning
}) => {
  return (
    <div className={cn(
      "transition-all duration-500 ease-in-out",
      isTransitioning ? "opacity-0 transform scale-95 translate-x-10" : "opacity-100 transform scale-100 translate-x-0"
    )}>
      <blockquote className="text-lg md:text-xl mb-8 text-salon-dark/90 leading-relaxed font-lora">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <a 
          href={fbLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-salon-gold/30 bg-salon-gold/10 flex items-center justify-center hover:bg-salon-gold/20 transition-colors"
        >
          <Facebook className="w-8 h-8 text-salon-gold" />
        </a>
        <div>
          <p className="font-serif font-medium text-salon-dark text-lg">
            {author}
          </p>
          <p className="text-sm text-salon-dark/70 mb-2 font-lora">
            {role}
          </p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
