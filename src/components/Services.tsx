
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
      title: "Haircuts & Styling",
      description: "Expert cuts and styling tailored to your unique features and lifestyle.",
      services: [
        { name: "Women's Haircut", price: "$65+" },
        { name: "Men's Haircut", price: "$45+" },
        { name: "Children's Haircut", price: "$35+" },
        { name: "Blowout & Style", price: "$50+" },
        { name: "Special Occasion Styling", price: "$85+" },
      ]
    },
    {
      icon: <Droplet size={28} className="text-salon-gold" />,
      title: "Color Services",
      description: "Vibrant, long-lasting color that enhances your natural beauty.",
      services: [
        { name: "Single Process Color", price: "$75+" },
        { name: "Partial Highlights", price: "$95+" },
        { name: "Full Highlights", price: "$150+" },
        { name: "Balayage/Ombré", price: "$175+" },
        { name: "Color Correction", price: "Consultation" },
      ]
    },
    {
      icon: <Sparkles size={28} className="text-salon-gold" />,
      title: "Treatments",
      description: "Restorative treatments to maintain healthy, beautiful hair.",
      services: [
        { name: "Deep Conditioning", price: "$35+" },
        { name: "Keratin Treatment", price: "$250+" },
        { name: "Scalp Treatment", price: "$45+" },
        { name: "Hair Mask", price: "$30+" },
        { name: "Bond Rebuilding", price: "$50+" },
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
              Our Services
            </span>
          </div>
          
          <h2 
            ref={el => elementsRef.current[1] = el} 
            className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6"
          >
            Expert Hair Services for Every Need
          </h2>
          
          <p 
            ref={el => elementsRef.current[2] = el} 
            className="animated-element text-salon-dark/80"
          >
            We offer a comprehensive range of hair services designed to enhance your natural beauty and keep your hair looking its best. Each service is personalized to meet your unique needs and preferences.
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
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
