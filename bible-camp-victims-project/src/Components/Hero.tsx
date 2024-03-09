import square from "../assets/square.png";
import circle from "../assets/circle.png";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import { Link } from "react-router-dom";

interface Props {
  origin: (event: React.ChangeEvent<HTMLInputElement>) => void;
  destination: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Hero(props: Props) {
  return (
    <div className="hero">
      <div className="text">
        <h1>Know where and when to be with BusGo</h1>
        <p>Plan your commute with us.</p>
      </div>

      <div className="form">
        <div className="input">
          <img src={circle} alt="" />
          <input
            type="text"
            placeholder="Enter the starting point"
            onChange={props.origin}
          />
        </div>
        <div className="input">
          <img src={square} alt="" />
          <input
            type="text"
            placeholder="Enter the finish point"
            onChange={props.destination}
          />
        </div>
        <button>
          <Link to={"routes"}>See routes</Link>
        </button>
      </div>

      <img src={img1} alt="img1" />
      <div className="text2">
        <h1>Take the best routes, wherever you go.</h1>
        <p>
          Welcome to BusGo, your perfect companion for hassle-free commuting!
          With BusGo, you can bid farewell to uncertainty and frustration. We
          provide real-time updates on bus schedules, routes, and arrivals,
          ensuring you never miss a ride. ! Learn more.
        </p>
      </div>
      <img src={img2} alt="img2" />
      <div className="text2">
        <p>
          Join us on this journey to transform the way you travel. Download
          BusGo today and discover the freedom of stress-free commuting.
        </p>
      </div>
    </div>
  );
}

export default Hero;
