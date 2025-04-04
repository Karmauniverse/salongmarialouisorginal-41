
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    
    // Prevent background scrolling when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = '';
    }
    
    // Handle home link
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Check if this is a separate page route
    if (href === '/reviews' || href === '/event') {
      window.location.href = href;
      return;
    }
    
    // Get the element to scroll to
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  const navLinks = [
    {
      name: 'Hem',
      href: '/'
    }, 
    {
      name: 'Behandlingar',
      href: '#services'
    }, 
    {
      name: 'Galleri',
      href: '#gallery'
    }, 
    {
      name: 'Om Oss',
      href: '#about'
    }, 
    {
      name: 'Event',
      href: '/event'
    },
    {
      name: 'Kontakt',
      href: '#contact'
    }
  ];

  return (
    <>
      <nav className={cn(
        'fixed w-full z-50 transition-all duration-500',
        isScrolled 
          ? 'backdrop-blur-lg bg-white/70 shadow-md py-3' 
          : 'bg-transparent py-6'
      )}>
        <div className="container flex justify-between items-center">
          <a href="/" className="flex items-center" onClick={(e) => handleNavLinkClick(e, '/')}>
            <img 
              src="/lovable-uploads/7f539d77-5c4f-417e-bc3b-e9a15c1628bf.png" 
              alt="Maria Louis Logotyp" 
              className="h-16 md:h-20 mr-3 transition-all duration-300" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative hover:text-salon-gold py-2 px-1",
                  isScrolled ? "text-salon-dark" : "text-white drop-shadow-md",
                  "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-salon-gold after:transition-all after:duration-300 hover:after:w-full"
                )}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+46701234567" 
              className={cn(
                "flex items-center text-sm font-medium transition-all duration-300 relative hover:text-salon-gold py-2 px-3",
                isScrolled ? "text-salon-dark" : "text-white drop-shadow-md",
                "border border-salon-gold/30 rounded-full hover:bg-salon-gold/10"
              )}
            >
              <Phone size={14} className="mr-1.5" />
              070-123 45 67
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className={cn(
              "md:hidden p-2 z-50 relative",
              isMobileMenuOpen ? "text-salon-dark" : isScrolled ? "text-salon-dark" : "text-white"
            )} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Fixed position with solid background color */}
        <div className={cn(
          "fixed inset-0 z-40 flex flex-col pt-24 px-6 transition-all duration-500 ease-in-out md:hidden shadow-lg",
          "bg-salon-cream",
          isMobileMenuOpen 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-full pointer-events-none"
        )}>
          <div className="flex flex-col space-y-6 items-center max-h-[calc(100vh-100px)] overflow-auto">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-salon-dark text-lg font-medium relative after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:w-1/2 after:mx-auto after:h-0.5 after:bg-salon-gold after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:right-0 hover:text-salon-gold pb-1 block" 
                onClick={(e) => handleNavLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://bokning.voady.se/marialouis/marialouisebarbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-5 py-3 rounded-full bg-salon-gold text-white font-medium mt-4 hover:bg-salon-brown transition-all" 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Boka Nu
            </a>
            <a 
              href="tel:+46701234567" 
              className="flex items-center justify-center w-full text-center px-5 py-2.5 rounded-full border border-salon-gold text-salon-dark font-medium hover:bg-salon-gold/30 transition-all"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              <Phone size={16} className="mr-2" />
              070-123 45 67
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
