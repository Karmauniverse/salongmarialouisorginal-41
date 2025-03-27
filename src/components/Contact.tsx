import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
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
  const InfoCard = ({
    icon: Icon,
    title,
    children
  }: {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
  }) => {};
  return <section id="contact" className="py-14 bg-gradient-to-b from-white to-salon-cream/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-4">
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">
              Kontakt
            </span>
          </div>
          
          <h2 ref={el => elementsRef.current[1] = el} className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6">
            Boka Din Tid
          </h2>
        </div>
        
        <div ref={el => elementsRef.current[2] = el} className="animated-element grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          {/* Left Side - Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
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
              
              <p className="text-center text-salon-dark/70 text-sm">
                Eller boka direkt via vårt bokningssystem:
              </p>
              
              <a href="https://bokning.voady.se/marialouis/marialouisebarbershop/" target="_blank" rel="noopener noreferrer" className="block text-center px-6 py-3 border border-salon-gold text-salon-gold font-medium rounded-full hover:bg-salon-gold hover:text-white transition-all shadow-sm hover:shadow-md">
                Boka Online
                <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </a>
            </form>
          </div>
          
          {/* Right Side - Contact Info */}
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <InfoCard icon={MapPin} title="Besök Oss">
                <p>Roslags Näsby <br />Centralvägen 1 <br />187 62 Täby</p>
              </InfoCard>
              
              <InfoCard icon={Phone} title="Ring Oss">
                <p>08-758 51 01</p>
                <p className="mt-1">073-626 80 71</p>
              </InfoCard>
              
              <InfoCard icon={Clock} title="Öppettider">
                <p>Mån-Fre: 09:00-19:00 <br />Lör: 10:00-16:00 <br />Sön: Stängt</p>
              </InfoCard>
            </div>
            
            <div className="flex-grow bg-salon-dark rounded-xl overflow-hidden shadow-xl">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.9250243611065!2d18.069699415981644!3d59.44113108169673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9b3d5d6eaedd%3A0xb6e30f06b5b23da7!2sCentralv%C3%A4gen%201%2C%20187%2062%20T%C3%A4by!5e0!3m2!1ssv!2sse!4v1657881642421!5m2!1ssv!2sse" width="100%" height="100%" style={{
              border: 0,
              minHeight: '300px'
            }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Maria Louis Hårsalong karta" className="w-full h-full min-h-[300px]"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;