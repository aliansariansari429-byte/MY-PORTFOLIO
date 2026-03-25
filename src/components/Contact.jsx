import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin} from "react-icons/fa";

const socials = [
  { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/ali_anxari_0007/' },
  { name: 'Facebook', icon: <FaWhatsapp />, href: 'https://wa.me/923124613505' },
  { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/aliansariansari429-byte?tab=repositories' },
  { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/ali-ansari-57b857399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Connect with me — replace these icons with your real links.
        </p>

        <div className="flex justify-center gap-6 mb-6 text-3xl">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.25, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="cursor-pointer bg-gray-200 dark:bg-gray-700 p-3 rounded-2xl shadow hover:shadow-xl"
            >
              {s.icon}
              <span className="sr-only">{s.name}</span>
            </motion.a>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl"  
          href="mailto:Alisuqrat007@gmail.com"
        >
          Email Me
        </motion.a>
      </motion.div>
    </section>
  )
}
