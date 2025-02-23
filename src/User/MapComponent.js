// استيراد المكتبات اللازمة
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({Location}) => {

  const position = [Location.lat, Location.lng];
  const mapTilerApiKey = "AVbMDfZPajSobdHjGNCe"; 

  return (
    <MapContainer center={position} zoom={13} style={{ height: '60vh', width: '100%' }}>
  
      <TileLayer
        url={`https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=${mapTilerApiKey}`}
        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />


      <Marker position={position}>
        <Popup> 🇲🇦</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
