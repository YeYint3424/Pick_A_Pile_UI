import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <h1 className="navText">Pick A Pile</h1>
      </Link>
    </div>
  );
};

export default NavBar;
