import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaEye, FaBullseye } from 'react-icons/fa';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8">About Our School</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <div className="flex items-center mb-4">
          <FaHistory className="text-3xl text-blue-500 mr-4" />
          <p className="text-lg">
            Founded in 1950, our school has a rich history of academic excellence and community engagement.
            For over seven decades, we have been shaping young minds and preparing students for successful futures.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <div className="flex items-center mb-4">
          <FaEye className="text-3xl text-green-500 mr-4" />
          <p className="text-lg">
            We envision a learning community where every student is empowered to reach their full potential,
            fostering creativity, critical thinking, and a lifelong love for learning.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <div className="flex items-center mb-4">
          <FaBullseye className="text-3xl text-red-500 mr-4" />
          <p className="text-lg">
            Our mission is to provide a nurturing and challenging educational environment that inspires students
            to become responsible global citizens, innovative thinkers, and compassionate leaders.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Message from the Principal</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg italic mb-4">
            "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
            At our school, we are committed to providing every student with the tools they need to succeed in
            an ever-changing world."
          </p>
          <p className="font-semibold">- Jane Doe, Principal</p>
        </div>
      </section>
    </motion.div>
  );
};

export default About;