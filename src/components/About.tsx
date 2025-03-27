
import React, { useEffect, useRef } from 'react';
import { Award, Check, Instagram } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-12 bg-gradient-to-b from-salon-cream/30 to-white">
      <div className="section-container">
        {/* Introduction Section */}
        <div 
          ref={el => elementsRef.current[0] = el} 
          className="animated-element text-center max-w-4xl mx-auto mb-14"
        >
          <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full mb-4">
            Om Oss
          </span>
          
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">
            Vårt <span className="text-salon-gold italic">Team</span>
          </h2>
          
          <div className="space-y-4 text-salon-dark/80 my-0 mx-0">
            <p className="text-center">Sedan 2010 har Maria Louis varit en självklar del av Hägersten 
 en plats där skönhet, kvalitet och omtanke möts. Ett av våra största ögonblick var när vi, 
tillsammans med våra fantastiska kunder, blev nominerade till Årets Lokala Företag – en ära vi aldrig 
hade uppnått utan ert stöd.</p>
            
            <p className="text-center">
              Genom åren har vi delat både framgångar och utmaningar, men det som alltid har drivit oss framåt är er lojalitet och ert förtroende. Varje besök, varje samtal och varje leende på salongen betyder allt för oss.
            </p>
            
            <p className="text-center">
              På Maria Louis arbetar frisörer och barberare under samma tak, och vi är stolta över att erbjuda en förstklassig service i en välkomnande och personlig miljö. Här står du i fokus – vi lyssnar på dina önskemål och strävar efter att varje besök ska kännas som en avkopplande upplevelse.
            </p>
          </div>
        </div>
        
        {/* Maria Section */}
        <div 
          ref={el => elementsRef.current[1] = el} 
          className="animated-element mb-16"
        >
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-full bg-salon-cream/30 p-6 md:p-8 flex items-center justify-center order-2 md:order-1">
                <div className="max-w-md">
                  <span className="text-sm text-salon-brown font-medium mb-1 block">Grundare & keratinspecialist</span>
                  <h2 className="text-3xl font-serif font-medium mb-5">
                    Möt <span className="text-salon-gold italic">Maria</span>
                  </h2>
                  
                  <div className="space-y-4 text-salon-dark/80 mb-6">
                    <p>
                      Maria är en passionerad och erfaren frisör med över 30 års arbete inom branschen och grundaren av salongen. Sedan 2010 har hon drivit sin salong med stort engagemang och hjärta, där hon sätter kundens behov och önskemål i centrum.
                    </p>
                    
                    <p>
                      Med en genuin förmåga att få sina kunder att känna sig som hemma, har Maria skapat en miljö av trygghet och välkomnande. Hon är en lyhörd frisör som alltid ser till att varje kund känner sig förstådd och omhändertagen.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                      <div className="p-2 bg-salon-gold/10 rounded-full inline-block mb-3 group-hover:bg-salon-gold/20 transition-all duration-300">
                        <Award size={20} className="text-salon-gold" />
                      </div>
                      <h3 className="text-lg font-serif mb-2 text-salon-dark">Expertis</h3>
                      <p className="text-salon-dark/80 text-sm">
                        Certifierad keratinbehandlare och expert på avancerade behandlingar för glansigt och starkt hår.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                      <div className="p-2 bg-salon-gold/10 rounded-full inline-block mb-3 group-hover:bg-salon-gold/20 transition-all duration-300">
                        <Award size={20} className="text-salon-gold" />
                      </div>
                      <h3 className="text-lg font-serif mb-2 text-salon-dark">Utmärkelser</h3>
                      <p className="text-salon-dark/80 text-sm">
                        Nominerad till Årets Lokala Företag – Salong inom Stockholm stad, ett bevis på högsta kvalitet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative order-1 md:order-2 h-64 md:h-[340px]">
                <div className="h-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/4d446271-aa78-473e-be1e-ae8d64314e46.png" 
                    alt="Maria Louis med diplom" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-l"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Valentina Section */}
        <div 
          ref={el => elementsRef.current[2] = el} 
          className="animated-element"
        >
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-[340px]">
                <div className="h-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/5573a92a-5f13-4c18-9be6-e18b749cd68e.png" 
                    alt="Valentina" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent md:bg-gradient-to-r"></div>
                </div>
              </div>
              
              <div className="relative h-full bg-salon-cream/30 p-6 md:p-8 flex items-center justify-center">
                <div className="max-w-md">
                  <span className="text-sm text-salon-brown font-medium mb-1 block">Keratinspecialist</span>
                  <h2 className="text-3xl font-serif font-medium mb-5">
                    Möt <span className="text-salon-gold italic">Valentina</span>
                  </h2>
                  
                  <div className="space-y-4 text-salon-dark/80 mb-6">
                    <p>
                      Valentina är vår engagerade keratinspecialist och expert på hårstruktur och vård. Med sin djupa kunskap och passion för skönhet är hon alltid uppdaterad med de senaste behandlingarna och den vård ditt hår behöver.
                    </p>
                    
                    <p>
                      Efter en behandling hos Valentina kan du förvänta dig en verklig "WOW"-känsla, ditt hår kommer att kännas friskt, glänsande och lätt att styla, samtidigt som du får välvårdat och fräscht hår.
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-5">
                    {["Expert på keratinbehandlingar", "Skapar friskt, glänsande och lättstylat hår", "Erbjuder individuellt anpassade behandlingar"].map((item, index) => (
                      <li key={index} className="flex items-center group">
                        <div className="mr-3 p-1 bg-salon-gold/10 rounded-full group-hover:bg-salon-gold/30 transition-all duration-300">
                          <Check size={16} className="text-salon-gold" />
                        </div>
                        <span className="text-salon-dark/90 group-hover:text-salon-dark transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://www.instagram.com/hair.skinsprofessional__/?hl=en" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-salon-gold hover:text-salon-brown transition-colors"
                    >
                      <Instagram size={20} className="mr-2" />
                      <span>Följ Valentina på Instagram: Hair & Skin Professional</span>
                    </a>
                    
                    <a 
                      href="https://bokning.voady.se/marialouis/marialouisebarbershop/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2 bg-salon-gold text-white hover:bg-salon-brown transition-all font-medium rounded-full shadow-md hover:shadow-lg transform hover:scale-105 duration-300 mt-2"
                    >
                      Boka Tid
                    </a>
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

export default About;
