
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div 
              ref={el => elementsRef.current[0] = el} 
              className="animated-element relative z-10 rounded-sm overflow-hidden shadow-lg"
            >
              <img 
                src="/lovable-uploads/4d446271-aa78-473e-be1e-ae8d64314e46.png"
                alt="Maria Louis med diplom" 
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
            <div className="absolute top-8 -left-8 w-full h-full border-2 border-salon-gold rounded-sm -z-10"></div>
          </div>
          
          <div>
            <div 
              ref={el => elementsRef.current[1] = el} 
              className="animated-element mb-4"
            >
              <span className="inline-block px-4 py-1.5 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-sm">
                Om Oss
              </span>
            </div>
            
            <h2 
              ref={el => elementsRef.current[2] = el} 
              className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6"
            >
              Möt <span className="text-salon-gold italic">Maria Louis</span>
            </h2>
            
            <div 
              ref={el => elementsRef.current[3] = el} 
              className="animated-element space-y-6 text-salon-dark/80"
            >
              <p>
                Maria är en passionerad och erfaren frisör med över 30 års arbete inom branschen och grundaren av salongen. Sedan 2010 har hon drivit sin salong med stort engagemang och hjärta, där hon sätter kundens behov och önskemål i centrum.
              </p>
              
              <p>
                Med en genuin förmåga att få sina kunder att känna sig som hemma, har Maria skapat en miljö av trygghet och välkomnande. Hon är en lyhörd frisör som alltid ser till att varje kund känner sig förstådd och omhändertagen. Marias varma personlighet och sociala förmåga gör att besöken hos henne alltid blir en positiv upplevelse.
              </p>
            </div>
            
            <div 
              ref={el => elementsRef.current[4] = el} 
              className="animated-element mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
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

            <div className="mt-8">
              <h3 className="text-2xl font-serif mb-4">Valentina – Keratinspecialist</h3>
              <div className="flex gap-6 items-start">
                <img 
                  src="/lovable-uploads/5573a92a-5f13-4c18-9be6-e18b749cd68e.png"
                  alt="Valentina"
                  className="w-32 h-32 object-cover rounded-full"
                />
                <div>
                  <p className="text-salon-dark/80 mb-4">
                    Valentina är vår engagerade keratinspecialist och expert på hårstruktur och -vård. Med sin djupa kunskap och passion för skönhet är hon alltid uppdaterad med de senaste behandlingarna och den vård ditt hår behöver.
                  </p>
                  <p className="text-salon-dark/80">
                    Efter en behandling hos Valentina kan du förvänta dig en verklig "WOW"-känsla, ditt hår kommer att kännas friskt, glänsande och lätt att styla.
                  </p>
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
