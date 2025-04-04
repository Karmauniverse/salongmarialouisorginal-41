
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Star } from 'lucide-react';

interface ReviewProps {
  name: string;
  text: string;
  rating: number;
}

const ReviewCarousel: React.FC = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true); // Enabled auto-rotate
  
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
    }
  ];

  // Auto-rotate - now enabled with longer duration
  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(() => {
        if (!transitioning) {
          handleNext();
        }
      }, 7000); // Slower rotation - 7 seconds
      
      return () => clearInterval(interval);
    }
  }, [activeReview, transitioning, autoRotate]);

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
    }, 600); // Longer transition duration
  };

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
    }, 600); // Longer transition duration
  };

  return (
    <div className="relative max-w-3xl mx-auto py-8">
      <div className="relative overflow-hidden bg-white rounded-xl shadow-xl p-8 mb-8">
        <div
          className={cn(
            "transition-all duration-600 ease-in-out",
            direction === 'left' && "translate-x-full opacity-0",
            direction === 'right' && "-translate-x-full opacity-0",
            !direction && "translate-x-0 opacity-100"
          )}
        >
          <div className="flex items-start mb-4">
            <a 
              href="https://www.facebook.com/SalongMariaLouis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-salon-gold/10 rounded-full mr-3 hover:bg-salon-gold/20 transition-colors"
            >
              <Facebook className="text-salon-gold w-5 h-5" />
            </a>
            <h3 className="font-medium text-lg text-salon-dark font-lora">{reviews[activeReview].name}</h3>
          </div>
          
          <div className="flex mb-3">
            {Array.from({ length: reviews[activeReview].rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
            ))}
          </div>
          
          <p className="text-salon-dark/80 leading-relaxed text-lg mb-4 font-lora">"{reviews[activeReview].text}"</p>
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2 items-center">
        <button 
          onClick={handlePrev}
          className="p-2 rounded-full bg-salon-gold/20 text-salon-gold hover:bg-salon-gold hover:text-white transition-colors duration-300"
          aria-label="Föregående omdöme"
          disabled={transitioning}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        
        <div className="flex space-x-3 items-center">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!transitioning && activeReview !== index) {
                  setDirection(index > activeReview ? 'right' : 'left');
                  setTransitioning(true);
                  
                  setTimeout(() => {
                    setActiveReview(index);
                    
                    setTimeout(() => {
                      setDirection(null);
                      setTransitioning(false);
                    }, 50);
                  }, 600);
                }
              }}
              className={cn(
                "transition-all duration-300 rounded-full",
                activeReview === index 
                  ? "bg-salon-gold w-6 h-2" 
                  : "bg-salon-gold/30 w-2 h-2 hover:bg-salon-gold/60"
              )}
              aria-label={`Gå till omdöme ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={handleNext}
          className="p-2 rounded-full bg-salon-gold/20 text-salon-gold hover:bg-salon-gold hover:text-white transition-colors duration-300"
          aria-label="Nästa omdöme"
          disabled={transitioning}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
