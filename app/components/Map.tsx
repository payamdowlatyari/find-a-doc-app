import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { AiFillHome } from "react-icons/ai";

// a circle showing the user's location on map
const UserLocation = ({ text }: any) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text} <AiFillHome />
  </div>
);

// gets users geaolocation and uses it to render the map
export default function SimpleMap({ loc }: any) {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  // default lat and lng for zipcode 95818
  const defaultProps = {
    center: {
      lat: 38.554563,
      lng: -121.4830899,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "75vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <UserLocation
          lat={position.latitude}
          lng={position.longitude}
          text={loc}
        />
      </GoogleMapReact>
    </div>
  );
}
