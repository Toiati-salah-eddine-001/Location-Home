// استيراد المكتبات اللازمة
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// إصلاح مشكلة الأيقونة
let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconAnchor: [12, 41] // تثبيت الأيقونة في المكان الصحيح
});
L.Marker.prototype.options.icon = DefaultIcon;

// مكون لإضافة حدث النقر
const LocationMarker = ({ setPosition }) => {
  // الحالة لتخزين إحداثيات النقرة
  const [markerPosition, setMarkerPosition] = useState(null);

  // إضافة حدث النقر على الخريطة
  useMapEvents({
    click(e) {
      setMarkerPosition(e.latlng);
      setPosition(e.latlng); // تحديث الحالة الرئيسية
    }
  });

  // إظهار العلامة عند النقر
  return markerPosition ? (
    <Marker position={markerPosition}>
      <Popup>إحداثيات: {markerPosition.lat.toFixed(4)}, {markerPosition.lng.toFixed(4)}</Popup>
    </Marker>
  ) : null;
};

const MapComponent2 = ({setLocation}) => {

  const [position, setPosition] = useState(null);
  const mapTilerApiKey = "AVbMDfZPajSobdHjGNCe"; // ضع مفتاح API الخاص بك من MapTiler
  
  setLocation(position);
  return (
    <MapContainer center={[31.7917, -7.0926]} zoom={6} style={{ height: '50vh', width: '60%' }}>
      {/* طبقة الخريطة من MapTiler */}
      <TileLayer
        url={`https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=${mapTilerApiKey}`}
        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* مكون العلامة مع تحديث الموقع */}
      <LocationMarker setPosition={setPosition} />
    </MapContainer>
  );
};

export default MapComponent2;
