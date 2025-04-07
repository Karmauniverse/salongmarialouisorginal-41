
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background image with proper path and fallback */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/lovable-uploads/e12c1cbf-6e18-442f-95a4-9ca53561bc18.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div className="container mx-auto px-4 z-20 text-center">
        {/* Logo with proper path and fallback */}
        <img 
          src="/lovable-uploads/38443ee9-4f2f-49c8-8d41-b0657c4fb46a.png" 
          alt="MariaLouis Salong Logo" 
          className="mx-auto mb-8 w-64 md:w-80"
          onError={(e) => {
            e.currentTarget.src = '/lovable-uploads/38443ee9-4f2f-49c8-8d41-b0657c4fb46a.png';
            console.log('Logo image failed to load, using fallback');
          }}
        />
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Din Frisörsalong i Hägersten
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Sedan 2010 har vi förenat skönhet & omtanke – en prisbelönt Salong med hjärta!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all"
          >
            Boka Nu
          </Link>
          <Link 
            to="/services"
            className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-semibold py-3 px-8 rounded-full text-lg transition-all"
          >
            Våra Tjänster
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
