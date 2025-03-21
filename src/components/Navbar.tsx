import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navLinks = [{
    name: 'Hem',
    href: '#home'
  }, {
    name: 'Om Oss',
    href: '#about'
  }, {
    name: 'Tjänster',
    href: '#services'
  }, {
    name: 'Galleri',
    href: '#gallery'
  }, {
    name: 'Omdömen',
    href: '#testimonials'
  }, {
    name: 'Kontakt',
    href: '#contact'
  }];
  return <>
      <nav className={cn('fixed w-full z-50 transition-all duration-500', isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6')}>
        <div className="container flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <img src="/lovable-uploads/7f539d77-5c4f-417e-bc3b-e9a15c1628bf.png" alt="Maria Louis Logotyp" className="h-16 md:h-20 mr-3 transition-all duration-300" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className={cn("text-sm font-medium transition-all duration-300 relative hover:text-salon-gold py-2 px-1", isScrolled ? "text-salon-dark" : "text-white drop-shadow-md", "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-salon-gold after:transition-all after:duration-300 hover:after:w-full")}>
                {link.name}
              </a>)}
            <a href="#contact" className="px-5 py-2 rounded-full bg-salon-gold text-white font-medium text-sm hover:bg-salon-brown transition-all shadow-md hover:shadow-lg transform hover:scale-105">
              Boka Nu
            </a>
          </div>

          {/* Mobile menu button */}
          <button className={cn("md:hidden p-2 z-50 relative", isMobileMenuOpen ? "text-salon-dark" : isScrolled ? "text-salon-dark" : "text-white")} onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-all duration-500 ease-in-out md:hidden", isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none")}>
          <div className="flex flex-col space-y-6 items-center">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-salon-dark text-lg font-medium relative after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:w-1/2 after:mx-auto after:h-0.5 after:bg-salon-gold after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:right-0 hover:text-salon-gold pb-1" onClick={toggleMobileMenu}>
                {link.name}
              </a>)}
            <a href="#contact" className="w-full text-center px-5 py-3 rounded-full bg-salon-gold text-white font-medium mt-4 hover:bg-salon-brown transition-all" onClick={toggleMobileMenu}>
              Boka Nu
            </a>
          </div>
        </div>
      </nav>
      
      {/* Floating Social Media Icons */}
      <div className="fixed right-6 bottom-1/3 z-40 flex flex-col gap-3 py-3 px-2 backdrop-blur-sm shadow-md bg-white rounded-sm">
        <a href="https://www.instagram.com/salongmarialouiis/" target="_blank" rel="noopener noreferrer" className="text-salon-dark hover:text-salon-gold transition-colors p-2 hover:scale-110 transform duration-300" aria-label="Instagram">
          <Instagram size={18} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100063562662842" target="_blank" rel="noopener noreferrer" className="text-salon-dark hover:text-salon-gold transition-colors p-2 hover:scale-110 transform duration-300" aria-label="Facebook">
          <Facebook size={18} className="bg-transparent" />
        </a>
      </div>
    </>;
};
export default Navbar;