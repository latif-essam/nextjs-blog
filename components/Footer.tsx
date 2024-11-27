import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-gray-800 text-white text-center mt-auto">
      <div className="container mx-auto px-6">
        <p className="text-base">
          &copy; {new Date().getFullYear()} All rights reserved. Developed by
          Latif Essam.
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <a
            href="tel:+201026042736"
            className="flex items-center space-x-2 hover:text-blue-500"
          >
            <FaPhoneAlt />
            <span>+201026042736</span>
          </a>
          <a
            href="mailto:latif_essam@outlook.com"
            className="flex items-center space-x-2 hover:text-blue-500"
          >
            <FaEnvelope />
            <span>latif_essam@outlook.com</span>
          </a>
          <a
            target="_blank"
            href="https://portfolio-latifessams-projects.vercel.app/"
            className="flex items-center space-x-2 hover:text-blue-500"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
            <span>Portfolio</span>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/LatifEssam/"
            className="flex items-center space-x-2 hover:text-blue-500"
            rel="noopener noreferrer"
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/latifessam"
            className="flex items-center space-x-2 hover:text-blue-500"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
