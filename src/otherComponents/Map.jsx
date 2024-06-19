import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import iconoMarcador from 'leaflet/dist/images/marker-icon.png'; // Importa el icono del marcador
import L from 'leaflet';
import ShowTransition from '../animations/ShowTransition';

// Configura el ícono del marcador con la ruta al icono
const marcadorIcono = L.icon({
    iconUrl: iconoMarcador,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const Map = () => {
    const location = { lat: -26.811715, lng: -65.2933575 };

    return (
        <div className='py-8 flex flex-col items-center text-white font-libreBaskerville'>
            <ShowTransition>
                <div className="map-container">
                    <MapContainer center={location} zoom={15} style={{ height: '400px', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={location} icon={marcadorIcono}>
                            <Popup>
                                Legal Pro
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </ShowTransition>

        </div>
    );
};

export default Map;
