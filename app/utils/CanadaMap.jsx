import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import CustomMarkerIcon from "./CustomMarkerIcon";
import { GTA_CITIES, GTA_CENTER } from "./data";
function CanadaMap() {
  const [isMounted, setIsMounted] = useState(false);
  const [customIcon, setCustomIcon] = useState(null);
  
  useEffect(() => {
    setIsMounted(true);
    setCustomIcon(CustomMarkerIcon());
    
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        .leaflet-popup-content-wrapper {
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .leaflet-popup-tip {
          background: white;
        }
        .custom-popup {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 600;
          color: #007369;
        }
        .custom-marker-icon svg {
          filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3));
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  if (!isMounted || !customIcon) {
    return (
      <div className="h-[600px] w-full shadow-xl flex items-center justify-center">
        <div className="text-primary-300 font-medium text-lg">Loading interactive map...</div>
      </div>
    );
  }

  return (
    <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full shadow-xl overflow-hidden border-primary-300 border-4">
      <MapContainer
        center={GTA_CENTER}
        zoom={9}
        scrollWheelZoom={true}
        zoomControl={false}
        className="h-full w-full"
        style={{ background: "#f0fdf9" }}
      >
        <ZoomControl position="bottomright" />
        
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {GTA_CITIES.map((city, index) => (
          <Marker 
            key={index} 
            position={city.coordinates} 
            icon={customIcon}
          >
            <Popup className="custom-popup-wrapper">
              <div className="custom-popup px-1 py-1">
                {city.name}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default CanadaMap;