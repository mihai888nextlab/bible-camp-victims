import busIcon from "../assets/bus.png";
import walkingIcon from "../assets/walking.png";

import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";

function Directions() {
  const map = useMap();
  const routesLib = useMapsLibrary("routes");
  const [DirectionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [DirectionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!routesLib || !map) return;

    setDirectionsService(new routesLib.DirectionsService());
    setDirectionsRenderer(new routesLib.DirectionsRenderer({ map }));
  }, [routesLib, map]);

  useEffect(() => {
    if (!DirectionsService || !DirectionsRenderer) return;

    DirectionsService.route({
      origin: "Str. Ghirlandei nr. 1, Timisoara, Romania",
      destination: "Iulius Mall Timisoara",
      travelMode: google.maps.TravelMode.TRANSIT,
      provideRouteAlternatives: true,
    }).then((response) => {
      DirectionsRenderer.setDirections(null);
      DirectionsRenderer.setDirections(response);
      setRoutes(response.routes);
    });
  }, [DirectionsService, DirectionsRenderer]);

  console.log(routes);

  useEffect(() => {
    if (!DirectionsRenderer) return;

    DirectionsRenderer.setDirections(null);
    DirectionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, DirectionsRenderer]);

  if (!leg) return null;

  return (
    <div className="directions">
      <p>
        {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <button
              onClick={() => {
                setRouteIndex(index);
                console.log(index);
                //DirectionsRenderer?.setDirections(null);
              }}
            >
              {index}. {route.summary}{" "}
              {route.fare?.value && " - " + route.fare?.value + " LEI"}
              {route.legs[0].steps.map((stepObject, stepIndex) => (
                <span> {stepObject.travel_mode} </span>
              ))}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Directions;
