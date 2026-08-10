import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const content = {
    id: {
      title: 'Kontak Kami',
      subtitle: 'Hubungi Kami untuk Pemesanan & Informasi',
      address: 'Desa Klangon, Kecamatan Saradan, Kabupaten Madiun, Jawa Timur',
      phone: '+6281249138543',
      email: 'info@reginatrans.com',
      hours: 'Senin - Minggu, 08:00 - 22:00',
      whatsapp: 'Chat WhatsApp'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Contact Us for Booking & Information',
      address: 'Desa Klangon, Kecamatan Saradan, Kabupaten Madiun, Jawa Timur',
      phone: '+6281249138543',
      email: 'info@reginatrans.com',
      hours: 'Monday - Sunday, 08:00 - 22:00',
      whatsapp: 'Chat WhatsApp'
    }
  };

  const data = language === 'id' ? content.id : content.en;

  const handleWhatsApp = () => {
    const message = 'Halo Regina Trans! Saya ingin bertanya tentang layanan Anda.';
    window.open(`https://wa.me/6281249138543?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-primary" ref={ref}>
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

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="card-neumo-dark p-6 border border-gold/10 hover:border-gold/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-accent text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">
                  {language === 'id' ? 'Alamat' : 'Address'}
                </h4>
                <p className="text-gray-400 text-sm">{data.address}</p>
              </div>
            </div>
          </div>

          <div className="card-neumo-dark p-6 border border-gold/10 hover:border-gold/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-accent text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">
                  {language === 'id' ? 'Telepon' : 'Phone'}
                </h4>
                <p className="text-gray-400 text-sm">{data.phone}</p>
              </div>
            </div>
          </div>

          <div className="card-neumo-dark p-6 border border-gold/10 hover:border-gold/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-accent text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">
                  {language === 'id' ? 'Email' : 'Email'}
                </h4>
                <p className="text-gray-400 text-sm">{data.email}</p>
              </div>
            </div>
          </div>

          <div className="card-neumo-dark p-6 border border-gold/10 hover:border-gold/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaClock className="text-accent text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">
                  {language === 'id' ? 'Jam Kerja' : 'Working Hours'}
                </h4>
                <p className="text-gray-400 text-sm">{data.hours}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <button
            onClick={handleWhatsApp}
            className="btn-neumo-gold inline-flex items-center gap-3"
          >
            <FaWhatsapp size={20} />
            {data.whatsapp}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;