// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import CoachesCarousel from './components/CoachesCarousel';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CoachesCarousel />
      <Footer />
      {/* Add more components here as you build */}
    </div>
  );
}

export default App;
