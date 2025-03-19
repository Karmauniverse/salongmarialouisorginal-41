
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  // Real salon work images
  const galleryImages = [
    "/lovable-uploads/d14c977f-f972-4ec3-88bb-7d6b06f1876d.png",
    "/lovable-uploads/af9782d7-4108-4c69-9b7b-53511f0ec2a5.png",
    "/lovable-uploads/c84be25b-3ca4-43bb-a30f-961db1e4d981.png",
    "/lovable-uploads/38443ee9-4f2f-49c8-8d41-b0657c4fb46a.png",
    "/lovable-uploads/bc783992-385e-4d23-b3ba-4eaa376e0e67.png",
    "/lovable-uploads/2ad83c14-43d0-4473-894c-d539476f52cf.png"
  ];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            ref={el => elementsRef.current[0] = el} 
            className="animated-element mb-4"
          >
            <span className="inline-block px-4 py-1.5 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-sm">
              Vårt Arbete
            </span>
          </div>
          
          <h2 
            ref={el => elementsRef.current[1] = el} 
            className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6"
          >
            Galleri av Vackra Förvandlingar
          </h2>
          
          <p 
            ref={el => elementsRef.current[2] = el} 
            className="animated-element text-salon-dark/80 mb-6"
          >
            Bläddra genom vår portfölj som visar konstnärligheten och expertisen hos våra stylister. Dessa bilder representerar bara en bråkdel av de förvandlingar vi skapar dagligen hos Maria Louis.
          </p>
          
          <a 
            href="https://www.instagram.com/salongmarialouiis/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-salon-gold hover:text-salon-brown transition-colors"
          >
            <Instagram size={20} className="mr-2" />
            <span>Följ oss på Instagram för fler inspirerande bilder</span>
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[index + 3] = el} 
              className="animated-element overflow-hidden rounded-sm cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              <div className="relative overflow-hidden h-72 md:h-96">
                <img 
                  src={image} 
                  alt={`Salongarbete ${index + 1}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-salon-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">Visa Större</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/salongmarialouiis/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white transition-all font-medium rounded-sm"
          >
            <Instagram size={20} className="mr-2" />
            Se fler bilder på Instagram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-salon-dark/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Förstorat salongarbete" 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-salon-dark/50 rounded-full p-2 hover:bg-salon-dark transition-colors"
              onClick={closeLightbox}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
