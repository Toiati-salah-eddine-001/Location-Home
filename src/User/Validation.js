import { CreditCard, Calendar, User, Mail, Lock ,CalendarCheck,Phone} from "lucide-react"
import { useState } from "react";
import useIndexedDB from "../useIndexedDB";
// import Image from "next/image"

export default function PaymentValidation() {
  const checkOut=localStorage.getItem('checkOut');
  const checkIn=localStorage.getItem('checkIn');
  const Totalprice=localStorage.getItem('TotalePrice');
  const Title=localStorage.getItem('Title');

  const { data, addData, isDbReady } = useIndexedDB('CC4', 'Orders');
  // Function definie le mois
  const SelectMois=(date)=>{ 
    const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const Selmois= date.split('-')
    return `${mois[parseInt(Selmois[1])]} ${parseInt(Selmois[2])} ${parseInt(Selmois[0])}`
  }
  const [OrdersData, setOrdersData] = useState({
    Fname: '',
    Lname: '',
    Email: '',
    Phone: '',
    checkin:checkIn,
    checkout:checkOut,
    TotalPrice:Totalprice,
    Title:Title,
  });
  
  const hndelchange = (e) => {
    const { name, value } = e.target;
    setOrdersData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handelclick=()=>{
    if (!isDbReady) {
      console.error('قاعدة البيانات غير جاهزة بعد.');
      return;
  }
    addData(OrdersData);
  }
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="overflow-hidden rounded-xl bg-white shadow-xl">
          {/* Progress Bar */}
          <div className="flex w-full items-center bg-gradient-to-r from-[#1a4b4b] to-[#ff4444] p-4 text-white">          
            <div className="flex flex-1 justify-center gap-2">
              <span className="h-8 w-8 rounded-full bg-white text-[#ff4444] text-center leading-8">1</span>
              <span className="hidden sm:block">Confirmation</span>
            </div>
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-2">
            {/* Payment Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Confirmation Details</h2>
                <p className="text-sm text-gray-500">Please enter your Confirmation information</p>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="Fname" className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      onChange={hndelchange}
                      type="text"
                      name="Fname"
                      id="Fname"
                      placeholder="Your name"
                      value={OrdersData.Fname}
                      className="w-full rounded-md border border-gray-300 pl-10 py-2 px-3 focus:border-[#1a4b4b] focus:outline-none focus:ring-1 focus:ring-[#1a4b4b]"
                    />
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="Last Name" className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      onChange={hndelchange}
                      type="text"
                      id="Last Name"
                      name="Lname"
                      placeholder="Last Name"
                      value={OrdersData.Lname}
                      className="w-full rounded-md border border-gray-300 pl-10 py-2 px-3 focus:border-[#1a4b4b] focus:outline-none focus:ring-1 focus:ring-[#1a4b4b]"
                    />
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="Email" className="text-sm font-medium text-gray-700">
                      Emaile
                    </label>
                    <div className="relative">
                      <input
                        onChange={hndelchange}
                        type="text"
                        id="Email"
                        name="Email"
                        placeholder="Email address"
                        value={OrdersData.Email}
                        className="w-full rounded-md border border-gray-300 pl-10 py-2 px-3 focus:border-[#1a4b4b] focus:outline-none focus:ring-1 focus:ring-[#1a4b4b]"
                      />
                      <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="Phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        onChange={hndelchange}
                        type="text"
                        name="Phone"
                        id="Phone"
                        placeholder="Phone Number"
                        value={OrdersData.Phone}
                        className="w-full rounded-md border border-gray-300 pl-10 py-2 px-3 focus:border-[#1a4b4b] focus:outline-none focus:ring-1 focus:ring-[#1a4b4b]"
                      />
                      <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full rounded-md border border-gray-300 pl-10 py-2 px-3 focus:border-[#1a4b4b] focus:outline-none focus:ring-1 focus:ring-[#1a4b4b]"
                    />
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  </div>
                </div> */}
              </form>
            </div>

            {/* Reservation Summary */}
            <div className="space-y-6 rounded-xl bg-gray-50 p-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Reservation</h3>
                <p className="text-sm text-gray-500">Review your booking details</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <div>
                    <p className="font-medium text-gray-700">Check-in</p>
                    <p className="text-sm text-gray-500">{SelectMois(checkIn)}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-700">Check-out</p>
                    <p className="text-sm text-gray-500">{SelectMois(checkOut)}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service fee</span>
                    <span className="text-gray-700">20 DH</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-4">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">{ parseInt(Totalprice) + 20 } DH</span>
                  </div>
                </div>
              </div>

              <button className="w-full rounded-md bg-[#ff4444] py-2 px-4 text-white hover:bg-[#ff3333] focus:outline-none focus:ring-2 focus:ring-[#ff4444] focus:ring-opacity-50"
              onClick={handelclick}
              >
                Confirm Reservation 
              </button>

              <p className="text-center text-xs text-gray-500">
              On se contactera avec toi vers 20h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

