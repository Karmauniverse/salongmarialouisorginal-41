import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock, CalendarDays } from 'lucide-react';

const Contact: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const contactInfoItems = [
    {
      icon: <MapPin size={22} className="text-white" />,
      title: "Plats",
      details: ["Hägerstensvägen 170", "126 53 Hägersten"],
      link: "https://www.google.com/maps?q=Hägerstensvägen+170,+126+53+Hägersten"
    },
    {
      icon: <Phone size={22} className="text-white" />,
      title: "Kontakt",
      details: ["08-549 040 50", "salongmarialouis@gmail.com"],
      emailLink: "mailto:salongmarialouis@gmail.com"
    },
    {
      icon: <Clock size={22} className="text-white" />,
      title: "Öppettider",
      details: ["Måndag–Fredag: 10:00 – 18:00", "Lördag: 10:00 – 16:00", "Söndag: Stängt"]
    }
  ];

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
          <div className="order-2 md:order-1">
            <div ref={el => elementsRef.current[3] = el} className="animated-element bg-salon-dark rounded-lg overflow-hidden shadow-xl">
              <div className="p-8 text-white space-y-12">
                <h3 className="text-2xl font-serif mb-8 text-salon-gold">Kontakt</h3>
                <div className="space-y-6">
                  {contactInfoItems.map((item, index) => (
                    <div key={index} className="flex group">
                      <div className="mr-4 p-3 bg-salon-gold/20 rounded-full group-hover:bg-salon-gold transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-serif text-lg mb-2 text-salon-gold">{item.title}</h4>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-white/80">
                            {item.link && i === 0 ? (
                              <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-salon-gold transition-colors">
                                {detail}
                              </a>
                            ) : item.emailLink && detail.includes('@') ? (
                              <a href={item.emailLink} className="hover:text-salon-gold transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="font-serif text-lg mb-4 text-salon-gold">Följ oss</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/salongmarialouiis/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-gold transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43..." clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100063562662842" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-gold transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523..." clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div ref={el => elementsRef.current[4] = el} className="animated-element bg-white rounded-lg shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-salon-gold/10 rounded-full -mt-16 -mr-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-salon-gold/10 rounded-full -mb-10 -ml-10"></div>

              <h3 className="text-2xl font-serif mb-8 text-salon-dark relative z-10">Boka Online</h3>
              <div className="space-y-6 relative z-10">
                <a href="https://bokning.voady.se/marialouis/marialouisebarbershop/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-4 px-6 bg-salon-gold text-white font-medium rounded hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg transform hover:translate-y-[-2px] group">
                  <CalendarDays className="mr-2 group-hover:animate-pulse" size={20} />
                  <span>Boka din tid</span>
                </a>

                {/* KARTA – placerad direkt under knappen */}
                <div className="mt-8 flex justify-end">
                  <div className="w-[300px] h-[300px] rounded-xl overflow-hidden shadow-md border border-gray-300">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;