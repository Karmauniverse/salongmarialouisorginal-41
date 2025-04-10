
import React from 'react';
import { Scissors, Droplet, Sparkles, Palette, SparkleIcon } from 'lucide-react';
import { ServiceCategory } from '../components/ServiceGrid';

export const serviceCategories: ServiceCategory[] = [
  {
    icon: React.createElement(Scissors, { size: 28, className: "text-salon-gold" }),
    title: "Klippning",
    description: "Professionell klippning anpassad efter din stil och önskemål.",
    services: [
      { name: "Kort hår", price: "fr. 390 kr" },
      { name: "Mellanlångt hår", price: "fr. 470 kr" },
      { name: "Ny frisyr/tjockt hår", price: "fr. 560 kr" },
      { name: "Ungdom (8–18 år)", price: "350 kr" },
      { name: "Barnklippning (t.o.m. 7 år)", price: "290 kr" },
      { name: "Pensionärer", price: "fr. 350 kr" }
    ]
  },
  {
  icon: React.createElement(Palette, { size: 28, className: "text-salon-gold" }),
  title: "Folieslingor & Färg",
  description: "Professionell färgning och slingor för ett perfekt resultat.",
  services: [
    { name: "Folieslingor inkl. klipp - Kort hår", price: "fr. 1 590 kr" },
    { name: "Folieslingor inkl. klipp - Mellanlångt", price: "fr. 1 930 kr" },
    { name: "Folieslingor inkl. klipp - Långt", price: "fr. 2 230 kr" },
    { name: "Balayage inkl. klipp", price: "fr. 2 530 kr" },

    // Underrubrik – visas som fet text utan pris
    { name: "Folieslingor (utan klipp)", price: "", isSubheading: true },

    { name: "Kort hår/botten", price: "fr. 1 140 kr" },
    { name: "Mellanlångt hår", price: "fr. 1 690 kr" },
    { name: "Långt/tjockt hår", price: "fr. 1 990 kr" }
  ]
  },
  {
    icon: React.createElement(Droplet, { size: 28, className: "text-salon-gold" }),
    title: "Färgbehandlingar",
    description: "Färgning och toning för ett perfekt resultat.",
    services: [
      { name: "Bottenfärg", price: "fr. 790 kr" },
      { name: "Toning", price: "fr. 740 kr" },
      { name: "Slingor i hätta", price: "930 kr" },
      
      // Ny underrubrik för Färg inkl. Klipp
      { name: "Färg inkl. Klipp", price: "", isSubheading: true },
      
      { name: "Kort hår", price: "fr. 1210 kr" },
      { name: "Mellan", price: "fr. 1460 kr" },
      { name: "Långt", price: "fr. 1650 kr" },
      { name: "Extra långt", price: "fr. 1700 kr" }
    ]
  },
  {
    icon: React.createElement(Scissors, { size: 28, className: "text-salon-gold" }),
    title: "Barberaren",
    description: "Expertklippning för herrar och skäggvård.",
    services: [
      { name: "Herrklippning", price: "fr. 390 kr" },
      { name: "Kort skägg", price: "fr. 250 kr" },
      { name: "Långt skägg", price: "fr. 290 kr" },
      { name: "Klipp + kort skägg", price: "fr. 550 kr" },
      { name: "Klipp + långt skägg", price: "650 kr" }
    ]
  },
  {
    icon: React.createElement(SparkleIcon, { size: 28, className: "text-salon-gold" }),
    title: "Keratinbehandling",
    description: "Professionell keratinbehandling för glansigt och friskt hår.",
    services: [
      { name: "Kort hår", price: "1 540–1 940 kr" },
      { name: "Mellanlångt hår", price: "2 190–2 440 kr" },
      { name: "Långt hår", price: "fr. 2 740 kr" }
    ]
  },
  {
    icon: React.createElement(Sparkles, { size: 28, className: "text-salon-gold" }),
    title: "Övriga Behandlingar",
    description: "Kompletterande skönhetsbehandlingar för ditt välbefinnande.",
    services: [
      { name: "Fransfärg", price: "220 kr" },
      { name: "Brynfärg", price: "220 kr" },
      { name: "Ögonbrynsplock", price: "199 kr" },
      { name: "Franspaket", price: "420 kr" },
      { name: "Olaplex med behandling", price: "250 kr" },
      { name: "Fristående Olaplex", price: "500 kr" },
      { name: "Öronhåltagning - Ett hål", price: "190 kr" },
      { name: "Öronhåltagning - Två hål", price: "370 kr" }
    ]
  }
];
