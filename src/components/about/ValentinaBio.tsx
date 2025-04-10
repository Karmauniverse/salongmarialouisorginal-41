import React from 'react'
import { Instagram } from 'lucide-react'
import FeatureItem from './FeatureItem'
interface ValentinaBioProps {
  refCallback: (el: HTMLDivElement | null) => void
}
const ValentinaBio: React.FC<ValentinaBioProps> = ({ refCallback }) => {
  return (
    <div ref={refCallback} className="animated-element mt-10">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative md:h-auto">
            <div className="h-full overflow-hidden">
              <img
                src="/lovable-uploads/5573a92a-5f13-4c18-9be6-e18b749cd68e.png"
                alt="Valentina"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent md:bg-gradient-to-r"></div>
            </div>
          </div>

          <div className="relative h-full bg-salon-cream/30 p-6 md:p-8 flex items-center justify-center py-[44px]">
            <div className="max-w-md">
              <span className="text-sm text-salon-brown font-medium mb-1 block">
                Keratinspecialist
              </span>
              <h2 className="text-3xl font-serif font-medium mb-5">
                Möt <span className="text-salon-gold italic">Valentina</span>
              </h2>

              <div className="space-y-4 text-salon-dark/80 mb-6">
                <p>
                  Valentina är vår engagerade keratinspecialist och expert på
                  hårstruktur och vård. Med sin djupa kunskap och passion för
                  skönhet är hon alltid uppdaterad med de senaste behandlingarna
                  och den vård ditt hår behöver.
                </p>

                <p>
                  Efter en behandling hos Valentina kan du förvänta dig en
                  verklig "WOW"-känsla, ditt hår kommer att kännas friskt,
                  glänsande och lätt att styla, samtidigt som du får välvårdat
                  och fräscht hår.
                </p>
              </div>

              <ul className="space-y-3 mb-5">
                {[
                  'Expert på keratinbehandlingar',
                  'Skapar friskt, glänsande och lättstylat hår',
                  'Erbjuder individuellt anpassade behandlingar',
                ].map((item, index) => (
                  <FeatureItem key={index} text={item} />
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.instagram.com/hair.skinsprofessional__/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2 border border-salon-gold text-salon-dark hover:bg-salon-gold/10 transition-all font-medium rounded-full"
                >
                  <Instagram size={18} className="mr-2 text-salon-gold" />
                  <span>Hair & Skin Professional</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ValentinaBio
