import React from 'react'
import {Heart, Star, MapPin} from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
function Card2({items}) {
    const navigate = useNavigate()
    const hadelshowmorinfo=()=>{
     navigate(`/ProductPage/${items.id}`)
    };
  return (
<div key={items.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 cursor-pointer transform hover:-translate-y-1">
  <div className="relative aspect-[4/3]">
    <img
      src={items.image || "/placeholder.svg"}
      alt={items.title}
      className="w-full h-full object-cover"
    />
    <div className="absolute top-0 left-0 bg-gradient-to-b from-black/40 to-transparent w-full h-16 opacity-60"></div>
    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
      <Heart className="w-5 h-5 text-orange-500" />
    </button>
    <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
      dès {items.price} €/nuit
    </div>
  </div>
  
  <div className="p-5 space-y-3" onClick={hadelshowmorinfo}>
    <h3 className="font-semibold text-gray-900 text-lg">{items.title}</h3>
    <p className="text-gray-600 text-sm line-clamp-2">{items.description}</p>
    
    <div className="flex items-center gap-2 text-gray-600">
      <MapPin className="w-4 h-4 text-orange-500" />
      <span className="text-sm">an dyab</span>
    </div>
    
    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-3">
      <div className="flex items-center gap-1">
        <div className="bg-orange-50 px-2 py-1 rounded-lg flex items-center">
          <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
          <span className="font-medium text-orange-600 ml-1">/5</span>
        </div>
      </div>
      <Link 
        to={`/ProductPage/${items.id}`} 
        className="bg-gradient-to-r from-orange-500 to-orange-400 text-white font-medium px-4 py-2 rounded-full hover:from-orange-400 hover:to-orange-500 transition-all shadow-sm hover:shadow-md"
      >
        Voir l'offre
      </Link>
    </div>
  </div>
</div>
  )
}

export default Card2