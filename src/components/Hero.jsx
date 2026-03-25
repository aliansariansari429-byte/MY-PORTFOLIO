import React from 'react'
import { motion } from 'framer-motion'
// import Tilt from 'react-parallax-tilt'
import pic from '../assets/images/Aliansari-1.jpeg'

export default function Hero(){
return (
<section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 py-16">
<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
<h1 className="text-5xl font-extrabold leading-tight mb-4">Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ali Ansari</span></h1>
<p className="text-lg text-gray-850 dark:text-gray-400 mb-6">I build animated, modern and blazing fast web experiences with React and Tailwind.</p>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl">Hire Me</motion.a>
</motion.div>


<div  className="shadow-2xl rounded-2xl">
<motion.img initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} src={pic} alt="Profile" className="w-72 h-72 rounded-2xl object-cover"/>
</div>
</section>
)
}