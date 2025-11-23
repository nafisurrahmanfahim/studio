import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Team from './components/Team'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main className="space-y-24">
        <Hero />
        <Services />
        <Projects />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
