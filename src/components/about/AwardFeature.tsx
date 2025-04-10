
import React from 'react';
import { Award } from 'lucide-react';

interface AwardFeatureProps {
  title: string;
  description: string;
}

const AwardFeature: React.FC<AwardFeatureProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="p-2 bg-salon-gold/10 rounded-full inline-block mb-3 group-hover:bg-salon-gold/20 transition-all duration-300">
        <Award size={20} className="text-salon-gold" />
      </div>
      <h3 className="text-lg font-serif mb-2 text-salon-dark">{title}</h3>
      <p className="text-salon-dark/80 text-sm">
        {description}
      </p>
    </div>
  );
};

export default AwardFeature;
