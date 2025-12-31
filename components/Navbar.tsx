'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#services', label: 'Services' },
    { href: '#booking', label: 'Book' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-300 ${
          isScrolled
            ? 'py-4 px-8 lg:px-16 bg-cream/95 backdrop-blur-md'
            : 'py-6 px-8 lg:px-16 bg-gradient-to-b from-cream to-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-serif text-2xl font-light tracking-[0.15em] text-charcoal">
          ELORAE
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.75rem] tracking-[0.15em] uppercase text-warm-gray hover:text-charcoal transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
          aria-label="Open menu"
        >
          <span className="w-6 h-px bg-charcoal transition-all duration-300" />
          <span className="w-6 h-px bg-charcoal transition-all duration-300" />
        </button>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-cream transition-all duration-500 ease-out ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-8 w-10 h-10 flex items-center justify-center"
          aria-label="Close menu"
        >
          <span className="absolute w-6 h-px bg-charcoal rotate-45" />
          <span className="absolute w-6 h-px bg-charcoal -rotate-45" />
        </button>

        {/* Menu Content */}
        <div className="h-full flex flex-col items-center justify-center">
          {/* Logo in menu */}
          <a
            href="#"
            onClick={handleLinkClick}
            className="font-serif text-xl tracking-[0.2em] text-rose mb-16"
          >
            ELORAE
          </a>

          {/* Nav Links */}
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ${
                  isMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 100 + 200}ms` : '0ms' }}
              >
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-serif text-4xl sm:text-5xl font-light text-charcoal hover:text-rose transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Bottom Info */}
          <div
            className={`absolute bottom-12 text-center transition-all duration-500 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '600ms' : '0ms' }}
          >
            <p className="text-[0.7rem] tracking-[0.2em] uppercase text-warm-gray mb-2">
              Las Vegas, NV
            </p>
            <a
              href="https://instagram.com/eloraenails"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.7rem] tracking-[0.15em] uppercase text-rose hover:text-charcoal transition-colors"
            >
              @eloraenails
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
