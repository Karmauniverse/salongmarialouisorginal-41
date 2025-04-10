import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X, Phone } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)

    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
      document.body.style.overflow = ''
    }

    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetElement = document.querySelector(href)
    if (targetElement) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    } else {
      window.location.href = href
    }
  }

  const navLinks = [
    {
      name: 'Hem',
      href: '/',
    },
    {
      name: 'Behandlingar',
      href: '#services',
    },
    {
      name: 'Exklusivt',
      href: '#event',
    },
    {
      name: 'Galleri',
      href: '#gallery',
    },
    {
      name: 'Om Oss',
      href: '#about',
    },
    {
      name: 'Boka tid',
      href: '#contact',
    },
  ]

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-500',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container flex justify-between items-center">
        <a
          href="/"
          className="flex items-center"
          onClick={(e) => handleNavLinkClick(e, '/')}
        >
          <img
            src="/lovable-uploads/7f539d77-5c4f-417e-bc3b-e9a15c1628bf.png"
            alt="Maria Louis Logotyp"
            className={cn(
              'transition-all duration-300',
              isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
            )}
          />
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className={cn(
                'text-sm font-medium transition-all duration-300 relative hover:text-salon-gold py-1 px-1',
                isScrolled ? 'text-salon-dark' : 'text-white drop-shadow-md',
                'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-salon-gold after:transition-all after:duration-300 hover:after:w-full'
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+46854904050"
            className={cn(
              'flex items-center text-sm font-medium transition-all duration-300 relative hover:text-salon-gold py-1 px-3',
              isScrolled ? 'text-salon-dark' : 'text-white drop-shadow-md',
              'border border-salon-gold/30 rounded-full hover:bg-salon-gold/10'
            )}
          >
            <Phone size={12} className="mr-1.5" />
            <span style={{ fontSize: '11px' }}>08-549 040 50</span>
          </a>
        </div>

        <button
          className={cn(
            'md:hidden p-2 z-50 relative',
            isMobileMenuOpen
              ? 'text-white'
              : isScrolled
              ? 'text-salon-dark'
              : 'text-white'
          )}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 px-6 py-12 md:hidden transition-all duration-300 ease-in-out',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none translate-x-full'
        )}
        style={{
          backgroundColor: '#3C3024',
          backgroundImage: 'none',
          backdropFilter: 'none',
        }}
      >
        <div className="absolute top-6 left-0 right-0 flex justify-center">
          <img
            src="/lovable-uploads/7f539d77-5c4f-417e-bc3b-e9a15c1628bf.png"
            alt="Maria Louis Logotyp"
            className="h-20"
          />
        </div>

        <div className="flex flex-col items-center space-y-6 mt-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-lg font-medium text-white hover:text-salon-gold hover:tracking-wide transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="https://bokning.voady.se/marialouis/marialouisebarbershop/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-6 py-3 rounded-full bg-salon-gold text-white font-medium hover:bg-salon-gold/80 transition-all text-center shadow-lg"
          onClick={() => {
            setIsMobileMenuOpen(false)
            document.body.style.overflow = ''
          }}
        >
          Boka Nu
        </a>

        <a
          href="tel:+46854904050"
          className="flex items-center mt-4 text-white hover:text-salon-gold transition-all"
          onClick={() => {
            setIsMobileMenuOpen(false)
            document.body.style.overflow = ''
          }}
        >
          <Phone size={16} className="mr-2" />
          <span>08-549 040 50</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
