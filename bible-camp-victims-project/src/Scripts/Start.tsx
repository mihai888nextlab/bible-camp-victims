import busIcon from "../assets/bus.png";
import walkingIcon from "../assets/walking.png";
import alert from "../assets/alert.png";
import { useState } from "react";

import trafic from "../assets/traffic-jam.png";
import busFull from "../assets/avoid-crowds.png";
import sofer from "../assets/road.png";
import Insert from "./Insert";

import trafic1 from "../assets/trafic1.png";
import trafic2 from "../assets/trafic2.png";
import trafic3 from "../assets/trafic3.png";

import orar from "../assets/orar.png";
import cheie from "../assets/cheie.png";
import clock from "../assets/ceas.png";

interface Props {
  curentRoute: google.maps.DirectionsRoute;
}

function Start(props: Props) {
  const [menu, setMenu] = useState(false);
  const [curentLine, setCurentLine] = useState(0);
  const [trafficMenu, setTrafficMenu] = useState(false);

  let route = props.curentRoute;
  console.log(route);

  let lines: (string | undefined)[] = [];

  for (let i = 0; i < route.legs[0].steps.length; i++) {
    if (route.legs[0].steps[i].transit) {
      lines.push(route.legs[0].steps[i].transit?.line.short_name);
    }
  }

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
      <div className="reportButton">
        <div className="btns">
          {lines.map((line, index) => (
            <button
              key={index}
              onClick={() => {
                setCurentLine(index);
              }}
              style={{
                backgroundColor: curentLine == index ? "#1B1A55" : "white",
                color: curentLine == index ? "white" : "#1B1A55",
              }}
            >
              {line}
            </button>
          ))}
        </div>

        <img
          src={alert}
          alt="alert"
          onClick={() => {
            setMenu(!menu);
          }}
        />
      </div>

      {menu && (
        <div className="menu">
          <button
            onClick={() => {
              setTrafficMenu(!trafficMenu);
              setMenu(false);
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
          <button>
            <img src={cheie} alt="" />
            <p>In repairment</p>
          </button>
          <button>
            <img src={clock} alt="" />
            <p>Comes late</p>
          </button>
          <button>
            <img src={orar} alt="" />
            <p>Out of schedule</p>
          </button>
        </div>
      )}

      {trafficMenu && (
        <div className="menu">
          <button
            onClick={() => {
              let now = new Date();

              Insert({
                type: 0,
                date: now.valueOf(),
                line: lines[curentLine],
                details: 0,
              });

              setTrafficMenu(false);
            }}
          >
            <img src={trafic1} alt="" />
            <p>Light</p>
          </button>
          <button
            onClick={() => {
              let now = new Date();

              Insert({
                type: 0,
                date: now.valueOf(),
                line: lines[curentLine],
                details: 1,
              });
              setTrafficMenu(false);
            }}
          >
            <img src={trafic2} alt="" />
            <p>Moderate</p>
          </button>
          <button
            onClick={() => {
              let now = new Date();

              Insert({
                type: 0,
                date: now.valueOf(),
                line: lines[curentLine],
                details: 2,
              });
              setTrafficMenu(false);
            }}
          >
            <img src={trafic3} alt="" />
            <p>Standstill</p>
          </button>
        </div>
      )}
    </>
  );
}

export default Start;
