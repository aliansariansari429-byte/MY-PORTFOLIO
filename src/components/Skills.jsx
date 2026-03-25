import React from 'react'
import { motion } from 'framer-motion'


const skills = ["HTML", "CSS", "JavaScript", "REACT", "TAILWID", "UI/UX",]


export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto my-12">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold 
       mb-6 text-center">My Skills</motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {skills.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.06 }} className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl">
            <p className="font-semibold text-amber-50">{s}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
