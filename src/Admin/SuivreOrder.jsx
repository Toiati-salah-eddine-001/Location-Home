import { Home, User, Phone, Mail, Calendar, ArrowRight, Package } from 'lucide-react';

import { useSelector } from "react-redux"

export default function OrderTrackingTable() {
    const DataOrders=useSelector((state)=>state.Orders);
    
  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-orange-50 to-white">
    <h1 className="text-3xl font-bold mb-8 text-orange-600 flex items-center">
      <Package className="w-6 h-6 mr-3 text-orange-500" />
      Order Tracking
    </h1>

    {/* Desktop view - Modern cards instead of traditional table */}
    <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6">
      {DataOrders.map((order) => (
        <div key={order.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-orange-700">{order.Title}</h2>
              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                Active
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-3 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-500">Guest</div>
                  <div className="font-medium">{`${order.Fname} ${order.Lname}`}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-500">Contact</div>
                  <div className="font-medium">{order.Phone}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium">{order.Email}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Home className="w-5 h-5 mr-3 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-medium">{order.Title}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-orange-100">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <Calendar className="w-5 h-5 mb-1 text-orange-500" />
                  <div className="text-xs text-gray-500">Check-in</div>
                  <div className="font-bold text-orange-700">{order.checkin}</div>
                </div>
                
                <div className="flex-1 px-4">
                  <div className="h-1 w-full bg-orange-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full w-1/2"></div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <Calendar className="w-5 h-5 mb-1 text-orange-500" />
                  <div className="text-xs text-gray-500">Check-out</div>
                  <div className="font-bold text-orange-700">{order.checkout}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Mobile view - Vertical stacked cards */}
    <div className="md:hidden space-y-6">
      {DataOrders.map((order) => (
        <div key={order.id} className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-orange-500">
          <div className="p-4">
            <h2 className="text-lg font-bold text-orange-700 mb-3">{order.Title}</h2>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-orange-500" />
                <div className="flex-1">
                  <div className="text-xs text-gray-500">Guest</div>
                  <div className="font-medium">{`${order.Fname} ${order.Lname}`}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-orange-500" />
                <div className="flex-1">
                  <div className="text-xs text-gray-500">Contact</div>
                  <div className="font-medium">{order.Phone}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-orange-500" />
                <div className="flex-1">
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-medium">{order.Email}</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-orange-100">
                <div>
                  <div className="text-xs text-gray-500">Check-in</div>
                  <div className="font-medium flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-orange-500" />
                    {order.checkin}
                  </div>
                </div>
                
                <ArrowRight className="w-4 h-4 text-orange-300" />
                
                <div>
                  <div className="text-xs text-gray-500">Check-out</div>
                  <div className="font-medium flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-orange-500" />
                    {order.checkout}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

