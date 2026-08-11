import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaBus } from 'react-icons/fa';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: 'Askara Holiday',
      desc: 'Teman Travelmu. Penyedia jasa sewa bus premium untuk perjalanan bisnis, wisata, dan corporate event.',
      quickLinks: 'Tautan Cepat',
      services: 'Layanan',
      follow: 'Ikuti Kami',
      rights: 'Hak Cipta Dilindungi.',
      links: ['Beranda', 'Booking', 'Layanan', 'Tentang', 'Paket', 'Testimoni', 'Galeri', 'Kontak'],
      serviceLinks: ['Sewa Bus', 'Fotografer', 'Penginapan']
    },
    en: {
      title: 'Askara Holiday',
      desc: 'Your Travel Friend. Premium bus rental services for business travel, tourism, and corporate events.',
      quickLinks: 'Quick Links',
      services: 'Services',
      follow: 'Follow Us',
      rights: 'All Rights Reserved.',
      links: ['Home', 'Booking', 'Services', 'About', 'Packages', 'Testimonials', 'Gallery', 'Contact'],
      serviceLinks: ['Bus Rental', 'Fotografer', 'Hotel']
    }
  };

  const data = language === 'id' ? content.id : content.en;

  return (
    <footer className="bg-primary border-t border-gold/10">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <FaBus className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white">{data.title}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{data.desc}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-accent mb-4">{data.quickLinks}</h4>
            <ul className="space-y-2">
              {data.links.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-accent mb-4">{data.services}</h4>
            <ul className="space-y-2">
              {data.serviceLinks.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-accent mb-4">{data.follow}</h4>
            <div className="flex gap-3">
              <a href="" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-all border border-gold/10 hover:border-gold/30">
                <FaFacebook className="text-accent" />
              </a>
              <a href="https://www.tiktok.com/link/v2?aid=1988&lang=en-GB&scene=bio_url&target=https%3A%2F%2Fwww.instagram.com%2Fregina.transs%3Figsh%3Dbmt1MjRja2FpbGp1%26utm_source%3Dqr" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-all border border-gold/10 hover:border-gold/30">
                <FaInstagram className="text-accent" />
              </a>
              <a href="https://www.tiktok.com/@officialreginatrans?is_from_webapp=1&sender_device=pc" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-all border border-gold/10 hover:border-gold/30">
                <FaYoutube className="text-accent" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-all border border-gold/10 hover:border-gold/30">
                <FaWhatsapp className="text-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {data.title}. {data.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;