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
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <div className="max-w-8xl mx-auto">
            {/* Image Gallery */}
            <div className="relative w-full h-[400px] bg-gray-100 mb-8">
              <div className="flex overflow-x-auto snap-x snap-mandatory h-full scrollbar-hide">
                {/* Image 1 */}
                <div className="flex-none w-full h-full snap-center relative">
                  <img
                    src={room.image}
                    alt="Room view 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-orange-600"
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
                      <span className="text-sm font-medium">DARNA</span>
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
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-orange-600"
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
                      <span className="text-sm font-medium">DARNA</span>
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
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-orange-600"
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
                      <span className="text-sm font-medium">DARNA</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Navigation Arrows */}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <svg
                  className="w-6 h-6 text-orange-600"
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
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <svg
                  className="w-6 h-6 text-orange-600"
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
            <div className="px-4 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Information */}
                <div className="lg:w-2/3">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    {room.title}
                  </h1>
                  <p className="text-gray-600 mb-6">
                    16 Rue Oued Meklouya, Rabat, Morocco
                  </p>
                  {/* Room Features */}
                  <div className="grid grid-cols-4 gap-4 py-6 border-t border-b border-gray-200 mb-8">
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-orange-600"
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
                      <div className="text-sm text-gray-600">Type de logement</div>
                      <div className="text-sm font-medium">Chambre Double</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-orange-600"
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
                      <div className="text-sm text-gray-600">Capacité</div>
                      <div className="text-sm font-medium">2 + invités</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-orange-600"
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
                      <div className="text-sm text-gray-600">Chambres</div>
                      <div className="text-sm font-medium">1 Chambre</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-orange-600"
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
                      <div className="text-sm text-gray-600">Bains</div>
                      <div className="text-sm font-medium">1 Full</div>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      À propos de cet appartement
                    </h2>
                    <p className="text-gray-600">{room.description}</p>
                  </div>
                  <div className="mt-8 mb-8 h-[500px]">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Localisation
                    </h3>
                    <div className="w-full h-40 bg-gray-200 rounded-lg">
                      <MapComponent Location={room.location} />
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Booking */}
                <div className="lg:w-1/3">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-3xl font-bold text-gray-900">
                        {room.price}
                        <span className="text-lg font-normal text-gray-500">
                          DH/Nuit
                        </span>
                      </div>
                    </div>
                    {/* Date Selection */}
                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">
                            Check-in
                          </label>
                          <input
                            type="date"
                            value={checkIn}
                            onChange={(e)=>{setcheckIn(e.target.value)}}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            defaultValue="2024-02-25"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">
                            Check-out
                          </label>
                          <input
                            type="date"
                            value={checkOut}
                            onChange={(e)=>{setcheckOut(e.target.value)}}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            defaultValue="2024-03-05"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Total */}
                    <div className="border-t border-gray-200 pt-4 mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Total</span>
                        <span className="font-bold">{CalcTotalePrice(room.price)}$</span>
                      </div>
                      <button className="w-full bg-orange-600 text-white rounded-lg py-3 font-medium hover:bg-orange-700 transition-colors"
                      onClick={()=>handelclick(room.price) }
                      >
                        Réservation instantanée
                      </button>
                    </div>
                    {/* Additional Actions */}
                    <div className="flex justify-between items-center text-sm text-gray-600">
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
