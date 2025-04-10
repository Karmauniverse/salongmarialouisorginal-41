
import React from 'react';
import { Facebook, Star } from 'lucide-react';
import { Card } from './ui/card';

interface Review {
  name: string;
  role?: string;
  text: string;
  rating: number;
}

interface ReviewGridProps {
  reviews: Review[];
}

const ReviewGrid: React.FC<ReviewGridProps> = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {reviews.map((review, index) => (
        <Card 
          key={index} 
          className="p-6 hover:shadow-lg transition-all duration-300 hover:border-salon-gold/30 flex flex-col group"
        >
          <div className="flex-grow">
            <p className="text-sm text-salon-dark/80 leading-relaxed mb-4 italic">
              "{review.text}"
            </p>
          </div>
          
          <div className="flex items-center mt-auto">
            <div className="p-2 bg-salon-gold/10 rounded-full mr-3 group-hover:bg-salon-gold/20 transition-colors">
              <Facebook className="w-4 h-4 text-salon-gold" />
            </div>
            
            <div className="flex-grow">
              <p className="font-medium text-salon-dark">
                {review.name}
                {review.role && <span className="text-xs text-salon-dark/60 ml-1">({review.role})</span>}
              </p>
              
              <div className="flex">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400 mr-0.5" />
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ReviewGrid;
