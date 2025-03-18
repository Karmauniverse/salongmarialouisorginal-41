
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Scissors, Droplet, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
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

  const serviceCategories = [
    {
      icon: <Scissors size={28} className="text-salon-gold" />,
      title: "Klippning & Styling",
      description: "Expertklippningar och styling anpassad efter dina unika drag och livsstil.",
      services: [
        { name: "Damklippning", price: "650 kr+" },
        { name: "Herrklippning", price: "450 kr+" },
        { name: "Barnklippning", price: "350 kr+" },
        { name: "Föning & Styling", price: "500 kr+" },
        { name: "Festfrisyr", price: "850 kr+" },
      ]
    },
    {
      icon: <Droplet size={28} className="text-salon-gold" />,
      title: "Färgtjänster",
      description: "Vibrerande, långvarig färg som förhöjer din naturliga skönhet.",
      services: [
        { name: "Enfärgning", price: "750 kr+" },
        { name: "Slingor (delvis)", price: "950 kr+" },
        { name: "Slingor (helhet)", price: "1500 kr+" },
        { name: "Balayage/Ombré", price: "1750 kr+" },
        { name: "Färgkorrigering", price: "Konsultation" },
      ]
    },
    {
      icon: <Sparkles size={28} className="text-salon-gold" />,
      title: "Behandlingar",
      description: "Återställande behandlingar för att behålla friskt, vackert hår.",
      services: [
        { name: "Djupkonditionering", price: "350 kr+" },
        { name: "Keratinbehandling", price: "2500 kr+" },
        { name: "Skalpmassage", price: "450 kr+" },
        { name: "Hårmask", price: "300 kr+" },
        { name: "Bindningsbyggande", price: "500 kr+" },
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-salon-cream/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            ref={el => elementsRef.current[0] = el} 
            className="animated-element mb-4"
          >
            <span className="inline-block px-4 py-1.5 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-sm">
              Våra Tjänster
            </span>
          </div>
          
          <h2 
            ref={el => elementsRef.current[1] = el} 
            className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6"
          >
            Experttjänster för Alla Behov
          </h2>
          
          <p 
            ref={el => elementsRef.current[2] = el} 
            className="animated-element text-salon-dark/80"
          >
            Vi erbjuder ett omfattande utbud av hårtjänster utformade för att förhöja din naturliga skönhet och hålla ditt hår i topptillstånd. Varje tjänst är personlig för att möta dina unika behov och preferenser.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div 
              key={category.title}
              ref={el => elementsRef.current[index + 3] = el} 
              className="animated-element salon-card p-8"
            >
              <div className="mb-6">{category.icon}</div>
              <h3 className="text-2xl font-serif mb-4">{category.title}</h3>
              <p className="text-salon-dark/80 mb-6">{category.description}</p>
              
              <div className="space-y-3">
                {category.services.map((service) => (
                  <div key={service.name} className="service-item">
                    <span className="font-medium">{service.name}</span>
                    <span className="text-salon-gold">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div 
          ref={el => elementsRef.current[6] = el} 
          className="animated-element text-center mt-12"
        >
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-salon-gold text-white font-medium rounded-sm hover:bg-opacity-90 transition-all"
          >
            Boka Din Tid
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
