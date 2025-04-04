
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Facebook, Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

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
          
          // Start auto-rotation when testimonials section is visible
          setAutoRotate(true);
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
    if (autoRotate) {
      const intervalId = setInterval(() => {
        if (!isTransitioning) {
          handleNext();
        }
      }, 6000);
      
      return () => clearInterval(intervalId);
    }
  }, [activeTestimonial, isTransitioning, autoRotate]);

  const testimonials = [
    {
      quote: "A big thanks goes to the best hair stylist in the world, Maria Louise, for fixing my hair before the Swedish Idol Final. Thank you!",
      author: "Kevin",
      role: "Stammis",
      fbLink: "https://www.facebook.com/marialouisbarbershop"
    },
    {
      quote: "Tack för en otrolig fin uppsättning på mig och mina tärnor. Vi är så glada att just ni ordnade våra bröllopsfrisyrer!",
      author: "Magdalena",
      role: "Brud",
      fbLink: "https://www.facebook.com/marialouisbarbershop"
    },
    {
      quote: "Maria är jätteduktig på sitt jobb och gör allting på bästa sätt.",
      author: "Jasmina",
      role: "Nöjd Kund",
      fbLink: "https://www.facebook.com/marialouisbarbershop"
    },
    {
      quote: "Toppenbra frisörer som lyssnar på ens önskemål och vägleder en om man är osäker. Duktiga på att klippa och färga!",
      author: "Nesrin",
      role: "Nöjd Kund",
      fbLink: "https://www.facebook.com/marialouisbarbershop"
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
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-salon-cream/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-14">
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
            className="animated-element text-salon-dark/80 font-lora"
          >
            Vi är stolta över att skapa exceptionella upplevelser för våra kunder.
          </p>
        </div>
        
        <div 
          ref={el => elementsRef.current[3] = el} 
          className="animated-element relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden bg-white rounded-lg shadow-xl">
            {/* Testimonial Header */}
            <div className="bg-salon-gold/20 p-4 md:p-6 border-b border-salon-gold/30">
              <Quote size={30} className="text-salon-gold mb-2" />
              <h3 className="text-salon-dark font-serif text-xl md:text-2xl">Kundrecensioner</h3>
            </div>
            
            {/* Testimonial Content */}
            <div className="p-6 md:p-10 relative">
              <Quote size={120} className="text-salon-gold/5 absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4" />
              <Quote size={120} className="text-salon-gold/5 absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 rotate-180" />
              
              <div className="relative z-10">
                <div className={cn(
                  "transition-all duration-500 ease-in-out",
                  isTransitioning ? "opacity-0 transform scale-95 translate-x-10" : "opacity-100 transform scale-100 translate-x-0"
                )}>
                  <blockquote className="text-lg md:text-xl mb-8 text-salon-dark/90 leading-relaxed font-lora">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <a 
                      href={testimonials[activeTestimonial].fbLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-salon-gold/30 bg-salon-gold/10 flex items-center justify-center hover:bg-salon-gold/20 transition-colors"
                    >
                      <Facebook className="w-8 h-8 text-salon-gold" />
                    </a>
                    <div>
                      <p className="font-serif font-medium text-salon-dark text-lg">
                        {testimonials[activeTestimonial].author}
                      </p>
                      <p className="text-sm text-salon-dark/70 mb-2 font-lora">
                        {testimonials[activeTestimonial].role}
                      </p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white transition-colors shadow-md hover:shadow-lg transform hover:scale-105 duration-300"
              aria-label="Föregående omdöme"
              disabled={isTransitioning}
              onMouseEnter={() => setAutoRotate(false)}
              onMouseLeave={() => setAutoRotate(true)}
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
                  onMouseEnter={() => setAutoRotate(false)}
                  onMouseLeave={() => setAutoRotate(true)}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white transition-colors shadow-md hover:shadow-lg transform hover:scale-105 duration-300"
              aria-label="Nästa omdöme"
              disabled={isTransitioning}
              onMouseEnter={() => setAutoRotate(false)}
              onMouseLeave={() => setAutoRotate(true)}
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
