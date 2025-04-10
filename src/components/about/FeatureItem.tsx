
import React from 'react';
import { Check } from 'lucide-react';

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <li className="flex items-center group">
      <div className="mr-3 p-1 bg-salon-gold/10 rounded-full group-hover:bg-salon-gold/30 transition-all duration-300">
        <Check size={16} className="text-salon-gold" />
      </div>
      <span className="text-salon-dark/90 group-hover:text-salon-dark transition-colors duration-300">{text}</span>
    </li>
  );
};

export default FeatureItem;
