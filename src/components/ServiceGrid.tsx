
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
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ serviceCategories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceCategories.map((category, index) => (
        <ServiceCard
          key={category.title}
          icon={category.icon}
          title={category.title}
          description={category.description}
          services={category.services}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;
