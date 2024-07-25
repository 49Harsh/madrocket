import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Jane Smith',
    position: 'Principal',
    image: 'https://placekitten.com/200/200',
    email: 'jane.smith@school.edu',
    phone: '(123) 456-7890',
    bio: 'Dr. Smith has over 20 years of experience in education and leadership.',
  },
  {
    id: 2,
    name: 'Prof. John Doe',
    position: 'Head of Science Department',
    image: 'https://placekitten.com/201/201',
    email: 'john.doe@school.edu',
    phone: '(123) 456-7891',
    bio: 'Prof. Doe is a renowned scientist with multiple publications in top journals.',
  },
  {
    id: 3,
    name: 'Ms. Emily Brown',
    position: 'English Teacher',
    image: 'https://placekitten.com/202/202',
    email: 'emily.brown@school.edu',
    phone: '(123) 456-7892',
    bio: 'Ms. Brown is passionate about literature and creative writing.',
  },
  // Add more faculty members as needed
];

const FacultyMember = ({ member }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
    <p className="text-gray-600 mb-2">{member.position}</p>
    <p className="text-sm mb-4">{member.bio}</p>
    <div className="flex items-center justify-center space-x-4">
      <a href={`mailto:${member.email}`} className="text-blue-500 hover:text-blue-700">
        <FaEnvelope className="inline mr-1" /> Email
      </a>
      <a href={`tel:${member.phone}`} className="text-blue-500 hover:text-blue-700">
        <FaPhone className="inline mr-1" /> Call
      </a>
    </div>
  </motion.div>
);

const Faculty = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Our Faculty</h1>
      <p className="text-lg text-center mb-12">
        Meet our dedicated team of educators committed to nurturing the next generation of leaders.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member) => (
          <FacultyMember key={member.id} member={member} />
        ))}
      </div>
    </motion.div>
  );
};

export default Faculty;