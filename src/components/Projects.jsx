import React from 'react'
import { motion } from 'framer-motion'

const dummy = [
  { title: 'Kitchen', img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60' },
  { title: 'Bathroom', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=60' },
  { title: 'Living Room', img: 'https://images.unsplash.com/photo-1576675789792-0f7f0f3b7f3d?auto=format&fit=crop&w=800&q=60' },
  { title: 'Bedroom', img: 'https://images.unsplash.com/photo-1549187774-b4e9ee3b1b2b?auto=format&fit=crop&w=800&q=60' },
  { title: 'Furniture', img: 'https://images.unsplash.com/photo-1505691723518-36a0d8f0d9f2?auto=format&fit=crop&w=800&q=60' },
  { title: 'Renovation', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60' },
]

export default function Projects(){
  return (
    <section id="projects" className="container mx-auto px-6 py-14">
      <h3 className="text-2xl font-display text-tealDark mb-6">Our Latest <span className="text-gray-600">Projects</span></h3>

      <div className="grid md:grid-cols-3 gap-6">
        {dummy.map((d, i) => (
          <motion.figure
            key={i}
            initial={{ scale: 0.98, opacity: 0.9 }}
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="rounded overflow-hidden card-anim bg-white"
          >
            <img src={d.img} alt={d.title} className="w-full h-48 object-cover"/>
            <figcaption className="p-4">
              <h4 className="font-semibold text-tealDark">{d.title}</h4>
              <p className="text-sm text-gray-600 mt-2">12 Projects</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
