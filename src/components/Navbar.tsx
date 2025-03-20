import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
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
  return <nav className={cn('fixed w-full z-50 transition-all duration-300', isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6')}>
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img src="/lovable-uploads/7f539d77-5c4f-417e-bc3b-e9a15c1628bf.png" alt="Maria Louis Logotyp" className="h-12 mr-3" />
          <span className="font-serif text-xl font-medium text-salon-dark hidden sm:inline-block sm:text-xl">Maria Louis</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="nav-link text-sm font-medium">
              {link.name}
            </a>)}
          <a href="#contact" className="px-5 py-2 rounded-sm bg-salon-gold text-white font-medium text-sm hover:bg-opacity-90 transition-all">
            Boka Nu
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-salon-dark p-2" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden", isMobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex flex-col space-y-8 items-center">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-salon-dark text-lg font-medium" onClick={toggleMobileMenu}>
              {link.name}
            </a>)}
          <a href="#contact" className="w-full text-center px-5 py-3 rounded-sm bg-salon-gold text-white font-medium" onClick={toggleMobileMenu}>
            Boka Nu
          </a>
        </div>
      </div>
    </nav>;
};
export default Navbar;