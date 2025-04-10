
import React from 'react';
import ServiceCard, { ServiceItem } from './ServiceCard';

export interface ServiceCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: ServiceItem[];
}

interface ServiceGridProps {
  serviceCategories: ServiceCategory[];
  elementsRef?: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ serviceCategories, elementsRef }) => {
  if (!serviceCategories || !Array.isArray(serviceCategories)) {
    console.error("serviceCategories is undefined or not an array");
    return null; // Return null to prevent rendering if data is invalid
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceCategories.map((category, index) => (
        <div 
          key={category.title}
          ref={elementsRef ? el => elementsRef.current[index + 3] = el : undefined}
          className={elementsRef ? "animated-element opacity-0" : ""}
        >
          <ServiceCard
            icon={category.icon}
            title={category.title}
            description={category.description}
            services={category.services}
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
