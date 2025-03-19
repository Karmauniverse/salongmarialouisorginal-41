
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
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

  const contactInfoItems = [
    {
      icon: <MapPin size={22} className="text-salon-gold" />,
      title: "Plats",
      details: ["Hägerstensvägen 170", "126 53 Hägersten"]
    },
    {
      icon: <Phone size={22} className="text-salon-gold" />,
      title: "Kontakt",
      details: ["08-549 040 50", "salongmarialouis@gmail.com"]
    },
    {
      icon: <Clock size={22} className="text-salon-gold" />,
      title: "Öppettider",
      details: ["Måndag–Fredag: 10:00 – 18:00", "Lördag: 10:00 – 16:00", "Söndag: Stängt"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            ref={el => elementsRef.current[0] = el} 
            className="animated-element mb-4"
          >
            <span className="inline-block px-4 py-1.5 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-sm">
              Kontakta Oss
            </span>
          </div>
          
          <h2 
            ref={el => elementsRef.current[1] = el} 
            className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6"
          >
            Boka Din Tid
          </h2>
          
          <p 
            ref={el => elementsRef.current[2] = el} 
            className="animated-element text-salon-dark/80"
          >
            Redo att förvandla ditt utseende? Kontakta oss för att boka din tid eller ställa frågor. Vi ser fram emot att välkomna dig till Maria Louis Hårsalong.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div 
            ref={el => elementsRef.current[3] = el} 
            className="animated-element"
          >
            <div className="salon-card p-8">
              <h3 className="text-2xl font-serif mb-6">Skicka Oss ett Meddelande</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-salon-dark mb-2">
                      Ditt Namn
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-salon-beige rounded-sm focus:outline-none focus:ring-1 focus:ring-salon-gold transition-colors"
                      placeholder="Anna Andersson"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-salon-dark mb-2">
                      E-postadress
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-salon-beige rounded-sm focus:outline-none focus:ring-1 focus:ring-salon-gold transition-colors"
                      placeholder="anna@exempel.se"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-salon-dark mb-2">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-salon-beige rounded-sm focus:outline-none focus:ring-1 focus:ring-salon-gold transition-colors"
                    placeholder="070-123 45 67"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-salon-dark mb-2">
                    Tjänst Du Är Intresserad Av
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-salon-beige rounded-sm focus:outline-none focus:ring-1 focus:ring-salon-gold transition-colors bg-white"
                  >
                    <option value="">Välj en tjänst</option>
                    <option value="haircut">Klippning</option>
                    <option value="color">Hårfärg</option>
                    <option value="highlights">Slingor</option>
                    <option value="treatment">Hårvård</option>
                    <option value="styling">Styling</option>
                    <option value="other">Annat</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-salon-dark mb-2">
                    Ditt Meddelande
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-salon-beige rounded-sm focus:outline-none focus:ring-1 focus:ring-salon-gold transition-colors"
                    placeholder="Berätta mer om vad du söker..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-salon-gold text-white font-medium rounded-sm hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
                >
                  Skicka Meddelande
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div 
              ref={el => elementsRef.current[4] = el} 
              className="animated-element h-64 rounded-sm overflow-hidden mb-8"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.7380891371485!2d17.97927431582818!3d59.30442838164869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77bd4d1c1c15%3A0xdf91287673f2b7a0!2sH%C3%A4gerstensv%C3%A4gen%20170%2C%20126%2053%20H%C3%A4gersten!5e0!3m2!1ssv!2sse!4v1633526309201!5m2!1ssv!2sse" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Maria Louis Salong karta"
              ></iframe>
            </div>
            
            <div 
              ref={el => elementsRef.current[5] = el} 
              className="animated-element space-y-6"
            >
              {contactInfoItems.map((item, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-serif text-lg mb-2">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-salon-dark/80">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="https://www.bokadirekt.se" 
                target="_blank"
                rel="noopener noreferrer" 
                className="block w-full text-center px-8 py-4 bg-salon-gold text-white font-medium rounded-sm hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
              >
                Boka Tid Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
