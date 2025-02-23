import React from 'react'
import { useSelector } from 'react-redux'
import CardAdmine from './CardAdmine'
import useDataLocation from '../Redux/GetData'


function ListeAnonce() {
    const ListeData = useDataLocation();
    console.log(ListeData)
  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-orange-600">Liste Of Annonces</h1>
      <div className="flex flex-wrap gap-4">
        {ListeData.map((room) => (
          <CardAdmine key={room.id} room={room} />
        ))}
      </div>
    </>
  )
}

export default ListeAnonce