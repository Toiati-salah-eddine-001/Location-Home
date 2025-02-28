import React, { useState } from 'react'
import { Search, Menu, Eye } from "lucide-react";
import { Link } from 'react-router-dom'

function FirstSectionListP() {
  const [search,setsearch]=useState('')

  const hndelclick=()=>{
    if(search){
      localStorage.setItem('search',search);
    }else{
      localStorage.removeItem('search');
    }
  }
 
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#FF7E5F] to-[#FEB47B] font-sans">
    {/* Header */}
    <header className="flex justify-between items-center p-4 md:p-6">
      <div className="text-white text-xl md:text-2xl font-bold">Darna</div>
      <div className="flex items-center gap-2 md:gap-4">
        <Link
          to="/signup"
          className="text-white hover:text-white/90 text-sm md:text-base"
        >
          Devenez hôte
        </Link>
        <button className="text-white p-1 md:p-2">
          <Menu className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>
    </header>

    {/* Main Content */}
    <main className="px-4 md:px-6 pt-8 md:pt-12 flex flex-col items-center">
      <div className="max-w-xl md:max-w-2xl mb-6 md:mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 md:mb-12">
          La plus grande sélection de locations de vacances au monde
        </h1>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-5xl bg-white/95 backdrop-blur-sm rounded-3xl md:rounded-full shadow-xl p-3 border border-white/20">
  <form className="flex flex-col md:flex-row items-center" onSubmit={hndelclick}>
    {/* Location - Enhanced */}
    <div className="flex-1 relative flex items-center px-4 py-3 w-full group">
      <Search className="h-5 w-5 text-[#FF7E5F] absolute left-6 transition-all duration-300 group-hover:scale-110" />
      <input
       value={search}
       onChange={(e)=>setsearch(e.target.value)}
        type="text"
        placeholder="Où allez-vous ?"
        className="w-full pl-14 pr-6 py-3 text-base md:text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7E5F]/20 rounded-full bg-gray-50"
      />
    </div>

    {/* Search Button - Enhanced */}
    <div className="w-full md:w-auto pt-2 md:pt-0 px-3">
      <button className="w-full bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] hover:from-[#FEB47B] hover:to-[#FF7E5F] text-white rounded-full px-8 md:px-10 py-3 text-base md:text-lg font-semibold transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#FF7E5F]/50"
      >
        Chercher
      </button>
    </div>
  </form>
</div>
    </main>
  </div>
  )
}

export default FirstSectionListP