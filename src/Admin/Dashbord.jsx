import React, { useState ,useEffect} from "react";
import { useAuth } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import MapComponent2 from "../MapComponent2";
import useIndexedDB from "../useIndexedDB";

function Dashboard() {
  const { currentUser, Logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [Location, setLocation] = useState(null);
  console.log(Location);
  

  const {data, addData} = useIndexedDB('CC4','Location');

  const [Alldata, setAlldata] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    image: "",
    surface: "",
    typeChambre: "",
    Capacité: "",
    chambres: "",
    piscine: false,
    Bains: false,
    wifi: false,
  });

  const handelchange = (e) => {
    const { name, type, checked, value } = e.target;
    setAlldata((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handeladdImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result; 
        setAlldata((prev) => ({
          ...prev,
          image: base64,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    if (Location) {
      setAlldata((prevState) => ({
        ...prevState,
        location:{
          lat: Location.lat,
          lng: Location.lng
        },
      }));
    }
  }, [Location]); 

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(Alldata)
    addData(Alldata);
    setAlldata({
      title: "",
      description: "",
      location: "",
      price: "",
      image: "",
      surface: "",
      typeChambre: "",
      Capacité: "",
      chambres: "",
      piscine: false,
      Bains: false,
      wifi: false,
    })
  };


  const handleLogout = async () => {
    setError("");
    try {
      await Logout();
      navigate("/Login"); 
    } catch (err) {
      setError("Error while trying to log out");
    }
  };

  return (
    <>
 <form onSubmit={handelsubmit}> 
  <div
    className="min-h-screen bg-gradient-to-br from-orange-50 to-white"
    style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
  >
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-full opacity-50"></div>
          <h1 className="text-4xl font-extrabold text-orange-600 relative z-10 pb-2">
            Create a new Location
          </h1>
          <div className="w-32 h-2 bg-orange-500 rounded-full"></div>
        </div>
        
        {/* Form Sections */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-orange-500">
          {/* Basic Info Section */}
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Basic Information</h2>
            </div>
            
            <div className="mb-6">
              <label className="block">
                <span className="text-orange-600 font-medium">Title</span>
                <input
                  type="text"
                  name="title"
                  value={Alldata.title}
                  onChange={handelchange}
                  placeholder="What would you call your place?"
                  className="mt-1 block w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-0 focus:border-orange-500 transition-colors text-gray-800 placeholder-orange-300"
                />
              </label>
            </div>

            <div className="mb-6">
              <label className="block">
                <span className="text-orange-600 font-medium">Description</span>
                <textarea
                  name="description"
                  value={Alldata.description}
                  onChange={handelchange}
                  placeholder="Tell us what makes your place special..."
                  className="mt-1 block w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-0 focus:border-orange-500 transition-colors text-gray-800 placeholder-orange-300 min-h-36"
                />
              </label>
            </div>
          </div>
        </div>
        
        {/* Location Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-orange-500">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Location</h2>
          </div>

          <div className="mb-6">
            <label className="block">
              <span className="text-gray-800 font-medium">Street address</span>
              <div className="mt-2 border-2 border-orange-200 rounded-xl overflow-hidden">
                <MapComponent2 setLocation={setLocation}/>
              </div>
            </label>
          </div>
        </div>

        {/* Property Details Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-orange-500">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Property Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block">
                <span className="text-gray-800 font-medium">Surface Area</span>
                <div className="relative">
                  <input
                    type="text"
                    name="surface"
                    value={Alldata.surface}
                    onChange={handelchange}
                    placeholder="Size in m²"
                    className="mt-1 block w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-0 focus:border-orange-500 transition-colors text-gray-800 placeholder-orange-300"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>

            <div className="mb-4">
              <label className="block">
                <span className="text-gray-800 font-medium">Room Type</span>
                <div className="relative">
                  <input
                    type="text"
                    name="typeChambre"
                    value={Alldata.typeChambre}
                    onChange={handelchange}
                    placeholder="e.g. Suite, Standard, etc."
                    className="mt-1 block w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-0 focus:border-orange-500 transition-colors text-gray-800 placeholder-orange-300"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>

            <div className="mb-4">
              <label className="block">
                <span className="text-gray-800 font-medium">Capacity</span>
                <div className="relative">
                  <input
                    type="text"
                    name="Capacité"
                    value={Alldata.Capacité}
                    onChange={handelchange}
                    placeholder="Number of guests"
                    className="mt-1 block w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-0 focus:border-orange-500 transition-colors text-gray-800 placeholder-orange-300"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>

            <div className="mb-4">
              <label className="block">
                <span className="text-gray-800 font-medium">Bedrooms</span>
                <div className="relative">
                  <input
                    type="text"
                    name="chambres"
                    value={Alldata.chambres}
                    onChange={handelchange}
                    placeholder="Number of bedrooms"
                    className="mt-1 block w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-0 focus:border-orange-500 transition-colors text-gray-800 placeholder-orange-300"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="mt-6">
            <span className="text-gray-800 font-medium block mb-3">Amenities</span>
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-3 p-3 border-2 border-orange-200 rounded-xl cursor-pointer hover:bg-orange-50 transition-colors">
                <input
                  type="checkbox"
                  name="piscine"
                  checked={Alldata.piscine}
                  onChange={handelchange}
                  className="form-checkbox h-5 w-5 text-orange-500 border-2 border-orange-300 rounded focus:ring-0"
                />
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-gray-800 font-medium">Swimming Pool</span>
                </span>
              </label>
              
              <label className="flex items-center gap-3 p-3 border-2 border-orange-200 rounded-xl cursor-pointer hover:bg-orange-50 transition-colors">
                <input
                  type="checkbox"
                  name="Bains"
                  checked={Alldata.Bains}
                  onChange={handelchange}
                  className="form-checkbox h-5 w-5 text-orange-500 border-2 border-orange-300 rounded focus:ring-0"
                />
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12H3m9-9v18" />
                  </svg>
                  <span className="text-gray-800 font-medium">Bathroom</span>
                </span>
              </label>
              
              <label className="flex items-center gap-3 p-3 border-2 border-orange-200 rounded-xl cursor-pointer hover:bg-orange-50 transition-colors">
                <input
                  type="checkbox"
                  name="wifi"
                  checked={Alldata.wifi}
                  onChange={handelchange}
                  className="form-checkbox h-5 w-5 text-orange-500 border-2 border-orange-300 rounded focus:ring-0"
                />
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                  <span className="text-gray-800 font-medium">WiFi</span>
                </span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Photos Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-orange-500">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Photos</h2>
          </div>

          <div className="bg-orange-50 border-2 border-dashed border-orange-200 rounded-xl p-8 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <p className="text-gray-800 font-bold text-lg mb-2">Upload your photos</p>
            <p className="text-gray-500 text-sm mb-6 text-center max-w-md">High-quality photos will help your listing stand out and get more bookings</p>
            <label className="cursor-pointer">
              <div className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                Choose Files
              </div>
              <input
                type="file"
                onChange={handeladdImage}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-orange-500">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Pricing</h2>
          </div>

          <div className="mb-6">
            <label className="block">
              <span className="text-gray-800 font-medium">Price per night</span>
              <div className="relative mt-1">
                <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center bg-orange-100 border-2 border-orange-200 rounded-l-xl">
                  <span className="text-orange-500 font-bold">$</span>
                </div>
                <input
                  type="text"
                  name="price"
                  value={Alldata.price}
                  onChange={handelchange}
                  placeholder="Enter price"
                  className="block w-full pl-12 pr-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-0 focus:border-orange-500 transition-colors text-gray-800 placeholder-orange-300"
                />
              </div>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="relative overflow-hidden group bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg"
          >
            <span className="flex items-center gap-2">
              <span className="text-white">Save and continue</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</form>
      
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
}

export default Dashboard;
