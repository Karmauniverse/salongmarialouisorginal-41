import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Scissors, Droplet, Sparkles, Beard, Palette, SparkleIcon } from 'lucide-react';

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
      title: "Klippning",
      description: "Professionell klippning anpassad efter din stil och önskemål.",
      services: [
        { name: "Kort hår", price: "från 390 kr" },
        { name: "Långt hår", price: "från 470 kr" },
        { name: "Långt hår (ny frisyr/tjockt hår)", price: "från 560 kr" },
        { name: "Ungdom (8–18 år)", price: "350 kr" },
        { name: "Barnklippning (t.o.m. 7 år)", price: "290 kr" },
      ]
    },
    {
      icon: <Palette size={28} className="text-salon-gold" />,
      title: "Folieslingor & Färg",
      description: "Professionell färgning och slingor för ett perfekt resultat.",
      services: [
        { name: "Folieslingor inkl. klipp - Kort hår", price: "från 1 590 kr" },
        { name: "Folieslingor inkl. klipp - Mellanlångt", price: "från 1 930 kr" },
        { name: "Folieslingor inkl. klipp - Långt", price: "från 2 230 kr" },
        { name: "Balayage inkl. klipp", price: "från 2 530 kr" },
      ]
    },
    {
      icon: <Droplet size={28} className="text-salon-gold" />,
      title: "Färgbehandlingar",
      description: "Färgning och toning för ett perfekt resultat.",
      services: [
        { name: "Bottenfärg", price: "från 740 kr" },
        { name: "Toning", price: "från 350 kr" },
        { name: "Slingor i hätta", price: "930 kr" },
      ]
    },
    {
      icon: <Beard size={28} className="text-salon-gold" />,
      title: "Barberaren",
      description: "Expertklippning för herrar och skäggvård.",
      services: [
        { name: "Herrklippning", price: "från 390 kr" },
        { name: "Kort skägg", price: "från 220 kr" },
        { name: "Klipp + kort skägg", price: "från 540 kr" },
        { name: "Klipp + långt skägg", price: "650 kr" },
      ]
    },
    {
      icon: <SparkleIcon size={28} className="text-salon-gold" />,
      title: "Keratinbehandling",
      description: "Professionell keratinbehandling för glansigt och friskt hår.",
      services: [
        { name: "Kort hår", price: "1 540–1 940 kr" },
        { name: "Mellanlångt hår", price: "2 190–2 440 kr" },
        { name: "Långt hår", price: "från 2 740 kr" },
      ]
    },
    {
      icon: <Sparkles size={28} className="text-salon-gold" />,
      title: "Övriga Behandlingar",
      description: "Kompletterande skönhetsbehandlingar för ditt välbefinnande.",
      services: [
        { name: "Fransfärg", price: "220 kr" },
        { name: "Brynfärg", price: "220 kr" },
        { name: "Ögonbrynsplock", price: "199 kr" },
        { name: "Franspaket", price: "420 kr" },
        { name: "Olaplex med behandling", price: "250 kr" },
        { name: "Fristående Olaplex", price: "500 kr" },
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
