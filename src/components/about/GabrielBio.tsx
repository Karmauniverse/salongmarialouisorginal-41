import React from 'react';
import FeatureItem from './FeatureItem';
interface GabrielBioProps {
  refCallback: (el: HTMLDivElement | null) => void;
}
const GabrielBio: React.FC<GabrielBioProps> = ({
  refCallback
}) => {
  return <div ref={refCallback} className="animated-element mt-10">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-full bg-salon-cream/30 p-6 md:p-8 flex items-center justify-center">
            <div className="max-w-md">
              <span className="text-sm text-salon-brown font-medium mb-1 block">Frisör & barberare</span>
              <h2 className="text-3xl font-serif font-medium mb-5">
                Möt <span className="text-salon-gold italic">Gabriel</span>
              </h2>
              
              <div className="space-y-4 text-salon-dark/80 mb-6">
                <p>
                  Gabriel är en erfaren och professionell frisör med över 20 år i branschen. 
                  Hans passion för kreativitet och frisöryrket genomsyrar varje behandling, 
                  där han med trygghet och känsla för detaljer skapar både stil och självkänsla hos sina kunder.
                </p>
                
                <p>
                  Han lyssnar alltid in dina önskemål och välkomnar både barn och vuxna, 
                  damer som herrar. Gabriel utför alla typer av klippningar och färgbehandlingar 
                  – samt modern barbering – med ett varmt bemötande och ett öga för det personliga.
                </p>
              </div>
              
              <ul className="space-y-3 mb-5">
                {["Skicklig barberare", "Specialiserad på herr- och barnklippning", "20+ års erfarenhet"].map((item, index) => <FeatureItem key={index} text={item} />)}
              </ul>
              
              <div className="flex flex-wrap items-center gap-4">
                
              </div>
            </div>
          </div>
          
          <div className="relative md:h-auto">
            <div className="h-full overflow-hidden">
              <img src="/lovable-uploads/gabriel-profile.jpg" alt="Gabriel" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default GabrielBio;