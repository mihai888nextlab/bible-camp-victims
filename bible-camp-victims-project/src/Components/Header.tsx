import { useState } from "react";
import logo from "../assets/logo.jpeg";
import menu from "../assets/menu.png";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Header() {
  const [pagesmenu, setMenu] = useState(false);

  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <div className="buttons">
            <button className="login">
              <Link to={"login"}>Log In</Link>
            </button>
            <button className="signup">
              <Link to={"signup"}>Sign Up</Link>
            </button>
            <img
              src={menu}
              alt="menu"
              onClick={() => {
                setMenu(!pagesmenu);
              }}
            />
          </div>
        </nav>
      </header>
      {pagesmenu && <Menu />}
    </>
  );
}

export default Header;
