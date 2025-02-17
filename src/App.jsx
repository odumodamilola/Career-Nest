// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import CoachesCarousel from './components/CoachesCarousel';
import TimeCounter from './components/TimeCounter';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CoachesCarousel />
      <TimeCounter />
      <Footer />
      {/* Add more components here as you build */}
    </div>
  );
}

export default App;
