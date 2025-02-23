import React from 'react'
import {Heart, Star, MapPin} from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
function Card2({items}) {
    const navigate = useNavigate()
    const hadelshowmorinfo=()=>{
     navigate(`/ProductPage/${items.id}`)
    };
  return (
    <div key={items.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border cursor-pointer">
  <div className="relative aspect-[4/3]">
    <img
      src={items.image || "/placeholder.svg"}
      alt={items.title}
      className="w-full h-full object-cover"
    />
    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-105 transition-transform">
      <Heart className="w-5 h-5 text-gray-600" />
    </button>
  </div>

  <div className="p-4 space-y-3" onClick={hadelshowmorinfo}>
    <div className="flex items-baseline gap-1">
      <span className="text-lg font-bold">dès {items.price} €</span>
      <span className="text-gray-500">/nuit</span>
    </div>

    <h3 className="font-medium text-gray-900">{items.title}</h3>
    <p className="text-gray-600 text-sm">{items.description}</p>

    <div className="flex items-center gap-1 text-gray-500">
      <MapPin className="w-4 h-4" />
      <span className="text-sm">an dyab</span>
    </div>

    <div className="flex items-center justify-between pt-2">
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 fill-[#FF7E5F] text-[#FF7E5F]" />
        <span className="font-medium">/5</span>
        {/* <span className="text-gray-500 text-sm">({items.reviews})</span> */}
      </div>
      <Link to={`/ProductPage/${items.id}`} className="bg-[#FF7E5F] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#FEB47B] transition-colors">
        Voir l'offre
      </Link>
    </div>
  </div>
</div>
  )
}

export default Card2