
import React, { useEffect, useRef, useState } from 'react';
import TestimonialHeader from './testimonials/TestimonialHeader';
import TestimonialContent from './testimonials/TestimonialContent';
import TestimonialControls from './testimonials/TestimonialControls';
import { TestimonialData } from './testimonials/types';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  const testimonials: TestimonialData[] = [
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

  const handleMouseEnter = () => setAutoRotate(false);
  const handleMouseLeave = () => setAutoRotate(true);

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-salon-cream/30">
      <div className="section-container">
        <TestimonialHeader refCallback={el => elementsRef.current[0] = el} />
        
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
            <TestimonialContent 
              activeTestimonial={activeTestimonial}
              testimonials={testimonials}
              isTransitioning={isTransitioning}
            />
          </div>
          
          <TestimonialControls 
            activeTestimonial={activeTestimonial}
            testimonialCount={testimonials.length}
            isTransitioning={isTransitioning}
            onPrev={handlePrev}
            onNext={handleNext}
            onDotClick={handleDotClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
