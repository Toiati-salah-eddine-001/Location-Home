import { useEffect, useState } from "react";
import useIndexedDB from "../useIndexedDB";

const useDataOrder = () => {
  const { data } = useIndexedDB('CC4', 'Orders');
  const [OrderData, setOrderData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
        setOrderData(data);
    }
  }, [data]);

  return OrderData; 
};

export default useDataOrder;