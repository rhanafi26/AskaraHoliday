import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FlagIcon } from './FlagIcon';
import { FaBars, FaTimes, FaBus } from 'react-icons/fa';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = {
    id: [
      { name: 'Beranda', href: '#hero' },
      { name: 'Booking', href: '#booking' },
      { name: 'Layanan', href: '#services' },
      { name: 'Tentang', href: '#about' },
      { name: 'Paket', href: '#packages' },
      { name: 'Testimoni', href: '#testimonials' },
      { name: 'Galeri', href: '#gallery' },
      { name: 'Kontak', href: '#contact' },
    ],
    en: [
      { name: 'Home', href: '#hero' },
      { name: 'Booking', href: '#booking' },
      { name: 'Services', href: '#services' },
      { name: 'About', href: '#about' },
      { name: 'Packages', href: '#packages' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Contact', href: '#contact' },
    ]
  };

  const links = language === 'id' ? navLinks.id : navLinks.en;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <div className="container mx-auto">
        {/* Floating Capsule Container */}
        <div className={`
          max-w-7xl mx-auto 
          transition-all duration-500
          ${isScrolled 
            ? 'bg-primary/95 backdrop-blur-xl shadow-neumo-dark' 
            : 'bg-primary/80 backdrop-blur-md border border-gold/20'
          }
          rounded-full px-2 py-1.5
          shadow-lg
        `}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 px-3">
              <div className="relative">
                <div className="w-11 h-11 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/20">
                  <FaBus className="text-primary text-xl" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-bold text-sm transition-colors ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}>
                  Regina Trans
                </h1>
                <p className={`text-[10px] transition-colors ${
                  isScrolled ? 'text-gray-400' : 'text-gold/80'
                }`}>
                  {language === 'id' ? 'Teman Travelmu' : 'Your Travel Friend'}
                </p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`
                    text-sm font-medium px-4 py-2 rounded-full transition-all
                    text-gray-300 hover:text-white hover:bg-white/10
                  `}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Language Toggle - Flat Flag */}
              <button
                onClick={toggleLanguage}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-full transition-all ml-1
                  bg-white/10 hover:bg-white/20 text-white
                `}
              >
                <FlagIcon country={language === 'id' ? 'id' : 'en'} className="w-5 h-4" />
                <span className="text-xs font-medium">
                  {language === 'id' ? 'ID' : 'EN'}
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden px-3 py-2 text-white"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-primary/95 backdrop-blur-xl rounded-2xl shadow-neumo-dark p-3 flex flex-col gap-1 border border-gold/10">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-xl transition-all text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent/10 text-accent hover:bg-accent/20 transition-all text-sm font-medium mt-1"
              >
                <FlagIcon country={language === 'id' ? 'id' : 'en'} className="w-5 h-4" />
                {language === 'id' ? 'Bahasa Indonesia' : 'English'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;