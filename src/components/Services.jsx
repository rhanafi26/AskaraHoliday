import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { servicesData } from '../data/servicesData';
import { motion } from 'framer-motion';
import { FaBus, FaCar, FaVanShuttle } from 'react-icons/fa6';

const Services = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const data = language === 'id' ? servicesData.id : servicesData.en;

  // Map icon berdasarkan id
  const iconMap = {
    1: FaBus,
    2: FaCar,
    3: FaVanShuttle
  };

  const title = {
    id: { title: 'Layanan Kami', subtitle: 'Armada Premium untuk Setiap Perjalanan Anda' },
    en: { title: 'Our Services', subtitle: 'Premium Fleet for Every Journey' }
  };

  const currentTitle = language === 'id' ? title.id : title.en;

  return (
    <section id="services" className="py-20 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{currentTitle.title}</h2>
          <p className="section-subtitle">{currentTitle.subtitle}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((service, index) => {
            const IconComponent = iconMap[service.id] || FaBus;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-neumo-dark p-6 text-center border border-gold/10 hover:border-gold/30 transition-all hover:-translate-y-1 group"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all">
                  <IconComponent className="text-accent text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;