import React from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

const Hero = () => {
  const isMobile = useIsMobile()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/hero-startsida.webp"
          alt="Kvinna med elegant hårstil på Salong Maria Louis"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-top transition-all duration-500 ease-in-out"
          onError={(e) => {
            console.error('Hero image failed to load')
            const target = e.target as HTMLImageElement
            target.onerror = null
            target.style.display = 'none'
          }}
        />
      </div>

      {/* Frosted glass effect overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/[0.72]"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-salon-gold/20 text-salon-gold text-sm md:text-base font-medium rounded-full border border-salon-gold/30 backdrop-blur-sm">
              Salong
            </span>
          </div>

          <h1 className="font-playfair text-5xl md:text-6xl lg:text-8xl font-medium mb-6 leading-tight text-white">
            <span className="font-playfair text-4xl md:text-5xl lg:text-6xl block mb-1 text-white font-light tracking-wider">
              Maria Louis
            </span>
          </h1>

          <p className="md:text-xl lg:text-2xl text-salon-beige mb-6 max-w-xl mx-auto font-lora px-0 py-0 text-center font-normal text-lg">
            Sedan 2010 har vi förenat skönhet & omtanke – en prisbelönt salong
            med hjärta
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-3 bg-salon-gold text-white font-medium rounded-full hover:bg-salon-brown transition-all text-center shadow-md hover:shadow-lg duration-300 text-base md:text-lg"
            >
              Behandlingar
            </a>
            <a
              href="https://bokning.voady.se/marialouis/marialouisebarbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-salon-gold text-white font-medium rounded-full hover:bg-salon-gold/30 transition-all text-center backdrop-blur-sm hover:border-white text-base md:text-lg"
            >
              Boka Tid
            </a>
          </div>

          {isMobile && (
            <div className="mt-4">
              <a
                href="tel:+468-54904050"
                className="inline-flex items-center px-5 py-2 border border-salon-gold/60 text-white rounded-full backdrop-blur-sm hover:bg-salon-gold/20 transition-all"
              >
                <Phone size={16} className="mr-2" />
                08-549 040 50
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a
          href="#services"
          className="flex flex-col items-center text-white hover:text-salon-gold transition-colors"
        >
          <span className="text-sm font-light mb-2 tracking-wide">
            Bläddra Ner
          </span>
          <div className="rounded-full p-1 border border-white/30 hover:border-salon-gold/60 transition-colors">
            <ChevronDown size={18} className="animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
