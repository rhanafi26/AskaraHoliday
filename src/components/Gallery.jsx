import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState(null);

  const title = {
    id: { title: 'Galeri', subtitle: 'Dokumentasi Perjalanan Bersama Askara Holiday' },
    en: { title: 'Gallery', subtitle: 'Journey Documentation with Askara Holiday' }
  };

  const currentTitle = language === 'id' ? title.id : title.en;

  // Dummy gallery images - ganti dengan foto asli Anda
  const images = [
    { id: 1, src: '/gallery/gallery1.webp', title: '' },
    { id: 2, src: '/gallery/gallery2.webp', title: '' },
    { id: 3, src: '/gallery/gallery3.webp', title: '' },
    { id: 4, src: '/gallery/gallery4.webp', title: '' },
    { id: 5, src: '/gallery/gallery5.webp', title: '' },
    { id: 6, src: '/gallery/gallery6.webp', title: '' },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-secondary" ref={ref}>
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400/1a1a1a/d4a843?text=Regina+Trans';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-accent transition-colors"
            onClick={closeLightbox}
          >
            <FaTimes />
          </button>
          <div className="max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-2xl"
            />
            <p className="text-center text-white mt-4 text-sm">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;