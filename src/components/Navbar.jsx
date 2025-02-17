// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo & Brand Name */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center text-gray-800 hover:text-gray-900">
              {/* <svg
                className="h-8 w-8 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg> */}
          <img src="https://i.ibb.co/Kx8X43fX/Career-Nest-logo-removebg-preview-1-1.png" alt=""  style={{ width: '70px', height: 'auto',paddingRight: '10px' }}/>

              <span className="font-bold text-xl">Career Nest</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="py-2 px-3 text-gray-700 hover:text-gray-900">Home</a>
            <a href="/about" className="py-2 px-3 text-gray-700 hover:text-gray-900">About</a>
            <a href="/services" className="py-2 px-3 text-gray-700 hover:text-gray-900">Services</a>
            <a href="/contact" className="py-2 px-3 text-gray-700 hover:text-gray-900">Contact</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <a href="/login" className="py-2 px-3  text-white rounded hover:bg-blue-600" style={{ backgroundColor: '#1b253e' }}>Login</a>
            <a href="/signup" className="py-2 px-3 border border-blue-500 text-#1b253e-500 rounded hover:bg-blue-500 hover:text-white">Sign Up</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Home</a>
          <a href="/about" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">About</a>
          <a href="/services" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Services</a>
          <a href="/contact" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
