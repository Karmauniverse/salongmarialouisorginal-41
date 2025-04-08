import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock, CalendarDays } from 'lucide-react';

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

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-salon-cream/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-4">
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">
              Kontakt
            </span>
          </div>
          <h2 ref={el => elementsRef.current[1] = el} className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6">
            Boka Din Tid
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Kontaktinfo */}
          <div className="animated-element bg-salon-dark rounded-lg overflow-hidden shadow-xl p-8 text-white space-y-12">
            <h3 className="text-2xl font-serif text-salon-gold">Kontakt</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-salon-gold/20 rounded-full">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-salon-gold mb-2">Plats</h4>
                  <a href="https://www.google.com/maps?q=Hägerstensvägen+170,+126+53+Hägersten" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-salon-gold transition">
                    Hägerstensvägen 170<br />126 53 Hägersten
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-salon-gold/20 rounded-full">
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-salon-gold mb-2">Kontakt</h4>
                  <p className="text-white/80">08-549 040 50</p>
                  <p className="text-white/80">salongmarialouis@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-salon-gold/20 rounded-full">
                  <Clock size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-salon-gold mb-2">Öppettider</h4>
                  <p className="text-white/80">Måndag–Fredag: 10:00 – 18:00</p>
                  <p className="text-white/80">Lördag: 10:00 – 16:00</p>
                  <p className="text-white/80">Söndag: Stängt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bokningsknapp */}
          <div className="animated-element bg-white rounded-lg shadow-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-salon-gold/10 rounded-full -mt-16 -mr-16" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-salon-gold/10 rounded-full -mb-10 -ml-10" />
            <h3 className="text-2xl font-serif mb-8 text-salon-dark relative z-10">Boka Online</h3>
            <div className="space-y-6 relative z-10">
              <a 
                href="https://bokning.voady.se/marialouis/marialouisebarbershop/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 px-6 bg-salon-gold text-white font-medium rounded hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 group"
              >
                <CalendarDays className="mr-2 group-hover:animate-pulse" size={20} />
                <span>Boka din tid</span>
              </a>
            </div>
          </div>
        </div>

        {/* Karta */}
        <div className="mt-16 flex justify-center">
          <div className="w-[360px] h-[360px] rounded-xl overflow-hidden shadow-md border border-gray-300">
            <iframe
              title="Maria Louis Karta"
              className="w-full h-full grayscale"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://www.openstreetmap.org/export/embed.html?bbox=17.9658%2C59.2966%2C17.9697%2C59.2985&layer=mapnik&marker=59.2975%2C17.9679"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
