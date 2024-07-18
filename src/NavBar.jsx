import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <h1 className="navText">Pick A Pile</h1>
      </Link>
      <a
        href="https://646e-65-18-112-62.ngrok-free.app/payment"
        className="text-pink-300 font-title text-sm"
      >
        Pictures By Hnin❄️
      </a>
    </div>
  );
};

export default NavBar;
