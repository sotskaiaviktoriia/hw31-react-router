// import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="App-header">
//       <nav>
//         <ul className="nav-list">
//           <li className="nav-item">
//             <NavLink
//               className={({ isActive }) => (isActive ? "active" : "")}
//               to="/"
//             >
//               Home page
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink
//               className={({ isActive }) => (isActive ? "active" : "")}
//               to="hotels"
//             >
//               Hotels
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink
//               className={({ isActive }) => (isActive ? "active" : "")}
//               to="flights"
//             >
//               Flights
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink
//               className={({ isActive }) => (isActive ? "active" : "")}
//               to="packages"
//             >
//               Packages
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

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
