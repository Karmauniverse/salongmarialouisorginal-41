
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  const testimonials = [
    {
      quote: "Maria Louis is a true artist. She transformed my hair from dull and damaged to vibrant and healthy. The entire experience at the salon was luxurious and relaxing. I won't trust anyone else with my hair!",
      author: "Sophia Martinez",
      role: "Regular Client",
      image: "https://source.unsplash.com/random/100x100/?woman,portrait,1"
    },
    {
      quote: "I've been coming to Maria Louis for over three years now, and I'm consistently impressed with the quality of service. The stylists are knowledgeable and take the time to understand exactly what I want. Highly recommend!",
      author: "James Wilson",
      role: "Loyal Customer",
      image: "https://source.unsplash.com/random/100x100/?man,portrait,1"
    },
    {
      quote: "The atmosphere at Maria Louis is so welcoming, and the results speak for themselves. My color is always perfect, and my hair has never been healthier. The salon truly provides a premium experience from start to finish.",
      author: "Emma Thompson",
      role: "First-time Client",
      image: "https://source.unsplash.com/random/100x100/?woman,portrait,2"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-salon-cream/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            ref={el => elementsRef.current[0] = el} 
            className="animated-element mb-4"
          >
            <span className="inline-block px-4 py-1.5 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-sm">
              Testimonials
            </span>
          </div>
          
          <h2 
            ref={el => elementsRef.current[1] = el} 
            className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6"
          >
            What Our Clients Say
          </h2>
          
          <p 
            ref={el => elementsRef.current[2] = el} 
            className="animated-element text-salon-dark/80"
          >
            We take pride in creating exceptional experiences for our clients. Here's what some of them have to say about their time at Maria Louis.
          </p>
        </div>
        
        <div 
          ref={el => elementsRef.current[3] = el} 
          className="animated-element relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden salon-card p-8 md:p-12">
            <Quote size={48} className="text-salon-gold/20 absolute top-8 left-8" />
            
            <div className="relative z-10">
              <div className="transition-opacity duration-500">
                <blockquote className="text-lg md:text-xl italic mb-6 text-salon-dark/90">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif font-medium text-salon-dark">
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
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    activeTestimonial === index 
                      ? "bg-salon-gold w-4" 
                      : "bg-salon-gold/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white transition-colors"
              aria-label="Next testimonial"
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
