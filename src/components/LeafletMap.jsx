import 'leaflet/dist/leaflet.css';
import { useTranslation } from "react-i18next";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function LeafletMap({ latitude = 0, longitude = 0 }) {
    const { t } = useTranslation();
    return (
        <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{height:'300px'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[latitude, longitude]}>
                <Popup>
                {t("leaflet_location")} 📍
                </Popup>
            </Marker>
        </MapContainer>
    );
}
