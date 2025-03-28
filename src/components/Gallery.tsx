
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, X, Instagram } from 'lucide-react';
const Gallery: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
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

  // Real salon work images
  const galleryImages = ["/lovable-uploads/d14c977f-f972-4ec3-88bb-7d6b06f1876d.png", "/lovable-uploads/af9782d7-4108-4c69-9b7b-53511f0ec2a5.png", "/lovable-uploads/c84be25b-3ca4-43bb-a30f-961db1e4d981.png", "/lovable-uploads/38443ee9-4f2f-49c8-8d41-b0657c4fb46a.png", "/lovable-uploads/bc783992-385e-4d23-b3ba-4eaa376e0e67.png", "/lovable-uploads/2ad83c14-43d0-4473-894c-d539476f52cf.png"];
  const openLightbox = (image: string) => {
    setIsAnimating(true);
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
    setTimeout(() => setIsAnimating(false), 500);
  };
  const closeLightbox = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedImage(null);
      document.body.style.overflow = 'auto';
      setIsAnimating(false);
    }, 300);
  };
  return <section id="gallery" className="py-14 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div ref={el => elementsRef.current[0] = el} className="animated-element mb-4">
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full">
              Galleri
            </span>
          </div>
          
          <h2 ref={el => elementsRef.current[1] = el} className="animated-element text-3xl md:text-4xl font-serif font-medium mb-6">
            Följ oss på Instagram för fler inspirerande bilder
          </h2>
          
          <div ref={el => elementsRef.current[2] = el} className="animated-element flex justify-center mb-10">
            <a href="https://www.instagram.com/marialouisharsalong/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all shadow-md hover:shadow-lg">
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {galleryImages.map((image, index) => <div key={index} ref={el => elementsRef.current[index + 3] = el} className="animated-element overflow-hidden rounded-lg cursor-pointer shadow-md" onClick={() => openLightbox(image)}>
              <div className="relative overflow-hidden h-64 md:h-[300px]">
                <img src={image} alt={`Salongarbete ${index + 1}`} className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-salon-dark/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white font-medium transform translate-y-4 hover:translate-y-0 transition-transform duration-300 bg-salon-gold/70 px-4 py-2 rounded-full backdrop-blur-sm">
                    Visa Större
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="text-center mt-10">
          <a href="https://bokning.voady.se/marialouis/marialouisebarbershop/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-3 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all shadow-md hover:shadow-lg transform hover:scale-105 duration-300">
            Boka Tid
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && <div className={cn("fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4", isAnimating ? "opacity-0" : "opacity-100 transition-opacity duration-300")} onClick={closeLightbox}>
          <div className={cn("relative max-w-5xl w-full max-h-[90vh] transition-all duration-500", isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100")} onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Förstorat salongarbete" className="max-w-full max-h-[80vh] object-contain mx-auto shadow-2xl rounded" />
            <button className="absolute top-4 right-4 text-white bg-salon-dark/70 rounded-full p-3 hover:bg-salon-gold transition-colors transform hover:rotate-90 duration-300" onClick={closeLightbox}>
              <X size={24} />
            </button>
          </div>
        </div>}
    </section>;
};
export default Gallery;
