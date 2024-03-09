import Header from "../Components/Header";

import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";

function AboutUs() {
  return (
    <>
      <Header></Header>
      <div className="aboutUs">
        <h1>About Us</h1>
        <div className="grid">
          <div className="first">
            <p>
              Our team is passionate about creating innovative solutions that
              simplify your daily commute and enhance your journey. Whether
              you're a frequent traveler or a casual commuter, our user-friendly
              interface makes navigating the bustling city streets effortless.
            </p>
            <img src={img3} alt="img3" />
          </div>
          <div className="second">
            <div className="photo">
              <img src={img4} alt="" />
              <p>HTML/CSS expert</p>
            </div>
            <p>
              Driven by a desire to improve urban mobility, we continuously
              strive to incorporate cutting-edge technology into our platform.
              Our dedicated team works tirelessly to deliver features that cater
              to your needs and preferences, making your commute smoother and
              more efficient.
            </p>
          </div>
          <div className="team">
            <div className="photo1">
              <img src={img6} alt="" />
              <p>Lead Graphic Designer </p>
            </div>
            <div className="photo2">
              <img src={img5} alt="" />
              <p>Lead Programer</p>
            </div>
          </div>
        </div>
        <div className="textgrid">
          <div className="text">
            <h1>What we offer ? Features! </h1>
            <p>
              Real-Time Updates: Stay informed with live updates on bus
              schedules, routes, and arrivals, ensuring you're always on time.
              <br />
              <br />
              User-Friendly Interface: Navigate the app with ease, thanks to our
              intuitive design and simple-to-use features.
              <br />
              <br />
              Customizable Preferences: Tailor your experience by setting
              preferences for your favorite routes, stops, and travel times.
              <br />
              <br />
              Interactive Maps: Explore your city with interactive maps that
              highlight nearby bus stops, routes, and points of interest.
              <br />
              <br />
              Notifications: Receive instant alerts about service disruptions,
              delays, or changes to your planned route.
            </p>
          </div>
          <div className="images">
            <img src={img7} alt="" />
            <img src={img8} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
