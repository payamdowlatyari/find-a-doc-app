import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => (
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
    {text}
  </div>
);

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

  const defaultProps = {
    center: {
      lat: 38.554563,
      lng: -121.4830899,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "75vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={position.latitude}
          lng={position.longitude}
          text={loc}
        />
      </GoogleMapReact>
    </div>
  );
}
