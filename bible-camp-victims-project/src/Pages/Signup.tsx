//import { useState } from "react";
import Header from "../Components/Header";

function Signup() {
  //const [signupData, setSignupData] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //setSignupData(await login({ username, password }));
  };
  return (
    <>
      <Header></Header>
      <div className="loginPage">
        <h1>Welcome back!</h1>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="username"
            // onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="password"
            //onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Phone Number"
            name="password"
            //onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            name="password"
            //onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Username"
            name="password"
            //onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            //onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="login-btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
