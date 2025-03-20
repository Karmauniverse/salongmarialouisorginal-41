
import React, { useEffect, useRef } from 'react';

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
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        {/* Introduction Section */}
        <div ref={el => elementsRef.current[0] = el} className="animated-element text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-sm mb-4">
            Om Oss
          </span>
          
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Välkommen till <span className="text-salon-gold italic">Maria Louis</span>
          </h2>
          
          <p className="text-salon-dark/80 text-lg">
            Sedan 2010 har vi förenat skönhet och omtanke – en prisbelönt salong med stort hjärta
          </p>
        </div>
        
        {/* Maria Section */}
        <div ref={el => elementsRef.current[1] = el} className="animated-element grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-full flex items-center">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-lg">
              <img src="/lovable-uploads/4d446271-aa78-473e-be1e-ae8d64314e46.png" alt="Maria Louis med diplom" className="w-full h-auto object-cover object-center" />
            </div>
            <div className="absolute top-8 -left-8 w-full h-[90%] border-2 border-salon-gold rounded-sm -z-10"></div>
          </div>
          
          <div>
            <h2 className="text-3xl font-serif font-medium mb-2">
              Möt <span className="text-salon-gold italic">Maria</span>
            </h2>
            <p className="text-sm text-salon-gold mb-6">Grundare & keratinspecialist</p>
            
            <div className="space-y-4 text-salon-dark/80 mb-6">
              <p>
                Maria är en passionerad och erfaren frisör med över 30 års arbete inom branschen och grundaren av salongen. Sedan 2010 har hon drivit sin salong med stort engagemang och hjärta, där hon sätter kundens behov och önskemål i centrum.
              </p>
              
              <p>
                Med en genuin förmåga att få sina kunder att känna sig som hemma, har Maria skapat en miljö av trygghet och välkomnande. Hon är en lyhörd frisör som alltid ser till att varje kund känner sig förstådd och omhändertagen. Marias varma personlighet och sociala förmåga gör att besöken hos henne alltid blir en positiv upplevelse.
              </p>
              
              <p>
                Hennes professionalism och engagemang har inte gått obemärkt förbi – Maria har flera gånger vunnit priser och blivit nominerad till Årets Lokala Företag – Salong inom Stockholm stad, vilket är ett bevis på hennes höga kvalitet och framstående arbete. Marias kombination av expertis, värme och omtanke gör henne till en frisör som verkligen sticker ut.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="salon-card p-6">
                <h3 className="text-xl font-serif mb-2">Expertis</h3>
                <p className="text-salon-dark/80 text-sm">
                  Certifierad keratinbehandlare och expert på avancerade behandlingar för glansigt och starkt hår.
                </p>
              </div>
              
              <div className="salon-card p-6">
                <h3 className="text-xl font-serif mb-2">Utmärkelser</h3>
                <p className="text-salon-dark/80 text-sm">
                  Nominerad till Årets Lokala Företag – Salong inom Stockholm stad, ett bevis på högsta kvalitet.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Valentina Section */}
        <div ref={el => elementsRef.current[2] = el} className="animated-element grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 relative h-full flex items-center">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-lg w-5/6 mx-auto">
              <img src="/lovable-uploads/5573a92a-5f13-4c18-9be6-e18b749cd68e.png" alt="Valentina" className="w-full h-auto object-cover object-center" />
            </div>
            <div className="absolute top-8 -right-8 w-5/6 h-[90%] border-2 border-salon-gold rounded-sm -z-10 mx-auto"></div>
          </div>
          
          <div className="md:order-1">
            <h2 className="text-3xl font-serif font-medium mb-2">
              Möt <span className="text-salon-gold italic">Valentina</span>
            </h2>
            <p className="text-sm text-salon-gold mb-6">Keratinspecialist</p>
            
            <div className="space-y-4 text-salon-dark/80 mb-6">
              <p>
                Valentina är vår engagerade keratinspecialist och expert på hårstruktur och vård. Med sin djupa kunskap och passion för skönhet är hon alltid uppdaterad med de senaste behandlingarna och den vård ditt hår behöver. Valentina lyssnar noggrant på varje kunds behov och anpassar sina behandlingar för att ge just det resultat du söker.
              </p>
              
              <p>
                Efter en behandling hos Valentina kan du förvänta dig en verklig "WOW"-känsla, ditt hår kommer att kännas friskt, glänsande och lätt att styla, samtidigt som du får välvårdat och fräscht hår. Hon skapar en inbjudande och avslappnad atmosfär där du känner dig väl omhändertagen, och lämnar salongen med ett självförtroende och bättre hår kvalité.
              </p>
            </div>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-salon-gold mr-2">✓</span>
                <span>Expert på keratinbehandlingar</span>
              </li>
              <li className="flex items-center">
                <span className="text-salon-gold mr-2">✓</span>
                <span>Skapar friskt, glänsande och lättstylat hår</span>
              </li>
              <li className="flex items-center">
                <span className="text-salon-gold mr-2">✓</span>
                <span>Erbjuder individuellt anpassade behandlingar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
