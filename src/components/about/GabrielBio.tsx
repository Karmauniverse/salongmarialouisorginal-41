import React from 'react'
import FeatureItem from './FeatureItem'

interface GabrielBioProps {
  refCallback: (el: HTMLDivElement | null) => void
}

const GabrielBio: React.FC<GabrielBioProps> = ({ refCallback }) => {
  return (
    <div ref={refCallback} className="animated-element mt-10">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative md:h-auto order-1 md:order-2">
            <div className="h-full overflow-hidden">
              <img
                src="/lovable-uploads/gabriel-profile.jpg"
                alt="Gabriel"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>

          <div className="relative h-full bg-salon-cream/30 p-6 md:p-8 flex items-center justify-center order-2 md:order-1">
            <div className="max-w-md">
              <span className="text-sm text-salon-brown font-medium mb-1 block">
                Frisör & barberare
              </span>
              <h2 className="text-3xl font-serif font-medium mb-5">
                Möt <span className="text-salon-gold italic">Gabriel</span>
              </h2>

              <div className="space-y-4 text-salon-dark/80 mb-6">
                <p>
                  Gabriel är en erfaren frisör med över 20 år i branschen. Hans
                  passion för yrket och sinne för detaljer präglar varje
                  behandling, där han skapar både stil och självkänsla. Han
                  välkomnar både barn och vuxna, damer som herrar, och erbjuder
                  allt från klippningar och färg till modern barbering – alltid
                  med ett varmt bemötande och ett öga för det personliga.
                </p>

                <p></p>
              </div>

              <ul className="space-y-3 mb-5">
                {[
                  '20+ års erfarenhet',
                  'Utför både dam- och herrklippningar',
                  'Erbjuder även barbering',
                ].map((item, index) => (
                  <FeatureItem key={index} text={item} />
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GabrielBio
