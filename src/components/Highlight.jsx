import React from "react";
import { motion } from "framer-motion";

export default function Highlight() {
  return (
    <section className="max-w-6xl mx-auto my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-10 rounded-2xl bg-gradient-to from-blue-600 to-purple-600  text-center shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-2 ">8+ Month Experience</h2>
        <p className="opacity-90">
          Delivering modern UI with smooth animations and a focus on performance.
        </p>
      </motion.div>
    </section>
  );
}
