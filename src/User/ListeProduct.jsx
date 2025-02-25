import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, Eye } from "lucide-react";
import { listings } from "../DataTest";
import Card from "./Card";
import Footer from "../CompossantHF/Footer";
import FirstSectionListP from "./FirstSectionListP";
import SecendSectioListP from "./SecendSectioListP";
import { useDispatch, useSelector } from "react-redux";
import useDataLocation from "../Redux/GetData";
import { AddData } from "../Redux/Action";




function ListeProduct() {
  console.log(listings);
  // const selectorData=useSelector(state=>state)
  // console.log(selectorData)
  console.log(useDataLocation())
  const GlobalData = useDataLocation()
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (GlobalData && GlobalData.length > 0) {
      dispatch(AddData(GlobalData)); 
    }
  }, [GlobalData, dispatch]);
  return (
    <>
      {/* section 1 */}
      <FirstSectionListP/>
      {/* end section 1 */}
      {/* section 2 */}
        <SecendSectioListP/>
      {/* end section 2 */}
      {/* section 3 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center sm:text-left">
        Pourquoi choisir DARNA ?
      </h2>

      {/* Grid container with horizontal scroll on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 scrollbar-hide">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm min-w-[280px] sm:min-w-0">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Clarté des prix, pas de surprises
          </h3>
          <p className="text-gray-600">
            Dépensez votre budget exactement comme prévu en comparant des
            milliers de partenaires.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm min-w-[280px] sm:min-w-0">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Simplifiez-vous la recherche
          </h3>
          <p className="text-gray-600">
            Planifiez vos prochaines vacances en toute simplicité grâce à nos
            outils de recherche avancés utilisant l'IA.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm min-w-[280px] sm:min-w-0">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Trouvez l'hébergement de vos rêves
          </h3>
          <p className="text-gray-600">
            Explorez plus de 15 millions d'hébergements, la plus grande
            sélection de locations de vacances au monde.
          </p>
        </div>
      </div>
    </div>
      {/* end section 3 */}
      {/* section 4 */}
      <Footer/>
      {/* end section 4  */}
    </>
  );
}

export default ListeProduct;
