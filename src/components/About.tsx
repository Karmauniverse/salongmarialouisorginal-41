
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div 
              ref={el => elementsRef.current[0] = el} 
              className="animated-element relative z-10 rounded-sm overflow-hidden shadow-lg"
            >
              <img 
                src="https://source.unsplash.com/random/800x1000/?hairstylist,salon" 
                alt="Maria Louis salon owner" 
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
            <div className="absolute top-8 -left-8 w-full h-full border-2 border-salon-gold rounded-sm -z-10"></div>
          </div>
          
          <div>
            <div 
              ref={el => elementsRef.current[1] = el} 
              className="animated-element mb-4"
            >
              <span className="inline-block px-4 py-1.5 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-sm">
                About Us
              </span>
            </div>
            
            <h2 
              ref={el => elementsRef.current[2] = el} 
              className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6"
            >
              Welcome to <span className="text-salon-gold italic">Maria Louis</span> Hair Salon
            </h2>
            
            <p 
              ref={el => elementsRef.current[3] = el} 
              className="animated-element text-salon-dark/80 mb-6"
            >
              Founded in 2010, Maria Louis Hair Salon has established itself as a premier destination for those seeking exceptional hair services. Our salon combines artistic vision with technical precision to create looks that enhance your natural beauty.
            </p>
            
            <p 
              ref={el => elementsRef.current[4] = el} 
              className="animated-element text-salon-dark/80 mb-8"
            >
              At Maria Louis, we believe that beautiful hair is healthy hair. Our team of expert stylists stays at the forefront of industry trends and techniques, ensuring that you receive the highest quality service with every visit.
            </p>
            
            <div 
              ref={el => elementsRef.current[5] = el} 
              className="animated-element grid grid-cols-2 gap-6"
            >
              <div className="salon-card p-6">
                <h3 className="text-xl font-serif mb-2">Our Mission</h3>
                <p className="text-salon-dark/80 text-sm">
                  To provide exceptional hair services that enhance our clients' natural beauty and boost their confidence.
                </p>
              </div>
              
              <div className="salon-card p-6">
                <h3 className="text-xl font-serif mb-2">Our Values</h3>
                <p className="text-salon-dark/80 text-sm">
                  Excellence, creativity, continuous education, and personalized care for every client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
