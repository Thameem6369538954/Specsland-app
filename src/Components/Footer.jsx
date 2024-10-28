import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h1 className="text-2xl font-semibold">Specsland</h1>
            <p className="text-gray-400 text-center md:text-left">
              Bringing you the best in eyewear technology and style.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Categories
            </a>
            <a href="#" className="hover:text-gray-300">
              Products
            </a>
            <a href="#" className="hover:text-gray-300">
              Offers
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Specsland. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
