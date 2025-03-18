
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

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

  const galleryImages = [
    "https://source.unsplash.com/random/600x700/?haircut,blonde",
    "https://source.unsplash.com/random/600x900/?hair,styling",
    "https://source.unsplash.com/random/600x800/?hairstyle,brunette",
    "https://source.unsplash.com/random/600x700/?haircolor,salon",
    "https://source.unsplash.com/random/600x900/?hairstylist,work",
    "https://source.unsplash.com/random/600x800/?hair,treatment",
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
              Our Work
            </span>
          </div>
          
          <h2 
            ref={el => elementsRef.current[1] = el} 
            className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6"
          >
            Gallery of Beautiful Transformations
          </h2>
          
          <p 
            ref={el => elementsRef.current[2] = el} 
            className="animated-element text-salon-dark/80"
          >
            Browse through our portfolio showcasing the artistry and expertise of our stylists. These images represent just a fraction of the transformations we create daily at Maria Louis.
          </p>
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
                  alt={`Salon work ${index + 1}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-salon-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View Larger</span>
                </div>
              </div>
            </div>
          ))}
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
              alt="Enlarged salon work" 
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
