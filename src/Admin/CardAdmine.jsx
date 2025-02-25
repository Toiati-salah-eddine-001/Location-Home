import React from 'react'
import { Home, Edit, Trash2, Star, User, ArrowRight } from "lucide-react"
import { useNavigate } from 'react-router-dom';
import useIndexedDB from '../useIndexedDB';

function CardAdmine({ room }) {
  const { deleteData } = useIndexedDB('CC4', 'Location');
  const navigate = useNavigate();

  const Update = () => {
    navigate(`Update/${room.id}`)
  }

  const handelRemove = () => {
    deleteData(room.id)
    window.location.reload();
  }

  return (
    <>
<div className="w-80 mx-auto mb-6 group relative">
      {/* Card with floating effect */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
        {/* Orange gradient overlay with opacity */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r  z-10 rounded-t-xl"></div>
          
          {/* Image */}
          <img 
            src={room.image || "/placeholder.svg"} 
            alt={room.title || "Room"} 
            className="w-full h-56 object-cover rounded-t-xl"
          />
          
          {/* Price tag - floating element */}
          <div className="absolute -bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md z-20">
            <span className="font-bold text-xl">${room.price}</span>
            <span className="text-xs text-orange-100">/night</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 pt-6">
          {/* Title */}
          <div className="flex items-center mb-3">
            <div className="p-2 bg-orange-100 rounded-lg mr-3">
              <Home className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">{room.title}</h2>
          </div>
          
          {/* Description with custom styling */}
          <div className="relative pl-3 mb-4">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-200 rounded-full"></div>
            <p className="text-gray-600 text-sm">{room.description}</p>
          </div>
          
          {/* Room features */}
          <div className="flex justify-between text-xs text-gray-500 mb-4">
            <div className="flex items-center">
              <User className="w-4 h-4 text-orange-400 mr-1" />
              <span>2-4 guests</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-orange-400 mr-1" />
              <span>4.8 rating</span>
            </div>
          </div>
          
          {/* Action buttons with animated hover effect */}
          <div className="flex justify-between items-center pt-3 border-t border-orange-100">
            <button className="flex items-center font-medium text-orange-500 hover:text-orange-700 transition-colors">
              <span>View details</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </button>
            
            <div className="flex space-x-2">
              <button
                onClick={Update}
                className="p-2 bg-white text-orange-500 rounded-lg border border-orange-200 hover:bg-orange-50 transition-colors"
                aria-label="Update"
              >
                <Edit className="w-4 h-4" />
              </button>
              
              <button
                onClick={handelRemove}
                className="p-2 bg-white text-red-500 rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
                aria-label="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Shadow effect on hover */}
      <div className="absolute inset-0 bg-orange-500 opacity-0 blur-xl -z-10 transition-opacity duration-300 group-hover:opacity-10 rounded-xl"></div>
    </div>
    </>
  )
}

export default CardAdmine