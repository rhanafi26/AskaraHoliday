import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const Map = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const title = {
    id: { title: 'Area Layanan', subtitle: 'Melayani Seluruh Pulau Jawa & Sekitarnya' },
    en: { title: 'Service Area', subtitle: 'Serving All of Java Island & Beyond' }
  };

  const currentTitle = language === 'id' ? title.id : title.en;

  return (
    <section id="map" className="py-20 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{currentTitle.title}</h2>
          <p className="section-subtitle">{currentTitle.subtitle}</p>
        </motion.div>

        {/* Map Image - Pulau Jawa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-neumo-dark p-4 border border-gold/10">
            <img
              src="/map-java.webp"
              alt="Peta Pulau Jawa - Askara Holiday Service Area"
              className="w-full h-auto rounded-xl"
              onError={(e) => {
                // Fallback jika gambar tidak ditemukan - SVG inline
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                  <div class="w-full aspect-[4/3] bg-primary rounded-xl flex items-center justify-center border border-gold/20">
                    <div class="text-center p-8">
                      <svg class="w-32 h-32 mx-auto text-gold/30" viewBox="0 0 400 400" fill="none">
                        <path d="M50 200 C50 150 100 100 150 100 C200 100 250 120 300 150 C350 180 370 220 350 260 C330 300 280 320 230 320 C180 320 130 300 100 270 C70 240 50 220 50 200Z" stroke="#d4a843" stroke-width="4" fill="#d4a84310"/>
                        <path d="M100 200 C100 170 130 140 170 140 C210 140 240 160 270 180 C300 200 310 230 300 260 C290 290 260 300 230 300 C200 300 170 290 150 270 C130 250 100 230 100 200Z" stroke="#d4a843" stroke-width="3" fill="#d4a84320"/>
                        <circle cx="180" cy="200" r="8" fill="#d4a843" />
                        <circle cx="220" cy="180" r="6" fill="#d4a843" />
                        <circle cx="250" cy="210" r="5" fill="#d4a843" />
                        <circle cx="200" cy="230" r="4" fill="#d4a843" />
                        <text x="120" y="130" fill="#d4a843" font-size="12" text-anchor="middle" font-weight="bold">JAKARTA</text>
                        <text x="280" y="170" fill="#d4a843" font-size="12" text-anchor="middle" font-weight="bold">SURABAYA</text>
                        <text x="210" y="250" fill="#d4a843" font-size="12" text-anchor="middle" font-weight="bold">YOGYAKARTA</text>
                      </svg>
                      <p class="text-gray-400 text-sm mt-4">${language === 'id' ? 'Peta Pulau Jawa' : 'Java Island Map'}</p>
                      <p class="text-gray-500 text-xs mt-2">${language === 'id' ? 'Upload file map-java.webp di folder public/' : 'Upload map-java.webp file to public folder'}</p>
                    </div>
                  </div>
                `;
              }}
            />
          </div>
        </motion.div>

        {/* Service Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { city: 'Madiun', label: 'Kantor Pusat' },
            { city: 'Bali', label: 'Luar Jawa' },
            { city: 'Madura', label: 'Luar Jawa' },
            { city: 'Lainya', label: 'Luar Jawa' },
          ].map((item, index) => (
            <div key={index} className="text-center card-neumo-dark p-3 border border-gold/10">
              <p className="font-bold text-white text-sm">{item.city}</p>
              <p className="text-gray-400 text-xs">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Map;