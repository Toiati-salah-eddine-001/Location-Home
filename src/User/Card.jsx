import React from 'react'
import {Heart, Star, MapPin} from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
function Card({listing}) {
    const navigate = useNavigate()
    const hadelshowmorinfo=()=>{
     navigate(`/ProductPage/${listing.id}`)
    };
  return (
    <div key={listing.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border cursor-pointer">
  <div className="relative aspect-[4/3]">
    <img
      src={listing.image || "/placeholder.svg"}
      alt={listing.title}
      className="w-full h-full object-cover"
    />
    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-105 transition-transform">
      <Heart className="w-5 h-5 text-gray-600" />
    </button>
  </div>

  <div className="p-4 space-y-3" onClick={hadelshowmorinfo}>
    <div className="flex items-baseline gap-1">
      <span className="text-lg font-bold">dès {listing.price} €</span>
      <span className="text-gray-500">/nuit</span>
    </div>

    <h3 className="font-medium text-gray-900">{listing.title}</h3>
    <p className="text-gray-600 text-sm">{listing.description}</p>

    <div className="flex items-center gap-1 text-gray-500">
      <MapPin className="w-4 h-4" />
      <span className="text-sm">{listing.location}</span>
    </div>

    <div className="flex items-center justify-between pt-2">
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 fill-[#FF7E5F] text-[#FF7E5F]" />
        <span className="font-medium">{listing.rating}/5</span>
        <span className="text-gray-500 text-sm">({listing.reviews})</span>
      </div>
      <Link to={`/ProductPage/${listing.id}`} className="bg-[#FF7E5F] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#FEB47B] transition-colors">
        Voir l'offre
      </Link>
    </div>
  </div>
</div>
  )
}

export default Card