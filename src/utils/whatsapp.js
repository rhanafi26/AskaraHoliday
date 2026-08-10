export const sendWhatsApp = (data) => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+6281249138543'; // Ganti dengan nomor WhatsApp Anda
  
  const message = 
    `📋 *Regina Trans - Booking Form*\n\n` +
    `👤 *Nama:* ${data.name}\n` +
    `📧 *Email:* ${data.email}\n` +
    `📱 *Telepon:* ${data.phone}\n` +
    `📍 *Tujuan:* ${data.destination}\n` +
    `📅 *Tanggal Berangkat:* ${data.departureDate}\n` +
    `📅 *Tanggal Pulang:* ${data.returnDate}\n` +
    `🚐 *Jenis Armada:* ${data.fleetType}\n` +
    `📝 *Catatan:* ${data.note || 'Tidak ada'}`;
  
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};