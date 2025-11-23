import React from 'react'

export default function Navbar(){
  return (
    <header className="py-6 bg-white/60 backdrop-blur-md sticky top-0 z-40">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-display font-semibold text-tealDark">iSTUDIO</div>
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a className="hover:text-tealDark" href="#home">Home</a>
          <a className="hover:text-tealDark" href="#services">Services</a>
          <a className="hover:text-tealDark" href="#projects">Projects</a>
          <a className="hover:text-tealDark" href="#team">Team</a>
          <a className="hover:text-tealDark" href="#contact">Contact</a>
        </nav>
        <button className="hidden md:inline-block bg-tealDark text-white px-4 py-2 rounded-lg text-sm">Get Quote</button>
      </div>
    </header>
  )
}
