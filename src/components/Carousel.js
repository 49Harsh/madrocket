import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../image/col 5.svg';
import image2 from '../image/col 3.svg';
import image3 from '../image/col 4.svg';

const images = [image1, image2, image3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute w-full h-full object-fill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Carousel;