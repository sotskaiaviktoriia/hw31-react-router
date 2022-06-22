import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <nav className="nav-menu">
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : "nav-link")}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : "nav-link")}
          to="/hotels"
        >
          Hotels
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : "nav-link")}
          to="/flights"
        >
          Flights
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : "nav-link")}
          to="/packages"
        >
          Packages
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
