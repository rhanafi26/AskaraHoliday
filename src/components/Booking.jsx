import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fleetTypes } from '../data/fleetData';
import { sendWhatsApp } from '../utils/whatsapp';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Booking = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    fleetType: '',
    note: ''
  });

  const content = {
    id: {
      title: 'Hubungi Sekarang',
      subtitle: 'Pesan Armada Sesuai Kebutuhan Anda',
      name: 'Nama Lengkap',
      email: 'Email',
      phone: 'Nomor Telepon',
      destination: 'Tujuan (Kota/Wisata)',
      departureDate: 'Tanggal Berangkat',
      returnDate: 'Tanggal Pulang',
      fleetType: 'Jenis Armada',
      note: 'Catatan Tambahan',
      notePlaceholder: 'Tulis catatan khusus...',
      submit: 'Kirim ke WhatsApp',
      selectFleet: 'Pilih Armada'
    },
    en: {
      title: 'Book Now',
      subtitle: 'Book the Fleet You Need',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      destination: 'Destination (City/Tour)',
      departureDate: 'Departure Date',
      returnDate: 'Return Date',
      fleetType: 'Fleet Type',
      note: 'Additional Notes',
      notePlaceholder: 'Write special notes...',
      submit: 'Send to WhatsApp',
      selectFleet: 'Select Fleet'
    }
  };

  const data = language === 'id' ? content.id : content.en;
  const fleetOptions = language === 'id' ? fleetTypes.id : fleetTypes.en;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendWhatsApp(formData);
  };

  return (
    <section id="booking" className="py-20 bg-primary" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-neumo-dark p-6 md:p-8 border border-gold/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    {data.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-neumo"
                    placeholder={data.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    {data.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-neumo"
                    placeholder={data.email}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    {data.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-neumo"
                    placeholder={data.phone}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    {data.destination}
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="input-neumo"
                    placeholder={data.destination}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    {data.departureDate}
                  </label>
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                    required
                    className="input-neumo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    {data.returnDate}
                  </label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    required
                    className="input-neumo"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {data.fleetType}
                </label>
                <select
                  name="fleetType"
                  value={formData.fleetType}
                  onChange={handleChange}
                  required
                  className="input-neumo appearance-none"
                >
                  <option value="">{data.selectFleet}</option>
                  {fleetOptions.map((fleet) => (
                    <option key={fleet.value} value={fleet.value}>
                      {fleet.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {data.note}
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows="3"
                  className="input-neumo resize-none"
                  placeholder={data.notePlaceholder}
                />
              </div>

              <button type="submit" className="btn-neumo-gold w-full flex items-center justify-center gap-3">
                <FaWhatsapp size={20} />
                {data.submit}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;