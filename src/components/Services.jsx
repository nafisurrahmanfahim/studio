import React from 'react'
import { motion } from 'framer-motion'
import { FaCouch, FaRulerCombined, FaLeaf } from 'react-icons/fa'

const items = [
  { icon: <FaCouch />, title: 'Interior Design', text: 'Smart & modern layouts' },
  { icon: <FaRulerCombined />, title: 'Implementation', text: 'From plan to reality' },
  { icon: <FaLeaf />, title: 'Sustainable Material', text: 'Eco friendly choices' },
]

export default function Services(){
  return (
    <section id="services" className="container mx-auto px-6 py-14">
      <h3 className="text-xl font-medium text-tealDark">Why People <span className="bg-white/60 px-2 rounded text-tealDark">CHOOSE US</span></h3>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12 }}
            className="bg-white rounded-lg p-6 card-anim"
          >
            <div className="text-3xl text-tealDark">{it.icon}</div>
            <h4 className="mt-4 font-semibold">{it.title}</h4>
            <p className="mt-2 text-sm text-gray-600">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
