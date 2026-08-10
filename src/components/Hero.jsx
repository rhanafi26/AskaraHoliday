import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: 'Regina Trans',
      subtitle: 'Teman Travelmu',
      description: 'Penyedia jasa sewa bus, mobil, dan hiace premium untuk perjalanan bisnis, wisata, dan corporate event. Aman, nyaman, dan terpercaya.',
      cta: 'Booking Sekarang',
      cta2: 'Lihat Layanan',
      badge: '✨ Terpercaya Sejak 2018'
    },
    en: {
      title: 'Regina Trans',
      subtitle: 'Your Travel Friend',
      description: 'Premium bus, car, and hiace rental services for business travel, tourism, and corporate events. Safe, comfortable, and trustworthy.',
      cta: 'Book Now',
      cta2: 'View Services',
      badge: '✨ Trusted Since 2018'
    }
  };

  const data = language === 'id' ? content.id : content.en;

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-primary">
      {/* Background - Left side black, Right side image with gradient */}
      <div className="absolute inset-0 flex">
        {/* Left side - Black background */}
        <div className="w-1/2 bg-primary hidden lg:block"></div>
        
        {/* Right side - Image with gradient overlay */}
        <div className="w-full lg:w-1/2 h-full relative">
          <img 
            src="/office.webp" 
            alt="Regina Trans Office" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1920x1080/1a1a1a/d4a843?text=Regina+Trans';
            }}
          />
          {/* Gradient overlay between black and image */}
          <div className="absolute inset-0 bg-gradient-to-l from-primary/0 via-primary/60 to-primary lg:via-primary/80 lg:to-primary"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent lg:hidden"></div>
        </div>
      </div>

      {/* Gold Accent Decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl lg:max-w-xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm text-accent px-5 py-2.5 rounded-full text-sm border border-accent/20 mb-8 mt-16 lg:mt-20"
          >
            {data.badge}
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-2"
          >
            {data.title}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-4"
          >
            {data.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#booking"
              className="btn-neumo-gold"
            >
              {data.cta}
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 rounded-full border-2 border-gold/40 text-gold font-semibold hover:bg-gold/10 transition-all hover:border-gold/60"
            >
              {data.cta2}
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 flex flex-col items-center gap-2 text-gold/40 animate-bounce"
          >
            <span className="text-xs">
              {language === 'id' ? 'Gulir ke bawah' : 'Scroll down'}
            </span>
            <FaArrowDown size={14} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;