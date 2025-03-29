import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
const Contact: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulating email sending to salongmarialouis@gmail.com
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-14 bg-gradient-to-b from-white to-salon-cream/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-4">
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">
              Kontakt
            </span>
          </div>
        </div>
        
        <div ref={el => elementsRef.current[2] = el} className="animated-element grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start mb-12">
          {/* Left Side - Contact Form */}
          <div className="p-6 md:p-8 rounded-xl shadow-lg bg-salon-dark">
            <h2 ref={el => elementsRef.current[1] = el} className="animated-element text-2xl font-serif font-medium mb-3 text-salon-cream">
              Kontakta Oss Direkt
            </h2>
            <p className="mb-3 text-salon-gold font-thin px-0">Hör av dig om du har frågor, vill samarbeta med oss eller få våra erbjudanden.</p>
            <p className="italic mb-5 text-salon-beige text-xs py-0 px-0 my-0">
              För bokning – klicka på knappen till höger. Använd formuläret för andra ärenden.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-salon-dark mb-1">
                  Ditt Namn
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-salon-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-gold/30 transition" placeholder="Anna Andersson" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-salon-dark mb-1">
                  E-post
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-salon-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-gold/30 transition" placeholder="anna@example.com" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-salon-dark mb-1">
                  Telefon
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-salon-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-gold/30 transition" placeholder="070 123 45 67" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-salon-dark mb-1">
                  Meddelande
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 border border-salon-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-gold/30 transition resize-none" placeholder="Skriv ditt meddelande här..."></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting} className={cn("w-full px-6 py-3 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed", submitStatus === 'success' && "bg-green-600 hover:bg-green-700", submitStatus === 'error' && "bg-red-600 hover:bg-red-700")}>
                {isSubmitting ? <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Skickar...
                  </span> : submitStatus === 'success' ? "Meddelande skickat!" : submitStatus === 'error' ? "Ett fel uppstod, försök igen" : "Skicka Meddelande"}
              </button>
            </form>
          </div>
          
          {/* Right Side - Booking Online */}
          <div className="flex flex-col h-full justify-start p-8 rounded-xl shadow-lg bg-salon-dark">
            <div className="mb-6">
              <h2 className="text-2xl font-serif font-medium mb-4 text-salon-beige">
                Boka Din Tid
              </h2>
              <p className="text-salon-gold font-extralight">
                Välj tid och behandling direkt online – snabbt, tryggt och enkelt.
              </p>
              
              <a href="https://bokning.voady.se/marialouis/marialouisebarbershop/" target="_blank" rel="noopener noreferrer" className="mt-6 mb-6 block text-center w-full px-8 py-4 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all shadow-md hover:shadow-lg transform hover:scale-105 duration-300">
                <span className="flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Boka Tid
                </span>
              </a>
            </div>
            
            <div className="p-5 rounded-xl w-full bg-white py-[58px] my-0 px-[65px]">
              <div className="flex items-center mb-4">
                <Clock size={18} className="text-salon-gold mr-2" />
                <h5 className="text-salon-dark font-medium text-base">Öppettider</h5>
              </div>
              <div className="grid grid-cols-2 gap-1 text-sm my-0 py-0 px-[6px]">
                <div className="text-salon-dark/80 py-0">Måndag:</div>
                <div className="text-salon-dark/80 py-1">10:00 – 18:00</div>
                <div className="text-salon-dark/80 py-1">Tisdag:</div>
                <div className="text-salon-dark/80 py-1">10:00 – 18:00</div>
                <div className="text-salon-dark/80 py-1">Onsdag:</div>
                <div className="text-salon-dark/80 py-1">10:00 – 18:00</div>
                <div className="text-salon-dark/80 py-1">Torsdag:</div>
                <div className="text-salon-dark/80 py-1">10:00 – 18:00</div>
                <div className="text-salon-dark/80 py-1">Fredag:</div>
                <div className="text-salon-dark/80 py-1">10:00 – 18:00</div>
                <div className="text-salon-dark/80 py-1">Lördag:</div>
                <div className="text-salon-dark/80 py-1">10:00 – 16:00</div>
                <div className="text-salon-dark/80 py-1">Söndag:</div>
                <div className="text-salon-dark/80 py-1">Stängt</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;