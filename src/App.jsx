import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Services from './components/Services';
import About from './components/About';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <main>
          <Hero />
          <Booking />
          <Services />
          <About />
          <Packages />
          <Testimonials />
          <Gallery />
          <Contact />
          <Map />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;