import "./Navbar.scss";
import { Outlet, Link } from "react-router-dom";

function Navbar({ Login, setLogin }) {
  return (
    <>
      <div className="link-container">
        <Link className="section-1" to="/">
          Gym App
        </Link>
        <div className="section-2">
          {Login === false ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              <Link to="/create">Create</Link>
              <Link to="/logout">Logout</Link>
            </>
          )}
          <button onClick={() => setLogin(!Login)}></button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
