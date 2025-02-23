import { Home, User, Phone, Mail, Calendar, Hash } from "lucide-react"
import { useSelector } from "react-redux"

export default function OrderTrackingTable() {
    const DataOrders=useSelector((state)=>state.Orders);
    
  return (
    <div className="container mx-auto p-4 bg-orange-50">
      <h1 className="text-2xl font-bold mb-6 text-orange-600">Order Tracking</h1>

      {/* Table for medium and large screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-orange-100">
            <tr>
              <th className="py-3 px-4 text-left text-orange-700">
                <div className="flex items-center">
                  <Home className="w-4 h-4 mr-2 text-orange-500" />
                  Location
                </div>
              </th>
              <th className="py-3 px-4 text-left text-orange-700">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-orange-500" />
                  Name
                </div>
              </th>
              <th className="py-3 px-4 text-left text-orange-700">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-orange-500" />
                  Phone
                </div>
              </th>
              <th className="py-3 px-4 text-left text-orange-700">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-orange-500" />
                  Email
                </div>
              </th>
              <th className="py-3 px-4 text-left text-orange-700">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                  Check-in
                </div>
              </th>
              <th className="py-3 px-4 text-left text-orange-700">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                  Check-out
                </div>
              </th>
              
            </tr>
          </thead>
          <tbody>
            {DataOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-orange-50">
                <td className="py-3 px-4">{order.Title}</td>
                <td className="py-3 px-4">{`${order.Fname} ${order.Lname}`}</td>
                <td className="py-3 px-4">{order.Phone}</td>
                <td className="py-3 px-4">{order.Email}</td>
                <td className="py-3 px-4">{order.checkin}</td>
                <td className="py-3 px-4">{order.checkout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for small screens */}
      <div className="md:hidden space-y-4">
        {DataOrders.map((order) => (
          <div key={order.id} className="bg-white shadow-md rounded-lg p-4 space-y-2 border-l-4 border-orange-500">
            <div className="flex items-center">
              <Home className="w-4 h-4 mr-2 text-orange-500" />
              <span className="font-semibold text-orange-700">Location:</span>
              <span className="ml-2">{order.Title}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-orange-500" />
              <span className="font-semibold text-orange-700">Name:</span>
              <span className="ml-2">{`${order.Fname} ${order.Lname}`}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-orange-500" />
              <span className="font-semibold text-orange-700">Phone:</span>
              <span className="ml-2">{order.Phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-orange-500" />
              <span className="font-semibold text-orange-700">Email:</span>
              <span className="ml-2">{order.Email}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-orange-500" />
              <span className="font-semibold text-orange-700">Check-in:</span>
              <span className="ml-2">{order.checkin}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-orange-500" />
              <span className="font-semibold text-orange-700">Check-out:</span>
              <span className="ml-2">{order.checkout}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

