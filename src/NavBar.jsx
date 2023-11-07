import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <h1 className="navText">Pick A Pile</h1>
      </Link>
      <p className='text-pink-300 font-title text-sm'>Pictures By Hnin❄️</p>
    </div>
  );
};

export default NavBar;
