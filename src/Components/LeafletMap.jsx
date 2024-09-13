
import React, { useRef,useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const LeafletMap = () => {
    const mapRef = useRef(null);
    const [latitude,setLatitude] = useState('51.505')
    const [longitude,setLongitude] = useState('-0.09')
  const geo=navigator.geolocation
  geo.getCurrentPosition
  function usercoords(position){
    let userLatitude=position.coords.latitude
    let userLongitude=position.coords.longitude
    setLatitude(userLatitude)
    setLongitude(userLongitude)
  }
  
  
    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Additional map layers or components can be added here */}
        </MapContainer>
    );
  };
  
  export default LeafletMap;