
import React from 'react';

interface AboutIntroProps {
  refCallback: (el: HTMLDivElement | null) => void;
}

const AboutIntro: React.FC<AboutIntroProps> = ({ refCallback }) => {
  return (
    <div 
      ref={refCallback} 
      className="animated-element text-center max-w-4xl mx-auto mb-14"
    >
      <span className="inline-block px-6 py-2 bg-salon-gold/10 text-salon-gold text-sm font-medium rounded-full mb-4">
        Om Oss
      </span>
      
      <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">
        Vårt <span className="text-salon-gold italic">Team</span>
      </h2>
      
      <div className="space-y-4 text-salon-dark/80 my-0 mx-0">
        <p className="text-center">Sedan 2010 har Maria Louis varit en självklar del av Hägersten 
en plats där skönhet, kvalitet och omtanke möts. Ett av våra största ögonblick var när vi, 
tillsammans med våra fantastiska kunder, blev nominerade till Årets Lokala Företag – en ära vi aldrig 
hade uppnått utan ert stöd.</p>
        
        <p className="text-center">
          Genom åren har vi delat både framgångar och utmaningar, men det som alltid har drivit oss framåt är er lojalitet och ert förtroende. Varje besök, varje samtal och varje leende på salongen betyder allt för oss.
        </p>
        
        <p className="text-center">
          På Maria Louis arbetar frisörer och barberare under samma tak, och vi är stolta över att erbjuda en förstklassig service i en välkomnande och personlig miljö. Här står du i fokus – vi lyssnar på dina önskemål och strävar efter att varje besök ska kännas som en avkopplande upplevelse.
        </p>
      </div>
    </div>
  );
};

export default AboutIntro;
