
import React, { useRef, useEffect } from 'react';
import { Facebook } from 'lucide-react';

const reviews = [
  {
    name: "Kevin",
    text: "A big thanks goes to the best hair stylist in the world, Maria Louise, for fixing my hair before the Swedish Idol Final. Thank you!"
  },
  {
    name: "Magdalena",
    text: "Tack för en otrolig fin uppsättning på mig och mina tärnor. Vi är så glada att just ni ordnade våra bröllopsfrisyrer!"
  },
  {
    name: "Jasmina",
    text: "Maria är jätteduktig på sitt jobb och gör allting på bästa sätt."
  },
  {
    name: "Nesrin",
    text: "Toppenbra frisörer som lyssnar på ens önskemål och vägleder en om man är osäker. Duktiga på att klippa och färga!"
  },
  {
    name: "Thomas",
    text: "Friendly, great hairstylists."
  }
];

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

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-4">
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">
              Omdömen
            </span>
          </div>
          
          <h2 ref={el => elementsRef.current[1] = el} className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6">
            Vad Våra Kunder Säger
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              ref={el => elementsRef.current[index + 2] = el}
              className="animated-element bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-salon-gold/10 rounded-full mr-3">
                  <Facebook className="text-salon-gold w-5 h-5" />
                </div>
                <h3 className="font-medium text-lg text-salon-dark">{review.name}</h3>
              </div>
              <p className="text-salon-dark/80 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
