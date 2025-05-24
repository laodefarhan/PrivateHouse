"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Info, Phone, Building, Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Beranda', href: '#beranda', icon: <Home className="h-4 w-4 mr-1" /> },
    { name: 'Properti', href: '#properties', icon: <Building className="h-4 w-4 mr-1" /> },
    { name: 'Informasi', href: '#information', icon: <Info className="h-4 w-4 mr-1" /> },
    { name: 'Tentang Kami', href: '#about-us', icon: <Landmark className="h-4 w-4 mr-1" /> },
    { name: 'Kontak', href: '#contact', icon: <Phone className="h-4 w-4 mr-1" /> },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center text-2xl font-bold"
        >
          <span className={cn(
            "transition-colors duration-300",
            scrolled ? "text-blue-600" : "text-white"
          )}>
            Private<span className="text-yellow-500">House</span>.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center font-medium hover:text-blue-600 transition-colors",
                scrolled ? "text-gray-700" : "text-white"
              )}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={scrolled ? "text-gray-700" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-gray-700" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl p-4 absolute top-full left-0 w-full">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center text-gray-700 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;