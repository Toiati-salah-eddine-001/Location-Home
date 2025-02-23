import React from 'react'
import { Search, Menu, Eye } from "lucide-react";
import { Link } from 'react-router-dom'

function FirstSectionListP() {
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
      <div className="w-full max-w-5xl bg-white rounded-3xl md:rounded-full shadow-lg p-2">
        <form className="flex flex-col md:flex-row items-stretch">
          {/* Location */}
          <div className="flex-1 relative flex items-center px-4 py-2 w-full">
            <Search className="h-5 w-5 text-gray-400 absolute left-4" />
            <input
              type="text"
              placeholder="Où allez-vous ?"
              className="w-full pl-10 pr-4 py-2 text-base md:text-lg placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          {/* Date Range */}
          <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-200 px-4 py-2 w-full">
            <label htmlFor="date-depart" className=" text-gray-400">
              Date de départ
            </label>
            <input
              type="date"
              id="date-depart"
              placeholder="date depart"
              className="w-full py-2 text-gray-600 focus:outline-none text-base md:text-lg"
              defaultValue="2024-02-21"
              onClick={(e) => e.target.showPicker()}
            />
          </div>
          <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-200 px-4 py-2 w-full">
            <label htmlFor="date-retour" className=" text-gray-400">
              Date de retour
            </label>
            <input
              type="date"
              id="date-retour"
              placeholder="date retour"
              className="w-full py-2 text-gray-600 focus:outline-none text-base md:text-lg"
              defaultValue="2024-02-21"
              onClick={(e) => e.target.showPicker()}
            />
          </div>

          {/* Persons */}

          <div className="flex-1 border-t md:border-t-0 md:border-l px-4 py-2 w-full ">
            <select className="w-full p-2 text-gray-600 focus:outline-none appearance-none bg-transparent text-base md:text-lg text-center mt-4">
              <option className="p-2 text-center">1 pers.</option>
              <option className="p-5 w-90">2 pers.</option>
              <option className="p-2">3 pers.</option>
              <option className="p-2">4+ pers.</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="w-full md:w-auto pt-2 md:pt-0 px-2">
            <button className="w-full bg-[#FF7E5F] hover:bg-[#FEB47B] text-white rounded-full px-6 md:px-8 py-3 text-base md:text-lg font-semibold transition duration-300 ease-in-out mt-5">
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