import React from 'react'
import { Sun, Moon } from 'lucide-react'


export default function Navbar({ dark, setDark }){
return (
<nav className="max-w-6xl mx-auto flex items-center justify-between py-4">
<h1 className="text-3xl font-extrabold tracking-wide">Ali Ansari - Dev</h1>
<div className="flex items-center gap-4">
<a href="#projects" className="hidden md:inline-block">Projects</a>
<a href="#contact" className="hidden md:inline-block">Contact</a>


<button onClick={() => setDark(!dark)} className="p-2 rounded-xl bg-gray-200 dark:bg-gray-700 transition">
{dark ? <Sun size={18} className='text-white' /> : <Moon size={18} className='text-white' />}
</button>
</div>
</nav>
)
}

