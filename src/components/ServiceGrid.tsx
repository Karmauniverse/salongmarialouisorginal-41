
import React, { useState } from 'react';
import ServiceCard, { ServiceItem } from './ServiceCard';
import { Scissors, Droplet, Sparkles, Palette, SparkleIcon } from 'lucide-react';

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
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceCategories.map((category, index) => (
        <ServiceCard
          key={category.title}
          icon={category.icon}
          title={category.title}
          description={category.description}
          services={category.services}
          isActive={activeCategory === index}
          onMouseEnter={() => setActiveCategory(index)}
          onMouseLeave={() => setActiveCategory(null)}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;
