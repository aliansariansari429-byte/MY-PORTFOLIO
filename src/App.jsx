import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Highlight from './components/Highlight'
import Projects from './components/Projects'
import Contact from './components/Contact'


export default function App(){
const [dark, setDark] = useState(true)


return (
<div className={dark ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}>
<motion.div initial="hidden" animate="show">
<Navbar dark={dark} setDark={setDark} />


<main className="min-h-screen p-6">
<Hero />
<Skills />
<Highlight />
<Projects />
<Contact />
</main>


</motion.div>
</div>
)
}