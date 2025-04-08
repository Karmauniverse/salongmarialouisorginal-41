import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { MapPin, Phone, Clock, Mail, CalendarDays } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Here you would typically send the form data to a server

    // Reset form after submission
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    // Show success message (would use a toast in a real implementation)
    alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
  };

  const contactInfoItems = [{
    icon: <MapPin size={22} className="text-white" />,
    title: "Plats",
    details: ["Hägerstensvägen 170", "126 53 Hägersten"],
    link: "https://www.google.com/maps?q=Hägerstensvägen+170,+126+53+Hägersten"
  }, {
    icon: <Phone size={22} className="text-white" />,
    title: "Kontakt",
    details: ["08-549 040 50", "salongmarialouis@gmail.com"],
    emailLink: "mailto:salongmarialouis@gmail.com"
  }, {
    icon: <Clock size={22} className="text-white" />,
    title: "Öppettider",
    details: ["Måndag–Fredag: 10:00 – 18:00", "Lördag: 10:00 – 16:00", "Söndag: Stängt"]
  }];

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
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-salon-gold transition-colors"
                              >
                                {detail}
                              </a>
                            ) : item.emailLink && detail.includes('@') ? (
                              <a
                                href={item.emailLink}
                                className="hover:text-salon-gold transition-colors"
                              >
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
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100063562662842" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-gold transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
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
                <a 
                  href="https://bokning.voady.se/marialouis/marialouisebarbershop/" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-full py-4 px-6 bg-salon-gold text-white font-medium rounded hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg transform hover:translate-y-[-2px] group"
                >
                  <CalendarDays className="mr-2 group-hover:animate-pulse" size={20} />
                  <span>Boka din tid</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl overflow-hidden shadow-xl h-[350px] animated-element max-w-2xl mx-auto" ref={el => elementsRef.current[5] = el}>
      </div>
    </section>
  );
};

export default Contact;
