import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" }
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">School Name</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/academics" className="hover:text-blue-200">Academics</Link>
          <Link to="/admissions" className="hover:text-blue-200">Admissions</Link>
          <Link to="/faculty" className="hover:text-blue-200">Faculty</Link>
          <Link to="/students" className="hover:text-blue-200">Students</Link>
          <Link to="/gallery" className="hover:text-blue-200">Gallery</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <nav className="flex flex-col items-center py-4">
          <Link to="/" className="py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="py-2" onClick={toggleMenu}>About</Link>
          <Link to="/academics" className="py-2" onClick={toggleMenu}>Academics</Link>
          <Link to="/admissions" className="py-2" onClick={toggleMenu}>Admissions</Link>
          <Link to="/faculty" className="py-2" onClick={toggleMenu}>Faculty</Link>
          <Link to="/students" className="py-2" onClick={toggleMenu}>Students</Link>
          <Link to="/gallery" className="py-2" onClick={toggleMenu}>Gallery</Link>
          <Link to="/contact" className="py-2" onClick={toggleMenu}>Contact</Link>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;