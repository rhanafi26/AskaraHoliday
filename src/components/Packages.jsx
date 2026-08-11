import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { packagesData } from '../data/packagesData';
import { motion } from 'framer-motion';
import { FaClock, FaWhatsapp } from 'react-icons/fa';

const Packages = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const data = language === 'id' ? packagesData.id : packagesData.en;

  const title = {
    id: { title: 'Paket Unggulan', subtitle: 'Perjalanan Wisata Terbaik Bersama Askara Holiday, mau lihat paket lengkap hubungi kami ❤️' },
    en: { title: 'Featured Packages', subtitle: 'Best Tour Travel with Askara Holiday' }
  };

  const currentTitle = language === 'id' ? title.id : title.en;

  const phoneNumber = '628814939010';

  const handleWhatsApp = (packageName) => {
    const message = `Halo Regina Trans! Saya tertarik dengan paket: ${packageName}. Mohon info lebih lanjut.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-secondary" ref={ref}>
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

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-neumo-dark overflow-hidden border border-gold/10 hover:border-gold/30 transition-all hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/1a1a1a/d4a843?text=Paket+Wisata';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-gold">
                    <FaClock size={14} />
                    <span className="text-sm font-medium">{pkg.duration}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{pkg.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">{pkg.price}</span>
                  <button
                    onClick={() => handleWhatsApp(pkg.title)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-primary font-medium hover:bg-gold transition-all text-sm"
                  >
                    <FaWhatsapp size={16} />
                    {language === 'id' ? 'Pesan' : 'Order'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;