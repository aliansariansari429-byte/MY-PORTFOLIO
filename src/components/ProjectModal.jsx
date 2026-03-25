import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-3xl w-full shadow-xl relative overflow-auto max-h-[90vh]"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 text-xl font-bold"
        >
          ×
        </button>
        <img src={project.imgUrl} className="rounded-xl mb-4 w-full" />
        <h2 className="text-2xl font-bold mb-4">{project.title || `Project ${project.id}`}</h2>
        <p className="text-gray-800 dark:text-gray-300">{project.des}</p>
      </motion.div>
    </div>
  );
}
