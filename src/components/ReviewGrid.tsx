
import React from 'react';
import { Facebook, Star } from 'lucide-react';

interface ReviewProps {
  name: string;
  text: string;
  rating: number;
}

interface ReviewGridProps {
  reviews: ReviewProps[];
}

const ReviewGrid: React.FC<ReviewGridProps> = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start mb-4">
            <div className="p-2 bg-salon-gold/10 rounded-full mr-3">
              <Facebook className="text-salon-gold w-5 h-5" />
            </div>
            <h3 className="font-medium text-lg text-salon-dark">{review.name}</h3>
          </div>
          <div className="flex mb-3">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-salon-dark/80 leading-relaxed">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewGrid;
