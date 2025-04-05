
import React, { useEffect, useRef } from 'react';
import AboutIntro from './about/AboutIntro';
import MariaBio from './about/MariaBio';
import ValentinaBio from './about/ValentinaBio';
import GabrielBio from './about/GabrielBio';

const About: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver(entries => {
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
    <section id="about" className="py-12 bg-gradient-to-b from-salon-cream/30 to-white overflow-hidden">
      <div className="section-container">
        <AboutIntro refCallback={(el) => elementsRef.current[0] = el} />
        <MariaBio refCallback={(el) => elementsRef.current[1] = el} />
        <ValentinaBio refCallback={(el) => elementsRef.current[2] = el} />
        <GabrielBio refCallback={(el) => elementsRef.current[3] = el} />
      </div>
    </section>
  );
};

export default About;
