import React from 'react'
import AwardFeature from './AwardFeature'

interface MariaBioProps {
  refCallback: (el: HTMLDivElement | null) => void
}

const MariaBio: React.FC<MariaBioProps> = ({ refCallback }) => {
  return (
    <div ref={refCallback} className="animated-element mb-16">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-full bg-salon-cream/30 p-6 md:p-8 flex items-center justify-center order-2 md:order-1">
            <div className="max-w-md">
              <span className="text-sm text-salon-brown font-medium mb-1 block">
                Grundare & keratinspecialist
              </span>
              <h2 className="text-3xl font-serif font-medium mb-5">
                Möt <span className="text-salon-gold italic">Maria</span>
              </h2>

              <div className="space-y-4 text-salon-dark/80 mb-6">
                <p>
                  Maria är en passionerad och erfaren frisör med över 35 års
                  arbete inom branschen och grundaren av salongen. Sedan 2010
                  har hon drivit sin salong med stort engagemang och hjärta, där
                  hon sätter kundens behov och önskemål i centrum.
                </p>

                <p>
                  Med en genuin förmåga att få sina kunder att känna sig som
                  hemma, har Maria skapat en miljö av trygghet och välkomnande.
                  Hon är en lyhörd frisör som alltid ser till att varje kund
                  känner sig förstådd och omhändertagen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <AwardFeature
                  title="Expertis"
                  description="Certifierad keratinbehandlare och expert på avancerade behandlingar för glansigt och starkt hår."
                />

                <AwardFeature
                  title="Utmärkelser"
                  description="Nominerad till Årets Lokala Företag – Salong inom Stockholm stad, ett bevis på högsta kvalitet."
                />
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2 md:h-auto">
            <div className="h-full overflow-hidden">
              <img
                src="/lovable-uploads/4d446271-aa78-473e-be1e-ae8d64314e46.png"
                alt="Maria Louis med diplom"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MariaBio
