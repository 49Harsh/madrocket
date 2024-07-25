import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

const Academics = () => {
  const curricula = [
    { level: 'Primary', grades: '1-5', subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education'] },
    { level: 'Middle School', grades: '6-8', subjects: ['Language Arts', 'Mathematics', 'Science', 'Social Studies', 'Foreign Language', 'Electives'] },
    { level: 'High School', grades: '9-12', subjects: ['English', 'Mathematics', 'Science', 'History', 'Foreign Language', 'Electives', 'AP Courses'] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Academics</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Curriculum</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curricula.map((curriculum, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <FaGraduationCap className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{curriculum.level}</h3>
              <p className="mb-2">Grades: {curriculum.grades}</p>
              <h4 className="font-semibold mb-2">Subjects:</h4>
              <ul className="list-disc list-inside">
                {curriculum.subjects.map((subject, idx) => (
                  <li key={idx}>{subject}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Teaching Methodology</h2>
        <div className="flex items-center mb-4">
          <FaChalkboardTeacher className="text-3xl text-green-500 mr-4" />
          <p className="text-lg">
            Our teaching methodology focuses on student-centered learning, project-based instruction,
            and the integration of technology in the classroom. We believe in fostering critical thinking,
            collaboration, and creativity among our students.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Educational Resources</h2>
        <div className="flex items-center mb-4">
          <FaBook className="text-3xl text-red-500 mr-4" />
          <p className="text-lg">
            We provide our students with access to state-of-the-art laboratories, a well-stocked library,
            online learning platforms, and various educational software to enhance their learning experience.
            Our resources are regularly updated to ensure students have access to the latest educational tools.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default Academics;