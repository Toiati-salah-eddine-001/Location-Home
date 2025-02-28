import React, { useState, useEffect } from 'react'
import { Search, Menu, Eye } from "lucide-react";
import { useSelector } from 'react-redux';
import Card2 from './Card2';
import { useNavigate } from 'react-router-dom';

function SecendSectioListP() {
  const ListeData = useSelector(state => state.LiteLocatin)
  const [visibilitie, setvisibilitie] = useState(6)
  const [loading, setLoading] = useState(true);
  const search = localStorage.getItem('search')?.toLowerCase() || '';
  const navigate = useNavigate()

  useEffect(() => {
    if (ListeData.length > 0) {
      setLoading(false);
    }
  }, [ListeData]);

  let Dataserched = search
    ? ListeData.filter((items) =>
        items.title.toLowerCase().includes(search)
      )
    : ListeData;

  useEffect(() => {
    const handlePopState = () => {
      localStorage.removeItem('search');
      Dataserched = ListeData;
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [ListeData]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Nos meilleures locations de vacances
      </h2>

      <div className="flex gap-4 mb-8">
        <button className="px-6 py-2 bg-[#FF7E5F] text-white rounded-full text-sm font-medium">
          Notre sélection
        </button>
        <button className="px-6 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#FEB47B]">
          <Eye />
          Offres vues récemment
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Dataserched.slice(0, visibilitie).map((items) => (
            <Card2 key={items.id} items={items} />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-8">
        <button
          className="bg-[#FF7E5F] hover:bg-[#FEB47B] text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform shadow-lg hover:shadow-xl"
          onClick={() => setvisibilitie(visibilitie + 3)}
        >
          Afficher plus d'offres
        </button>
      </div>
    </div>
  )
}

export default SecendSectioListP