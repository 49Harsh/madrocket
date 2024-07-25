import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images
import school1 from '../image/col 5.svg';
import school2 from '../image/col 3.svg';
import school3 from '../image/col 4.svg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { id: 1, src: school1, category: 'events' },
    { id: 2, src: school2, category: 'campus' },
    { id: 3, src: school3, category: 'activities' },
    { id: 4, src: school1, category: 'events' },
    { id: 5, src: school2, category: 'activities' },
    { id: 6, src: school3, category: 'campus' },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
      
      <div className="flex justify-center mb-8">
        {['all', 'events', 'campus', 'activities'].map((filterType) => (
          <button
            key={filterType}
            className={`mx-2 px-4 py-2 rounded ${
              filter === filterType ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleFilterClick(filterType)}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        layout
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layoutId={`image-${image.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={`Gallery image ${image.id}`} 
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  console.error(`Error loading image ${image.id}:`, e);
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          >
            <motion.img
              src={selectedImage.src}
              alt={`Gallery image ${selectedImage.id}`}
              layoutId={`image-${selectedImage.id}`}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;