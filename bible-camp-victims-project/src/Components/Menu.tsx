import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="pagesMenu">
      <button>
        <Link to={"/"}>Home</Link>
      </button>
      <button>
        <Link to={"about-us"}>About Us</Link>
      </button>
      <button>
        <Link to={"login"}>Log In</Link>
      </button>
      <button>
        <Link to={"signup"}>Sign Up</Link>
      </button>
    </div>
  );
}

export default Menu;
