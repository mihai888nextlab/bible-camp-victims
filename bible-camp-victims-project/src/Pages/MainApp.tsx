import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Directions from "../Scripts/Directions";
import { useState } from "react";
import Start from "../Scripts/Start";

const center = {
  lat: 45.749095,
  lng: 21.210764,
};

const apiKey: string = "AIzaSyDs8lzVLvZrqaDEbffqR_EXNIbdaMyWD5M";
const mapId: string = "f2315f97bad87092";

interface Props {
  origin: string;
  destination: string;
}

function MainApp(props: Props) {
  //const [started, setStarted] = useState(false);
  const [curentRoute, setCurentRoute] = useState<google.maps.DirectionsRoute>();

  const getRoute = (routeObj: google.maps.DirectionsRoute) => {
    setCurentRoute(routeObj);
  };

  return (
    <>
      <div style={{ height: "100vh", width: "100%", position: "fixed" }}>
        <APIProvider apiKey={apiKey}>
          <Map
            defaultCenter={center}
            defaultZoom={15}
            mapId={mapId}
            fullScreenControl={false}
            displayControlsDefault={false}
          >
            {!curentRoute ? (
              <Directions
                origin={props.origin}
                destination={props.destination}
                getRoute={getRoute}
              />
            ) : (
              <Start curentRoute={curentRoute} />
            )}
          </Map>
        </APIProvider>
      </div>
    </>
  );
}

export default MainApp;
