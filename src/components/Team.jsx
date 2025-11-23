import React from 'react'
import { motion } from 'framer-motion'

const members = [
  { name: 'Boris Johnson', role: 'Architect', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Donald Pakura', role: 'Designer', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Bradley Garcon', role: 'Engineer', img: 'https://randomuser.me/api/portraits/men/52.jpg' },
  { name: 'Alexander Bell', role: 'Manager', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
]

export default function Team(){
  return (
    <section id="team" className="bg-white/60 py-12">
      <div className="container mx-auto px-6">
        <h3 className="text-xl font-medium text-tealDark mb-6">Our Professional <span className="text-gray-600">Designers</span></h3>
        <div className="grid md:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20}} whileInView={{ opacity: 1, y: 0}} viewport={{once:true}} transition={{delay: i * 0.12}} className="rounded-lg overflow-hidden card-anim">
              <img src={m.img} alt={m.name} className="w-full h-56 object-cover"/>
              <div className="p-4">
                <div className="text-sm text-gray-500">{m.role}</div>
                <div className="font-semibold text-tealDark">{m.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
