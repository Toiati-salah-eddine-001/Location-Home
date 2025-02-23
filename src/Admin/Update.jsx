import React, { useState ,useEffect} from "react";
import { useAuth } from "../AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import MapComponent2 from "../MapComponent2";
import useIndexedDB from "../useIndexedDB";

function Dashboard() {
  const { currentUser, Logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [Location, setLocation] = useState(null);
  const {id}=useParams()
  console.log(id);
  

  const {updateData} = useIndexedDB('CC4','Location');

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
    updateData(Number(id),Alldata);
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
    // navigate('Dashboard/ListLocation')
    window.history.back()
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
        className="flex  min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#f26c0d] tracking-light text-[32px] font-bold leading-tight min-w-72">
                  Update Location
                </p>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#f26c0d] text-base font-medium leading-normal pb-2">
                    Title
                  </p>

                  <input
                    type="text"
                    name="title"
                    value={Alldata.title}
                    onChange={handelchange}
                    placeholder="Enter a title for your listing"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1c130d] focus:outline-0 focus:ring-0 border-2 border-[#f26c0d] bg-white focus:border-[#f26c0d] h-14 placeholder:text-[#9c6c49] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#f26c0d] text-base font-medium leading-normal pb-2">
                    Description
                  </p>
                  <textarea
                    placeholder="Describe your property"
                    name="description"
                    onChange={handelchange}
                    value={Alldata.description}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1c130d] focus:outline-0 focus:ring-0 border-2 border-[#f26c0d] bg-white focus:border-[#f26c0d] min-h-36 placeholder:text-[#9c6c49] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>

              <h3 className="text-[#1c130d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Location
              </h3>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1c130d] text-base font-medium leading-normal pb-2">
                    Street address
                  </p>
                  <MapComponent2 setLocation={setLocation}/>
                </label>
              </div>

              <h3 className="text-[#1c130d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Infomation
              </h3>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1c130d] text-base font-medium leading-normal pb-2">
                    surface
                  </p>
                  <input
                    type="text"
                    name="surface"
                    value={Alldata.surface}
                    onChange={handelchange}
                    placeholder="Enter a street address"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1c130d] focus:outline-0 focus:ring-0 border-2 border-[#f26c0d] bg-white focus:border-[#f26c0d] h-14 placeholder:text-[#9c6c49] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1c130d] text-base font-medium leading-normal pb-2">
                    Type Chombre
                  </p>
                  <input
                    type="text"
                    name="typeChambre"
                    value={Alldata.typeChambre}
                    onChange={handelchange}
                    placeholder="Enter a street address"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1c130d] focus:outline-0 focus:ring-0 border-2 border-[#f26c0d] bg-white focus:border-[#f26c0d] h-14 placeholder:text-[#9c6c49] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1c130d] text-base font-medium leading-normal pb-2">
                    Capacité
                  </p>
                  <input
                    type="text"
                    name="Capacité"
                    value={Alldata.Capacité}
                    onChange={handelchange}
                    placeholder="Enter a street address"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1c130d] focus:outline-0 focus:ring-0 border-2 border-[#f26c0d] bg-white focus:border-[#f26c0d] h-14 placeholder:text-[#9c6c49] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1c130d] text-base font-medium leading-normal pb-2">
                    chambres
                  </p>
                  <input
                    type="text"
                    name="chambres"
                    value={Alldata.chambres}
                    onChange={handelchange}
                    placeholder="Enter a street address"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1c130d] focus:outline-0 focus:ring-0 border-2 border-[#f26c0d] bg-white focus:border-[#f26c0d] h-14 placeholder:text-[#9c6c49] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="piscine"
                    checked={Alldata.piscine}
                    onChange={handelchange}
                    className="form-checkbox h-5 w-5 text-[#f26c0d] border-2 border-[#f26c0d] rounded focus:ring-0"
                  />
                  <span className="text-[#1c130d] text-base font-medium leading-normal">
                    Piscine
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="Bains"
                    checked={Alldata.Bains}
                    onChange={handelchange}
                    className="form-checkbox h-5 w-5 text-[#f26c0d] border-2 border-[#f26c0d] rounded focus:ring-0"
                  />
                  <span className="text-[#1c130d] text-base font-medium leading-normal">
                    Bains
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="wifi"
                    checked={Alldata.wifi}
                    onChange={handelchange}
                    className="form-checkbox h-5 w-5 text-[#f26c0d] border-2 border-[#f26c0d] rounded focus:ring-0"
                  />
                  <span className="text-[#1c130d] text-base font-medium leading-normal">
                    Wifi
                  </span>
                </label>
              </div>

              <h3 className="text-[#1c130d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Photos
              </h3>
              <div className="flex flex-col p-4">
                <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#e8d9ce] px-6 py-14">
                  <p className="text-[#1c130d] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                    Upload your photos
                  </p>
                  <label className="flex flex-col items-center cursor-pointer">
                    <span className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f26c0d] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                      Choose File
                    </span>
                    <input
                      type="file"
                      onChange={handeladdImage}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <h3 className="text-[#1c130d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Pricing
              </h3>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1c130d] text-base font-medium leading-normal pb-2">
                    Price per night
                  </p>
                  <input
                    type="text"
                    name="price"
                    placeholder="$"
                    value={Alldata.price}
                    onChange={handelchange}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1c130d] focus:outline-0 focus:ring-0 border-2 border-[#f26c0d] bg-white focus:border-[#f26c0d] h-14 placeholder:text-[#9c6c49] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>

              <div className="flex px-4 py-3 justify-end">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f26c0d] text-white gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]"
                  type="submit"
                >
                  <div
                    className="text-[#fcfaf8]"
                    data-icon="ArrowRight"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                    </svg>
                  </div>
                  <span className="truncate">Save and continue</span>
                </button>
              </div>
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
