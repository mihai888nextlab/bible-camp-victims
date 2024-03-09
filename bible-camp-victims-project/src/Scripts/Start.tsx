import busIcon from "../assets/bus.png";
import walkingIcon from "../assets/walking.png";
import alert from "../assets/alert.png";
import { useState } from "react";

import trafic from "../assets/traffic-jam.png";
import busFull from "../assets/avoid-crowds.png";
import sofer from "../assets/road.png";
import Insert from "./Insert";

interface Props {
  curentRoute: google.maps.DirectionsRoute;
}

function Start(props: Props) {
  const [menu, setMenu] = useState(false);

  let route = props.curentRoute;
  console.log(route);

  return (
    <>
      <div className="start">
        <button className="routeButton">
          <div className="firstRow">
            {route.legs[0].steps.map((stepObject, stepIndex) => (
              <span key={stepIndex}>
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
            ))}
          </div>
          <div className="secondRow">
            <p>
              {route.legs[0].distance?.text} from{" "}
              {route.legs[0].departure_time?.text} -{" "}
              {route.legs[0].arrival_time?.text} ({route.legs[0].duration?.text}
              ){" "}
              {route.fare &&
                " - " + route.fare?.value + " " + route.fare?.currency}
            </p>
          </div>
        </button>
      </div>
      <div
        className="reportButton"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <img src={alert} alt="alert" />
      </div>

      {menu && (
        <div className="menu">
          <button
            onClick={() => {
              let now = new Date();
              console.log(now.valueOf());
              let lines = [];

              for (let i = 0; i < route.legs[0].steps.length; i++) {
                if (route.legs[0].steps[i].transit) {
                  lines.push(route.legs[0].steps[i].transit?.line.short_name);
                }
              }

              for (let i = 0; i < lines.length; i++) {
                Insert({
                  type: 0,
                  date: now.valueOf(),
                  line: lines[i],
                  details: 0,
                });
              }
            }}
          >
            <img src={trafic} alt="" />
            <p>Trafic</p>
          </button>
          <button>
            <img src={busFull} alt="" />
            <p>Autobuz plin</p>
          </button>
          <button>
            <img src={sofer} alt="" />
            <p>Soferul neglijent</p>
          </button>
        </div>
      )}
    </>
  );
}

export default Start;
