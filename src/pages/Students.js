import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const studentActivities = [
  {
    id: 1,
    title: 'Science Fair',
    date: 'May 15, 2024',
    description: 'Annual science fair showcasing student projects and innovations.',
  },
  {
    id: 2,
    title: 'Sports Day',
    date: 'June 10, 2024',
    description: 'A day of athletic competitions and team-building activities.',
  },
  {
    id: 3,
    title: 'Art Exhibition',
    date: 'April 22, 2024',
    description: 'Displaying student artwork and creative expressions.',
  },
  // Add more activities as needed
];

const studentAchievements = [
  {
    id: 1,
    title: 'National Math Olympiad',
    student: 'Alice Johnson',
    achievement: '1st Place',
  },
  {
    id: 2,
    title: 'State Debate Championship',
    student: 'Bob Smith',
    achievement: 'Best Speaker Award',
  },
  {
    id: 3,
    title: 'Regional Science Fair',
    student: 'Carol Williams',
    achievement: 'Gold Medal',
  },
  // Add more achievements as needed
];

const Activity = ({ activity }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <FaCalendarAlt className="text-3xl text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
    <p className="text-gray-600 mb-2">{activity.date}</p>
    <p>{activity.description}</p>
  </motion.div>
);

const Achievement = ({ achievement }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <FaTrophy className="text-3xl text-yellow-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
    <p className="text-gray-600 mb-2">{achievement.student}</p>
    <p>{achievement.achievement}</p>
  </motion.div>
);

const Students = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Student Life</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Student Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentActivities.map((activity) => (
            <Activity key={activity.id} activity={activity} />
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Student Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentAchievements.map((achievement) => (
            <Achievement key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Student Council</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaUsers className="text-3xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Student Leadership</h3>
          <p className="mb-4">
            Our Student Council plays a vital role in representing the student body and organizing various events throughout the year.
            Elections for Student Council positions are held annually, giving students the opportunity to develop leadership skills and make a positive impact on our school community.
          </p>
          <h4 className="font-semibold mb-2">Current Student Council Members:</h4>
          <ul className="list-disc list-inside">
            <li>President: Sarah Thompson</li>
            <li>Vice President: Michael Lee</li>
            <li>Secretary: Emma Rodriguez</li>
            <li>Treasurer: David Chen</li>
          </ul>
        </div>
      </section>
    </motion.div>
  );
};

export default Students;