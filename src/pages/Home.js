import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaUsers } from 'react-icons/fa';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our School</h1>
      <Carousel />
      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">About Our School</h2>
        <p className="text-lg">
          Our school is dedicated to providing a nurturing and challenging educational environment
          that inspires students to become lifelong learners and responsible global citizens.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-100 p-6 rounded-lg shadow-md"
        >
          <FaGraduationCap className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
          <p>Our school is committed to providing top-notch education and preparing students for future success.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-green-100 p-6 rounded-lg shadow-md"
        >
          <FaBook className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Diverse Curriculum</h3>
          <p>We offer a wide range of subjects and extracurricular activities to cater to all interests and talents.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-100 p-6 rounded-lg shadow-md"
        >
          <FaUsers className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
          <p>Join our vibrant and inclusive school community where every student is valued and supported.</p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;