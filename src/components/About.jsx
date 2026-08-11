import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { FaBus, FaCar, FaUsers, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const content = {
    id: {
      title: 'Tentang Kami',
      subtitle: 'Partner Perjalanan Terpercaya Anda',
      description: 'Askara Holiday hadir sebagai penyedia layanan jasa yang menemani anda yang ingin diburan dengan destinasi serta rute terbaik dan juga hotel yang sangat nyaman untuk anda yang ingin berlibur dengan kerabat maupun rekan kerja, memastikan perjalanan anda nyaman, aman, serta penuh makna',
      vision: 'Menjadi penyedia jasa transportasi terdepan di Indonesia dengan pelayanan premium dan harga kompetitif.',
      mission: 'Memberikan pengalaman perjalanan terbaik melalui armada terawat, sopir profesional, dan layanan yang responsif.'
    },
    en: {
      title: 'About Us',
      subtitle: 'Your Trusted Travel Partner',
      description: 'Askara Holiday is your trusted transportation solution for business travel, tourism, and corporate events. With premium fleet and professional drivers, we are ready to accompany every journey safely, comfortably, and on time.',
      vision: 'To become the leading transportation service provider in Indonesia with premium service and competitive prices.',
      mission: 'Providing the best travel experience through well-maintained fleets, professional drivers, and responsive service.'
    }
  };

  const data = language === 'id' ? content.id : content.en;

  const features = {
    id: [
      { icon: FaBus, title: 'Armada Premium', desc: 'Bus yang sangat terawat' },
      { icon: FaUsers, title: 'Sopir Profesional', desc: 'Berpengalaman dan ramah' },
      { icon: FaShieldAlt, title: 'Aman & Terpercaya', desc: 'Asuransi perjalanan lengkap' },
      { icon: FaCar, title: 'Harga Kompetitif', desc: 'Tanpa biaya tersembunyi' },
    ],
    en: [
      { icon: FaBus, title: 'Premium Fleet', desc: 'Well-maintained buses, cars, hiace' },
      { icon: FaUsers, title: 'Professional Drivers', desc: 'Experienced and friendly' },
      { icon: FaShieldAlt, title: 'Safe & Trustworthy', desc: 'Complete travel insurance' },
      { icon: FaCar, title: 'Competitive Price', desc: 'No hidden costs' },
    ]
  };

  const featuresData = language === 'id' ? features.id : features.en;

  return (
    <section id="about" className="py-20 bg-primary" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-gray-300 text-lg leading-relaxed">{data.description}</p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div className="card-neumo-dark p-6 border border-gold/10">
            <h3 className="text-xl font-bold text-accent mb-3">
              {language === 'id' ? 'Visi' : 'Vision'}
            </h3>
            <p className="text-gray-300 leading-relaxed">{data.vision}</p>
          </div>
          <div className="card-neumo-dark p-6 border border-gold/10">
            <h3 className="text-xl font-bold text-accent mb-3">
              {language === 'id' ? 'Misi' : 'Mission'}
            </h3>
            <p className="text-gray-300 leading-relaxed">{data.mission}</p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {featuresData.map((feature, index) => (
            <div key={index} className="card-neumo-dark p-4 text-center border border-gold/10 hover:border-gold/30 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <feature.icon className="text-accent text-2xl" />
              </div>
              <h4 className="font-bold text-white text-sm">{feature.title}</h4>
              <p className="text-gray-400 text-xs mt-1">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;