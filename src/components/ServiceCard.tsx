
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ServiceItem {
  name: string;
  price: string;
  isSubheading?: boolean;
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: ServiceItem[];
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  services,
  isActive,
  onMouseEnter,
  onMouseLeave
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300",
        isActive ? "transform scale-[1.02] shadow-xl" : "",
        isExpanded ? "shadow-xl" : ""
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
        <div className="p-6">
          <div className="flex items-start mb-4">
            <div className="p-3 rounded-full bg-salon-gold/10 flex-shrink-0 mr-4">
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif font-medium text-salon-dark mb-2">{title}</h3>
              <p className="text-salon-dark/70 text-sm">{description}</p>
            </div>
          </div>
          
          <CollapsibleTrigger asChild>
            <button
              className="mt-2 w-full flex items-center justify-center py-2 text-salon-gold hover:text-salon-brown transition-colors font-medium"
              onClick={toggleExpanded}
            >
              {isExpanded ? (
                <>
                  <span>Visa mindre</span>
                  <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  <span>Visa priser</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <div className="border-t border-salon-beige/30">
            <div className="px-6 py-4 space-y-3">
              {services.map((service, index) => (
                service.isSubheading ? (
                  <div 
                    key={index} 
                    className={cn(
                      "py-3 mt-6 mb-3",
                      index !== 0 && "border-t border-salon-beige/30 pt-5"
                    )}
                  >
                    <span className="font-serif font-medium text-salon-dark text-lg">{service.name}</span>
                  </div>
                ) : (
                  <div 
                    key={index} 
                    className={cn(
                      "py-3 flex flex-col",
                      index !== services.length - 1 && !services[index + 1]?.isSubheading && "border-b border-salon-beige/30"
                    )}
                  >
                    <span className="font-medium text-salon-dark">{service.name}</span>
                    <span className="text-salon-brown mt-1">{service.price}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ServiceCard;
