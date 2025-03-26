
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export type ServiceItem = {
  name: string;
  price: string;
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: ServiceItem[];
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  services,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => {
  // Create an intro text based on title
  const getIntroText = (title: string) => {
    switch (title) {
      case "Klippning":
        return "Alla klippningar inkluderar tvätt, fön och styling – vi tar hand om hela upplevelsen.";
      case "Folieslingor & Färg":
        return "Professionell färgning för ett vackert och hållbart resultat med produkter av högsta kvalitet.";
      case "Färgbehandlingar":
        return "Våra färgbehandlingar ger ditt hår fantastisk lyster och djup med långvarig effekt.";
      case "Barberaren":
        return "Traditionellt hantverk med moderna tekniker för perfekt resultat för män av alla åldrar.";
      case "Keratinbehandling":
        return "Återställ hårets naturliga glans och mjukhet med vår intensiva keratin-behandlingsterapi.";
      case "Övriga Behandlingar":
        return "Kompletterande behandlingar för att förfina och förhöja din look till perfektion.";
      default:
        return "";
    }
  };

  return (
    <div 
      className="group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col transform hover:-translate-y-1">
        <div className="p-8 flex-grow">
          <div className="p-3 bg-salon-gold/10 rounded-full inline-block mb-6 group-hover:bg-salon-gold/20 transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-serif mb-4">{title}</h3>
          <p className="text-salon-dark/80 mb-3">{description}</p>
          <p className="text-salon-gold italic mb-6 text-sm">{getIntroText(title)}</p>
          
          <div className="space-y-3">
            {services.map((service) => {
              // Split the price string to format it correctly
              const priceText = service.price.includes("från") 
                ? service.price.replace("från", "fr.") 
                : service.price;
              
              return (
                <div 
                  key={service.name} 
                  className="border-b border-salon-beige py-3 flex justify-between items-center hover:border-salon-gold transition-colors duration-300"
                >
                  <span className="font-medium text-salon-dark transition-colors duration-300">
                    {service.name}
                  </span>
                  <span className="text-salon-brown font-bold">
                    {priceText}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
