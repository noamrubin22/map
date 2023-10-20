import Image from "next/image";
import { Inter } from "next/font/google";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import { useEffect, useState } from "react";
interface Coordinates {
  longitude: number;
  latitude: number;
}

export default function Home() {
  const [currentCoordinates, setCurrentCoordinates] = useState<
    Coordinates | undefined
  >(undefined);
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  console.log(accessToken);
  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setCurrentCoordinates({
  //         longitude: position.coords.longitude,
  //         latitude: position.coords.latitude,
  //       });
  //     });
  //   }
  // }, [currentCoordinates]);

  return (
    <main className="h-screen">
      <div className="h-screen w-full">
        <Map
          mapboxAccessToken={accessToken}
          mapStyle={`mapbox://styles/mapbox/dark-v11`}
          initialViewState={{
            longitude: currentCoordinates?.longitude,
            latitude: currentCoordinates?.latitude,
            zoom: 10,
          }}
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            fitBoundsOptions={{ maxZoom: 12 }}
            trackUserLocation={true}
            showAccuracyCircle={true}
            showUserLocation={true}
          />
          <Marker longitude={52} latitude={11} color="red" />
        </Map>
      </div>
    </main>
  );
}
