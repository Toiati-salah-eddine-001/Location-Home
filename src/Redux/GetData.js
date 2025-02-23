import { useEffect, useState } from "react";
import useIndexedDB from "../useIndexedDB";

const useDataLocation = () => {
  const { data } = useIndexedDB('CC4', 'Location');
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setLocationData(data); // تحديث الحالة فقط إذا كانت البيانات موجودة
    }
  }, [data]);

  return locationData; // إرجاع البيانات
};

export default useDataLocation;