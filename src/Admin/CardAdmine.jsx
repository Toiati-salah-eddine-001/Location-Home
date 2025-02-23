import React from 'react'
import { Home, Edit, Trash2 } from "lucide-react"
import { useNavigate } from 'react-router-dom';
import useIndexedDB from '../useIndexedDB';
function CardAdmine({room}) {
    const {deleteData} = useIndexedDB('CC4','Location');
    const navigate=useNavigate()

    const Update = () => {
        navigate(`Update/${room.id}`)
    }

    const handelRemove=()=>{
        deleteData(room.id)
        window.location.reload();
    }
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 mx-auto mb-4">
      <img src={ room.image || "/placeholder.svg"} alt="salah" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Home className="w-5 h-5 text-orange-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">{room.title}</h2>
        </div>
        <p className="text-gray-600 mb-4">{room.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-gray-800">${room.price} </span>
          <div className="space-x-2">
            <button
              onClick={Update}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              aria-label="Update"
            >
              <Edit className="w-5 h-5" />
            </button>
            <button
              onClick={handelRemove}
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              aria-label="Delete"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CardAdmine