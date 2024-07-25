import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">School Name</h3>
            <p>123 School Street</p>
            <p>City, State 12345</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-blue-300">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-blue-300">Admissions</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-blue-300"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-blue-300"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-blue-300"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 School Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;