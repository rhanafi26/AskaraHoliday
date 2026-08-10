import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { testimonialsData } from '../data/testimonialsData';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const data = language === 'id' ? testimonialsData.id : testimonialsData.en;

  const title = {
    id: { title: 'Testimoni', subtitle: 'Apa Kata Klien Kami' },
    en: { title: 'Testimonials', subtitle: 'What Our Clients Say' }
  };

  const currentTitle = language === 'id' ? title.id : title.en;

  return (
    <section id="testimonials" className="py-20 bg-primary" ref={ref}>
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-neumo-dark p-6 border border-gold/10"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < testimonial.rating ? 'text-accent' : 'text-gray-600'} />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;