import React from 'react'
import { motion } from 'framer-motion'

// Example external images (replace them with your own / google links)
const heroImage = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"

export default function Hero(){
  return (
    <section id="home" className="hero-bg py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .6 }}
            className="text-4xl md:text-5xl font-display font-bold text-tealDark leading-tight"
          >
            We Make Your <span className="text-tealDark/80">Home</span> Better
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .12, duration: .5 }}
            className="mt-6 text-gray-600 max-w-xl"
          >
            Award winning studio focused on modern interior design with sustainable materials and smart budgets. We design spaces people love.
          </motion.p>

          <motion.div
            initial={{ scale: .98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: .2 }}
            className="mt-8 flex gap-4"
          >
            <button className="px-5 py-3 bg-tealDark text-white rounded-lg shadow">Our Projects</button>
            <button className="px-5 py-3 border border-tealDark text-tealDark rounded-lg">Contact Us</button>
          </motion.div>

          <div className="mt-8 flex gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow">📐</div>
              <div>
                <p className="text-xs">Crafted Furniture</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow">🌿</div>
              <div>
                <p className="text-xs">Sustainable Material</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .6 }}
            className="rounded-xl overflow-hidden card-anim"
          >
            <img src={heroImage} alt="hero" className="w-full h-96 object-cover"/>
          </motion.div>

          {/* floating accent box */}
          <motion.div
            initial={{ scale: .9, opacity: .8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: .3 }}
            className="absolute -bottom-6 right-6 bg-tealDark text-white px-4 py-2 rounded shadow-lg"
          >
            <div className="text-xs">Award Winning Studio</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
