import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { id: 1, src: 'https://placeimg.com/300/200/arch', category: 'events' },
    { id: 2, src: 'https://placeimg.com/300/200/nature', category: 'campus' },
    { id: 3, src: 'https://placeimg.com/300/200/tech', category: 'activities' },
    { id: 4, src: 'https://placeimg.com/300/200/people', category: 'events' },
    { id: 5, src: 'https://placeimg.com/300/200/animals', category: 'activities' },
    { id: 6, src: 'https://placeimg.com/300/200/arch', category: 'campus' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
      
      <div className="flex justify-center mb-8">
        <button 
          className={`mx-2 px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`mx-2 px-4 py-2 rounded ${filter === 'events' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('events')}
        >
          Events
        </button>
        <button 
          className={`mx-2 px-4 py-2 rounded ${filter === 'campus' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('campus')}
        >
          Campus
        </button>
        <button 
          className={`mx-2 px-4 py-2 rounded ${filter === 'activities' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('activities')}
        >
          Activities
        </button>
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
              <img src={image.src} alt={`Gallery image ${image.id}`} className="w-full h-full object-cover rounded-lg" />
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