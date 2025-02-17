// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Social Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Career Nest</h3>
            <p className="text-gray-400">
              Empowering your career with personalized mentorship and innovative resources.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter" aria-hidden="true"></i>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram" aria-hidden="true"></i>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">About</a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-400">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="hover:text-gray-400">Blog</a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-400">FAQ</a>
              </li>
              <li>
                <a href="/support" className="hover:text-gray-400">Support</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest updates and offers.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded sm:rounded-r-none bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-0 sm:w-auto bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded sm:rounded-l-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Career Nest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
