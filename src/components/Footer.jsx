import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-10 px-6 lg:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center lg:text-left">
          <h2 className="text-white text-2xl font-bold">LinkNShare</h2>
          <p className="text-sm mt-1">Simplifying URL shortening for efficient sharing.</p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} LinkNShare. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a href="#" className="hover:text-white transition duration-300">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
