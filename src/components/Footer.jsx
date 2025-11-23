import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-tealDark text-white py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-2xl font-semibold">iSTUDIO</div>
          <p className="text-sm text-gray-200 mt-2">© {new Date().getFullYear()} iSTUDIO. All rights reserved.</p>
        </div>
        <div className="text-sm text-gray-200">Designed with ♥ — Modern 2025 UI</div>
      </div>
    </footer>
  )
}
