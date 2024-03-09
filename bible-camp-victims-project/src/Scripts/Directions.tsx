import busIcon from "../assets/bus.png";
import walkingIcon from "../assets/walking.png";
import startIcon from "../assets/start.png";
import alert from "../assets/alert.png";

import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";
import Get from "./Get";

interface Props {
  origin: string;
  destination: string;
  getRoute: (routeObj: google.maps.DirectionsRoute) => void;
}

interface GetProps {
  type: number;
  line: string | undefined;
  details: number;
  date: number;
}

function Directions(props: Props) {
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

  const [positionIndex, setpositionIndex] = useState(1);
  const [position, setPosition] = useState(0);

  const [curentGet, setCurentGet] = useState<Promise<GetProps | undefined>>();
  const [badBusses, setBadBusses] = useState([]);

  useEffect(() => {
    setCurentGet(Get());
  }, [Get]);

  curentGet?.then((res) => console.log(res?.line));

  useEffect(() => {
    if (!routesLib || !map) return;

    setDirectionsService(new routesLib.DirectionsService());
    setDirectionsRenderer(new routesLib.DirectionsRenderer({ map }));

    DirectionsRenderer?.setDirections(null);
  }, [routesLib, map]);

  useEffect(() => {
    if (!DirectionsService || !DirectionsRenderer) return;

    DirectionsService.route({
      origin: props.origin,
      destination: props.destination,
      travelMode: google.maps.TravelMode.TRANSIT,
      provideRouteAlternatives: true,
    }).then((response) => {
      DirectionsRenderer.setDirections(null);
      DirectionsRenderer.setDirections(response);
      setRoutes(response.routes);
    });
  }, [DirectionsService, DirectionsRenderer]);

  useEffect(() => {
    if (!DirectionsRenderer) return;

    DirectionsRenderer.setDirections(null);
    DirectionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, DirectionsRenderer]);

  if (!leg) return null;

  console.log(routes);

  return (
    <>
      <div className="directions" style={{ bottom: -position + "px" }}>
        <div
          className="bar"
          onClick={() => {
            if (positionIndex == 0) {
              setpositionIndex(1);
              if (routes.length % 2) {
                setPosition((routes.length - 1) * 50 - 50);
              } else {
                setPosition(routes.length * 50 - 50);
              }
            } else if (positionIndex == 1) {
              setpositionIndex(2);
              setPosition(0 + 50);
            } else {
              setpositionIndex(0);
              setPosition((routes.length - 1) * 100 - 50);
            }
          }}
        ></div>
        <ul>
          <li>
            <button
              className="routeButton"
              onClick={() => {
                setRouteIndex(routeIndex);
                setpositionIndex(0);
                setPosition((routes.length - 1) * 100 - 50);
                //DirectionsRenderer?.setDirections(null);
              }}
            >
              <div className="firstRow">
                {routes[routeIndex].legs[0].steps.map(
                  (stepObject, stepIndex) => (
                    <span key={stepIndex + "bbb"}>
                      {stepObject.travel_mode == "WALKING" ? (
                        stepObject.duration?.value &&
                        stepObject.duration.value > 120 && (
                          <span className="step">
                            <span className="walking">
                              <img src={walkingIcon} />
                              <p>{stepObject.duration?.text}</p>
                            </span>
                            <p className="arrow">{" > "}</p>
                          </span>
                        )
                      ) : (
                        <span className="step">
                          <img src={busIcon} />

                          <span
                            className="busName"
                            style={{
                              backgroundColor: stepObject.transit?.line.color,
                            }}
                          >
                            {stepObject.transit?.line.short_name}
                          </span>
                          <p className="arrow">{" > "}</p>
                        </span>
                      )}
                    </span>
                  )
                )}
              </div>
              <div className="secondRow">
                <p>
                  {routes[routeIndex].legs[0].distance?.text} from{" "}
                  {routes[routeIndex].legs[0].departure_time?.text} -{" "}
                  {routes[routeIndex].legs[0].arrival_time?.text} (
                  {routes[routeIndex].legs[0].duration?.text}){" "}
                  {routes[routeIndex].fare &&
                    " - " +
                      routes[routeIndex].fare?.value +
                      " " +
                      routes[routeIndex].fare?.currency}
                </p>
              </div>
            </button>
          </li>
          {routes.map(
            (route, index) =>
              index != routeIndex && (
                <li key={index}>
                  <button
                    className="routeButton"
                    onClick={() => {
                      setRouteIndex(index);
                      console.log(route);

                      setpositionIndex(0);
                      setPosition((routes.length - 1) * 100 - 50);
                      //DirectionsRenderer?.setDirections(null);
                    }}
                  >
                    <div className="firstRow">
                      {route.legs[0].steps.map((stepObject, stepIndex) => (
                        <span key={stepIndex + "ccc"}>
                          {stepObject.travel_mode == "WALKING" ? (
                            stepObject.duration?.value &&
                            stepObject.duration.value > 120 && (
                              <span className="step">
                                <span className="walking">
                                  <img src={walkingIcon} />
                                  <p>{stepObject.duration?.text}</p>
                                </span>
                                <p className="arrow">{" > "}</p>
                              </span>
                            )
                          ) : (
                            <span className="step">
                              <img src={busIcon} />
                              <span
                                className="busName"
                                style={{
                                  backgroundColor:
                                    stepObject.transit?.line.color,
                                }}
                              >
                                {stepObject.transit?.line.short_name}
                              </span>
                              <p className="arrow">{" > "}</p>
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                    <div className="secondRow">
                      <p>
                        {route.legs[0].distance?.text} from{" "}
                        {route.legs[0].departure_time?.text} -{" "}
                        {route.legs[0].arrival_time?.text} (
                        {route.legs[0].duration?.text}){" "}
                        {route.fare &&
                          " - " + route.fare.value + " " + route.fare.currency}
                      </p>
                    </div>
                  </button>
                </li>
              )
          )}
        </ul>
      </div>

      <div className="startBar">
        <button
          onClick={() => {
            props.getRoute(routes[routeIndex]);
          }}
        >
          Start
          <img src={startIcon} alt="" />
        </button>
        <div className="time">
          <p>{routes[routeIndex].legs[0].duration?.text}</p>
        </div>
      </div>
    </>
  );
}

export default Directions;
