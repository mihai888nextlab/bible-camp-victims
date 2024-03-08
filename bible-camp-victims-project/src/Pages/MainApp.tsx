import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Directions from "../Scripts/Directions";

const center = {
  lat: 45.749095,
  lng: 21.210764,
};

const apiKey: string = "AIzaSyDs8lzVLvZrqaDEbffqR_EXNIbdaMyWD5M";
const mapId: string = "f2315f97bad87092";

function MainApp() {
  return (
    <>
      <div style={{ height: "100vh", width: "100%", position: "fixed" }}>
        <APIProvider apiKey={apiKey}>
          <Map
            defaultCenter={center}
            defaultZoom={15}
            mapId={mapId}
            fullscreenControl={false}
          >
            <Directions />
          </Map>
        </APIProvider>
      </div>
    </>
  );
}

export default MainApp;
