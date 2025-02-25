import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MapComponent from "./MapComponent";
import Footer from "../CompossantHF/Footer";
import { useSelector } from "react-redux";

function SinglePage() {
  const [checkIn , setcheckIn]=useState('')
  const [checkOut , setcheckOut]=useState('')
  const navigate= useNavigate()
  // const [Totale , setTotale]=useState(0)

  const CalcTotalePrice = (pricePerDay)=>{
    if (!checkIn || !checkOut || !pricePerDay) {
      console.error("Invalid input: checkIn, checkOut, or pricePerDay is missing.");
      return 0; 
   }
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const differenceInTime = checkOutDate - checkInDate;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    return differenceInDays * pricePerDay;
  }
  const { id } = useParams();
  console.log(id);
  const ListeDataLocation = useSelector(state => state.LiteLocatin);
  const room = ListeDataLocation.find((listing) => listing.id === parseInt(id));
  if (!room) {
    return <div>Room not found</div>;
  }
  const handelclick=(pricePerDay)=>{
    navigate('/PaymentValidation')
    localStorage.setItem('checkIn',checkIn);
    localStorage.setItem('checkOut',checkOut);
    localStorage.setItem('TotalePrice',CalcTotalePrice(pricePerDay));
    localStorage.setItem('Title',room.title);
  }
  return (
    <>
<div className="flex flex-col min-h-screen bg-gray-50">
  <div className="flex-grow">
    <div className="max-w-8xl mx-auto">
      {/* Enhanced Image Gallery with Panoramic View */}
      <div className="relative w-full h-[500px] bg-gray-100 mb-8 overflow-hidden rounded-b-3xl shadow-lg">
        <div className="flex overflow-x-auto snap-x snap-mandatory h-full scrollbar-hide">
          {/* Image 1 */}
          <div className="flex-none w-full h-full snap-center relative">
            <img
              src={room.image}
              alt="Room view 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm font-bold tracking-wider">DARNA</span>
              </div>
            </div>
          </div>
          {/* Image 2 */}
          <div className="flex-none w-full h-full snap-center relative">
            <img
              src={room.image}
              alt="Room view 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm font-bold tracking-wider">DARNA</span>
              </div>
            </div>
          </div>
          {/* Image 3 */}
          <div className="flex-none w-full h-full snap-center relative">
            <img
              src={room.image}
              alt="Room view 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm font-bold tracking-wider">DARNA</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Counter */}
        <div className="absolute bottom-6 right-6">
          <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            1/3
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-orange-50 transition-colors">
          <svg
            className="w-6 h-6 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-orange-50 transition-colors">
          <svg
            className="w-6 h-6 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      
      {/* Content Section */}
      <div className="px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Information */}
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">Premium</span>
              <div className="flex items-center text-yellow-500">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="ml-1 text-gray-800 font-medium">4.9</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {room.title}
            </h1>
            <p className="text-gray-600 mb-8 flex items-center">
              <svg
                className="w-5 h-5 text-orange-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              16 Rue Oued Meklouya, Rabat, Morocco
            </p>
            
            {/* Room Features - Redesigned with Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div className="text-sm text-gray-500">Type de logement</div>
                <div className="text-base font-semibold mt-1">Chambre Double</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="text-sm text-gray-500">Capacité</div>
                <div className="text-base font-semibold mt-1">2 + invités</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div className="text-sm text-gray-500">Chambres</div>
                <div className="text-base font-semibold mt-1">1 Chambre</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="text-sm text-gray-500">Bains</div>
                <div className="text-base font-semibold mt-1">1 Full</div>
              </div>
            </div>
            
            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                À propos de cet appartement
              </h2>
              <p className="text-gray-600 leading-relaxed">{room.description}</p>
            </div>
            
            <div className="mt-8 mb-8 h-[400px]">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Localisation
              </h3>
              <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md">
                <MapComponent Location={room.location} />
              </div>
            </div>
          </div>
          
          {/* Right Column - Booking */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg sticky top-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    {room.price}
                    <span className="text-lg font-normal text-gray-500 ml-1">
                      DH/Nuit
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className="ml-1 text-sm text-gray-600">4.9 (124 avis)</span>
                  </div>
                </div>
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-sm font-medium">
                  -15% aujourd'hui
                </div>
              </div>
              
              {/* Date Selection */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2 font-medium">
                      Check-in
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e)=>{setcheckIn(e.target.value)}}
                      className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-all"
                      defaultValue="2024-02-25"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2 font-medium">
                      Check-out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e)=>{setcheckOut(e.target.value)}}
                      className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-all"
                      defaultValue="2024-03-05"
                    />
                  </div>
                </div>
              </div>
              
              {/* Price Breakdown */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">{room.price} DH x 7 nuits</span>
                  <span className="font-medium">{CalcTotalePrice(room.price) - 100} DH</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Frais de nettoyage</span>
                  <span className="font-medium">100 DH</span>
                </div>
                <div className="border-t border-gray-200 my-2 pt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{CalcTotalePrice(room.price)} DH</span>
                  </div>
                </div>
              </div>
              
              <button 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl py-4 font-medium hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                onClick={()=>handelclick(room.price)}
              >
                Réservation instantanée
              </button>
              
              {/* Payment Info */}
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>Vous ne serez pas débité maintenant</p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Paiement sécurisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
    </>
  );
}

export default SinglePage;
