import { useState } from "react";
import Header from "../Components/Header";
import LoginFct from "../Scripts/Login";
import { Navigate } from "react-router-dom";
import { Axios } from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginData, setLoginData] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginData(LoginFct({ username, password }));

    console.log(username);

    if (!loginData) {
      alert("Invalid username or password");
    } else {
      return <Navigate replace to={"/about-us"} />;
    }
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
            placeholder="Username sau Email"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="login-btn" type="submit">
            Log In
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
