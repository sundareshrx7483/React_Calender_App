import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 mt-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">© {new Date().getFullYear()} Your Company Name</p>
            <p className="text-sm text-gray-300">All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="/privacy-policy" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:underline transform hover:scale-105"
            >
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="/terms-of-service" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:underline transform hover:scale-105"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;