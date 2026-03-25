import React, { useState } from 'react';
import { projectsData } from '../assets/data';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="max-w-6xl mx-auto my-12 px-4">
      <motion.h2 
        initial={{opacity:0,y:20}} 
        whileInView={{opacity:1,y:0}} 
        className="text-3xl font-semibold mb-8 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <motion.div 
            key={project.id}
            initial={{opacity:0,y:20}} 
            whileInView={{opacity:1,y:0}} 
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
          >
            <img src={project.imgUrl} className="rounded-xl h-[300px] object-cover mb-4 w-full" />
            <h3 className="text-xl text-amber-50 font-bold mb-2">Project {project.id}</h3>
            <p className="dark:text-gray-300 mb-4">{project.des.slice(0, 50)}...</p>
            <button 
              className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-700 transition"
              onClick={() => setSelectedProject(project)}
            >
              View Project
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
