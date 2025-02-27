import { CheckCircle } from "lucide-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function ReservationConfirmation() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 100000);
    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Reservation Completed</h1>
        <p className="text-gray-600 mb-4">Thank you for your reservation. We have received your request.</p>
        <p className="text-gray-500">
          We will respond to your reservation within <span className="font-semibold">20 hours</span>.
        </p>
      </div>
    </div>
  )
}