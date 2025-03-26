
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Facebook, Star, ArrowRight } from 'lucide-react';

interface ReviewProps {
  name: string;
  text: string;
  rating: number;
}

const ReviewCarousel: React.FC = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  
  const reviews: ReviewProps[] = [
    {
      name: "Kevin",
      text: "A big thanks goes to the best hair stylist in the world, Maria Louise, for fixing my hair before the Swedish Idol Final. Thank you!",
      rating: 5
    },
    {
      name: "Magdalena",
      text: "Tack för en otrolig fin uppsättning på mig och mina tärnor. Vi är så glada att just ni ordnade våra bröllopsfrisyrer!",
      rating: 5
    },
    {
      name: "Jasmina",
      text: "Maria är jätteduktig på sitt jobb och gör allting på bästa sätt.",
      rating: 5
    },
    {
      name: "Nesrin",
      text: "Toppenbra frisörer som lyssnar på ens önskemål och vägleder en om man är osäker. Duktiga på att klippa och färga!",
      rating: 5
    },
    {
      name: "Thomas",
      text: "Friendly, great hairstylists.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeReview]);

  const handlePrev = () => {
    if (transitioning) return;
    
    setDirection('left');
    setTransitioning(true);
    
    setTimeout(() => {
      setActiveReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
      
      setTimeout(() => {
        setDirection(null);
        setTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleNext = () => {
    if (transitioning) return;
    
    setDirection('right');
    setTransitioning(true);
    
    setTimeout(() => {
      setActiveReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      
      setTimeout(() => {
        setDirection(null);
        setTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleDotClick = (index: number) => {
    if (transitioning || index === activeReview) return;
    
    setDirection(index > activeReview ? 'right' : 'left');
    setTransitioning(true);
    
    setTimeout(() => {
      setActiveReview(index);
      
      setTimeout(() => {
        setDirection(null);
        setTransitioning(false);
      }, 50);
    }, 300);
  };

  return (
    <div className="relative max-w-3xl mx-auto py-8">
      <div className="relative overflow-hidden bg-white rounded-xl shadow-xl p-8">
        <div
          className={cn(
            "transition-all duration-300",
            direction === 'left' && "translate-x-full opacity-0",
            direction === 'right' && "-translate-x-full opacity-0",
            !direction && "translate-x-0 opacity-100"
          )}
        >
          <div className="flex items-start mb-4">
            <div className="p-2 bg-salon-gold/10 rounded-full mr-3">
              <Facebook className="text-salon-gold w-5 h-5" />
            </div>
            <h3 className="font-medium text-lg text-salon-dark">{reviews[activeReview].name}</h3>
          </div>
          
          <div className="flex mb-3">
            {Array.from({ length: reviews[activeReview].rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          
          <p className="text-salon-dark/80 leading-relaxed text-lg mb-4">"{reviews[activeReview].text}"</p>
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-4">
        <button 
          onClick={handlePrev}
          className="p-2 rounded-full border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex space-x-2 items-center">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "transition-all duration-300 rounded-full",
                activeReview === index 
                  ? "bg-salon-gold w-4 h-4" 
                  : "bg-salon-gold/30 w-3 h-3 hover:bg-salon-gold/60"
              )}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={handleNext}
          className="p-2 rounded-full border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="text-center mt-6">
        <a 
          href="/reviews" 
          className="inline-flex items-center text-salon-gold hover:text-salon-brown transition-colors"
        >
          Se alla omdömen
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ReviewCarousel;
