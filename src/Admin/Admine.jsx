import React, { useEffect, useState } from 'react';
import Dashboard from './Dashbord';
import Sidebare from './Sidebare';
import OrderTrackingTable from './SuivreOrder';
import useDataOrder from '../Redux/GetDataOrder';
import { useDispatch } from 'react-redux';
import { AddDataOrder } from '../Redux/Action';
import ListeAnonce from './ListeAnonce';

function Admine() {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'OrdersList':
        return <OrderTrackingTable/>;
      case 'ListeAnnonce':
        return <ListeAnonce/>;
     
      default:
        return <Dashboard />;
    }
  };

//   console.log(useDataOrder())
  const GlobalData = useDataOrder()
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (GlobalData && GlobalData.length > 0) {
      dispatch(AddDataOrder(GlobalData)); // تحديث الحالة
    }
  }, [GlobalData, dispatch]);

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full z-10"> {/* Ensure sidebar is on top */}
        <Sidebare setActiveComponent={setActiveComponent} />
      </div>
      <div className="ml-16 flex-grow z-0"> {/* Ensure dashboard is below sidebar */}
        {renderComponent()}
      </div>
    </div>
  );
}

export default Admine;