import "./Navbar.scss";
import { Outlet, Link } from "react-router-dom";

function Navbar({ Login, setLogin }) {
  return (
    <div className="nav">
      <div className="link-container">
        <Link>Gym App</Link>
        {Login === false ? (
          <>
            <Link>Login</Link>
            <Link>Register</Link>
          </>
        ) : (
          <>
            <Link>Create</Link>
            <Link>Logout</Link>
          </>
        )}
        <button onClick={() => setLogin(!Login)}>Button</button>
      </div>
      <Outlet/>
    </div>
  );
}

export default Navbar;
