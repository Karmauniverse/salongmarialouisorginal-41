
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
      title: "Location",
      details: ["123 Elegance Avenue", "San Francisco, CA 94105"]
    },
    {
      icon: <Phone size={22} className="text-salon-gold" />,
      title: "Contact",
      details: ["(555) 123-4567", "info@marialouissalon.com"]
    },
    {
      icon: <Clock size={22} className="text-salon-gold" />,
      title: "Hours",
      details: ["Tuesday - Saturday: 9am - 7pm", "Sunday - Monday: Closed"]
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
              Contact Us
            </span>
          </div>
          
          <h2 
            ref={el => elementsRef.current[1] = el} 
            className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6"
          >
            Book Your Appointment
          </h2>
          
          <p 
            ref={el => elementsRef.current[2] = el} 
            className="animated-element text-salon-dark/80"
          >
            Ready to transform your look? Contact us to schedule your appointment or ask any questions. We look forward to welcoming you to Maria Louis Hair Salon.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div 
            ref={el => elementsRef.current[3] = el} 
            className="animated-element"
          >
            <div className="salon-card p-8">
              <h3 className="text-2xl font-serif mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-salon-dark mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-salon-beige rounded-sm focus:outline-none focus:ring-1 focus:ring-salon-gold transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-salon-dark mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-salon-beige rounded-sm focus:outline-none focus:ring-1 focus:ring-salon-gold transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-salon-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-salon-beige rounded-sm focus:outline-none focus:ring-1 focus:ring-salon-gold transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-salon-dark mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-salon-beige rounded-sm focus:outline-none focus:ring-1 focus:ring-salon-gold transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut</option>
                    <option value="color">Hair Color</option>
                    <option value="highlights">Highlights</option>
                    <option value="treatment">Hair Treatment</option>
                    <option value="styling">Styling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-salon-dark mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-salon-beige rounded-sm focus:outline-none focus:ring-1 focus:ring-salon-gold transition-colors"
                    placeholder="Tell us more about what you're looking for..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-salon-gold text-white font-medium rounded-sm hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div 
              ref={el => elementsRef.current[4] = el} 
              className="animated-element h-64 md:h-80 rounded-sm overflow-hidden mb-8"
            >
              <img 
                src="https://source.unsplash.com/random/800x600/?salon,interior" 
                alt="Maria Louis Salon Interior" 
                className="w-full h-full object-cover"
              />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
