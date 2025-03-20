import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { MapPin, Phone, Clock, Mail, CreditCard } from 'lucide-react';
const Contact: React.FC = () => {
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
  const contactInfoItems = [{
    icon: <MapPin size={22} className="text-salon-gold" />,
    title: "Plats",
    details: ["Hägerstensvägen 170", "126 53 Hägersten"]
  }, {
    icon: <Phone size={22} className="text-salon-gold" />,
    title: "Kontakt",
    details: ["08-549 040 50", "salongmarialouis@gmail.com"]
  }, {
    icon: <Clock size={22} className="text-salon-gold" />,
    title: "Öppettider",
    details: ["Måndag–Fredag: 10:00 – 18:00", "Lördag: 10:00 – 16:00", "Söndag: Stängt"]
  }];
  return <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-4">
            <span className="inline-block px-4 py-1.5 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-sm">
              Kontakta Oss
            </span>
          </div>
          
          <h2 ref={el => elementsRef.current[1] = el} className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6">
            Boka Din Tid
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div ref={el => elementsRef.current[3] = el} className="animated-element salon-card p-8 flex flex-col justify-center items-center text-center h-full">
            <h3 className="text-2xl font-serif mb-8">Boka Online</h3>
            
            <a href="https://www.bokadirekt.se" target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-md text-center px-8 py-4 bg-salon-gold text-white font-medium rounded-sm hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg transform hover:translate-y-[-2px] text-lg mb-8">
              Boka Tid
            </a>
            
            
          </div>
          
          <div>
            <div ref={el => elementsRef.current[4] = el} className="animated-element h-64 rounded-sm overflow-hidden mb-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.7380891371485!2d17.97927431582818!3d59.30442838164869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77bd4d1c1c15%3A0xdf91287673f2b7a0!2sH%C3%A4gerstensv%C3%A4gen%20170%2C%20126%2053%20H%C3%A4gersten!5e0!3m2!1ssv!2sse!4v1633526309201!5m2!1ssv!2sse" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Maria Louis Salong karta"></iframe>
            </div>
            
            <div ref={el => elementsRef.current[5] = el} className="animated-element space-y-6">
              {contactInfoItems.map((item, index) => <div key={index} className="flex">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-serif text-lg mb-2">{item.title}</h4>
                    {item.details.map((detail, i) => <p key={i} className="text-salon-dark/80">{detail}</p>)}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;