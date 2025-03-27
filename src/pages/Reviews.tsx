
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Facebook, Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Kevin",
      text: "A big thanks goes to the best hair stylist in the world, Maria Louise, for fixing my hair before the Swedish Idol Final. Thank you!",
      rating: 5
    }, 
    {
      name: "Magdalena",
      text: "Tack för en otrolig fin uppsättning på mig och mina tärnor. Vi är så glada att just ni ordnade våra bröllopsfrisyrer!",
      rating: 5
    }, 
    {
      name: "Jasmina",
      text: "Maria är jätteduktig på sitt jobb och gör allting på bästa sätt.",
      rating: 5
    }, 
    {
      name: "Nesrin",
      text: "Toppenbra frisörer som lyssnar på ens önskemål och vägleder en om man är osäker. Duktiga på att klippa och färga!",
      rating: 5
    }
  ];
  
  return (
    <div className="min-h-screen bg-salon-cream">
      <Navbar />
      <section className="py-20 pt-32 bg-gradient-to-b from-white to-salon-cream/30">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full mb-4">
              Recensioner
            </span>
            
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              Våra Kunders Omdömen
            </h1>
            
            <p className="text-salon-dark/80">
              Läs vad våra nöjda kunder säger om sina upplevelser hos oss på Maria Louis Hårsalong.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Reviews;
