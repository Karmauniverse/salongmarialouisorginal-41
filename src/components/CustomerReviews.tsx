
import React, { useEffect, useRef } from 'react';
import ReviewGrid from './ReviewGrid';
import { Facebook } from 'lucide-react';

const CustomerReviews: React.FC = () => {
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

  const reviews = [
    {
      name: "Kevin",
      role: "Stammis",
      text: "A big thanks goes to the best hair stylist in the world, Maria Louise, for fixing my hair before the Swedish Idol Final. Thank you!",
      rating: 5
    }, 
    {
      name: "Magdalena",
      role: "Brud",
      text: "Tack för en otrolig fin uppsättning på mig och mina tärnor. Vi är så glada att just ni ordnade våra bröllopsfrisyrer!",
      rating: 5
    }, 
    {
      name: "Jasmina",
      role: "",
      text: "Maria är jätteduktig på sitt jobb och gör allting på bästa sätt.",
      rating: 5
    }, 
    {
      name: "Nesrin",
      role: "",
      text: "Toppenbra frisörer som lyssnar på ens önskemål och vägleder en om man är osäker. Duktiga på att klippa och färga!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-salon-cream/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-4">
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">
              Omdömen
            </span>
          </div>
          
          <h2 ref={el => elementsRef.current[1] = el} className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6">
            Vad Våra Kunder Säger
          </h2>
          
          <p ref={el => elementsRef.current[2] = el} className="animated-element text-salon-dark/80 font-lora mb-8">
            Dessa ord kommer från riktiga kunder som delat sina upplevelser via vår Facebook-sida. Vi är tacksamma för varje besök och förtroende.
          </p>
          
          <a 
            href="https://www.facebook.com/profile.php?id=100063562662842"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-salon-gold/10 border border-salon-gold/30 rounded-md text-salon-gold hover:text-salon-gold transition-all duration-300 shadow-sm mb-8 animated-element"
            ref={el => elementsRef.current[3] = el}
          >
            <Facebook size={18} />
            <span className="font-medium">Besök vår Facebook</span>
          </a>
        </div>

        <div ref={el => elementsRef.current[4] = el} className="animated-element">
          <ReviewGrid reviews={reviews} />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
