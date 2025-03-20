
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
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

  useEffect(() => {
    // Auto-rotate testimonials
    const intervalId = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(intervalId);
  }, [activeTestimonial]);

  const testimonials = [
    {
      quote: "Maria Louis är en sann konstnär. Hon förvandlade mitt hår från tråkigt och skadat till vibrerande och friskt. Hela upplevelsen på salongen var lyxig och avkopplande. Jag kommer inte att lita på någon annan med mitt hår!",
      author: "Sophia Martinez",
      role: "Stammis",
      image: "https://source.unsplash.com/random/100x100/?woman,portrait,1"
    },
    {
      quote: "Jag har kommit till Maria Louis i över tre år nu, och jag är konsekvent imponerad av kvaliteten på servicen. Stylisterna är kunniga och tar sig tid att förstå exakt vad jag vill ha. Rekommenderas starkt!",
      author: "James Wilson",
      role: "Lojal Kund",
      image: "https://source.unsplash.com/random/100x100/?man,portrait,1"
    },
    {
      quote: "Atmosfären hos Maria Louis är så välkomnande, och resultaten talar för sig själva. Min färg är alltid perfekt, och mitt hår har aldrig varit friskare. Salongen erbjuder verkligen en premiumupplevelse från början till slut.",
      author: "Emma Thompson",
      role: "Förstagångskund",
      image: "https://source.unsplash.com/random/100x100/?woman,portrait,2"
    }
  ];

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === activeTestimonial) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-salon-cream/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            ref={el => elementsRef.current[0] = el} 
            className="animated-element mb-4"
          >
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">
              Omdömen
            </span>
          </div>
          
          <h2 
            ref={el => elementsRef.current[1] = el} 
            className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6"
          >
            Vad Våra Kunder Säger
          </h2>
          
          <p 
            ref={el => elementsRef.current[2] = el} 
            className="animated-element text-salon-dark/80"
          >
            Vi är stolta över att skapa exceptionella upplevelser för våra kunder.
          </p>
        </div>
        
        <div 
          ref={el => elementsRef.current[3] = el} 
          className="animated-element relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden bg-white rounded-lg shadow-xl p-8 md:p-12">
            <Quote size={120} className="text-salon-gold/5 absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4" />
            <Quote size={120} className="text-salon-gold/5 absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 rotate-180" />
            
            <div className="relative z-10">
              <div className={cn(
                "transition-all duration-500 ease-in-out",
                isTransitioning ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
              )}>
                <blockquote className="text-lg md:text-xl mb-8 text-salon-dark/90 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-salon-gold/30">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif font-medium text-salon-dark text-lg">
                      {testimonials[activeTestimonial].author}
                    </p>
                    <p className="text-sm text-salon-dark/70">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white transition-colors shadow-md hover:shadow-lg transform hover:scale-105 duration-300"
              aria-label="Föregående omdöme"
              disabled={isTransitioning}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-3 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "transition-all duration-300 rounded-full",
                    activeTestimonial === index 
                      ? "bg-salon-gold w-6 h-2" 
                      : "bg-salon-gold/30 w-2 h-2 hover:bg-salon-gold/60"
                  )}
                  aria-label={`Gå till omdöme ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white transition-colors shadow-md hover:shadow-lg transform hover:scale-105 duration-300"
              aria-label="Nästa omdöme"
              disabled={isTransitioning}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
