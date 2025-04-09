
import React from 'react';
import { Facebook, Star } from 'lucide-react';

interface ReviewProps {
  name: string;
  role?: string;
  text: string;
  rating: number;
}

interface ReviewGridProps {
  reviews: ReviewProps[];
}

const ReviewGrid: React.FC<ReviewGridProps> = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-salon-gold/30 hover:bg-salon-cream/10 group"
        >
          <p className="text-salon-dark/80 leading-relaxed mb-6 italic font-lora">
            "{review.text}"
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-3 w-10 h-10 rounded-full bg-salon-gold/10 flex items-center justify-center group-hover:bg-salon-gold/20 transition-colors">
                <Facebook className="text-salon-gold w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-salon-dark">{review.name}</h3>
                {review.role && (
                  <p className="text-sm text-salon-dark/60">{review.role}</p>
                )}
              </div>
            </div>
            <div className="flex">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewGrid;
