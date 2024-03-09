import MainApp from "./Pages/MainApp";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useState } from "react";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";

function App() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const onChangeOrigin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(event.target.value);
  };

  const onChangeDestination = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(event.target.value);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Home origin={onChangeOrigin} destination={onChangeDestination} />
            }
          ></Route>
          <Route
            path="routes"
            element={<MainApp origin={origin} destination={destination} />}
          ></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
