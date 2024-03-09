import { useState } from "react";
import Header from "../Components/Header";
import login from "../Scripts/Login";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginData, setLoginData] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginData(await login({ username, password }));
  };
  return (
    <>
      <Header></Header>
      <div className="loginPage">
        <h1>Welcome back! {loginData}</h1>
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
