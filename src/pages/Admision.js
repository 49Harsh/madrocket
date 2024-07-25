import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { addAdmissionForm } from '../redux/slices/admissionsSlice';
import { FaCalendarAlt, FaFileAlt } from 'react-icons/fa';

const Admissions = () => {
  const dispatch = useDispatch();
  const deadlines = useSelector((state) => state.admissions.deadlines);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAdmissionForm(formData));
    alert('Your admission form has been submitted successfully!');
    setFormData({ name: '', email: '', phone: '', grade: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Admissions</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
        <p className="text-lg mb-4">
          Our admission process is designed to be comprehensive yet straightforward. We look for students who are
          passionate about learning and will contribute positively to our school community.
        </p>
        <ol className="list-decimal list-inside text-lg">
          <li>Submit the online application form</li>
          <li>Provide necessary documents (transcripts, recommendation letters)</li>
          <li>Complete the entrance examination</li>
          <li>Attend an interview with our admissions team</li>
          <li>Receive the admission decision</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Important Deadlines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deadlines.map((deadline) => (
            <motion.div
              key={deadline.id}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-100 p-4 rounded-lg shadow-md"
            >
              <FaCalendarAlt className="text-2xl text-blue-500 mb-2" />
              <h3 className="text-xl font-semibold mb-2">{deadline.description}</h3>
              <p className="text-lg">{deadline.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Admission Form</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="grade" className="block text-lg mb-2">Grade Applying For</label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="">Select Grade</option>
              <option value="1">Grade 1</option>
              <option value="2">Grade 2</option>
              <option value="3">Grade 3</option>
              <option value="4">Grade 4</option>
              <option value="5">Grade 5</option>
              <option value="6">Grade 6</option>
              <option value="7">Grade 7</option>
              <option value="8">Grade 8</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
              <option value="12">Grade 12</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg mb-2">Additional Information</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border rounded-lg"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg text-lg"
          >
            Submit Application
          </motion.button>
        </form>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Download Admission Forms</h2>
        <div className="flex flex-wrap gap-4">
          <motion.a
            href="/path-to-admission-form.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-green-500 text-white py-2 px-4 rounded-lg"
          >
            <FaFileAlt className="mr-2" />
            Download Admission Form
          </motion.a>
          <motion.a
            href="/path-to-medical-form.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-green-500 text-white py-2 px-4 rounded-lg"
          >
            <FaFileAlt className="mr-2" />
            Download Medical Form
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
};

export default Admissions;