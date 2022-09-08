// import Link from '../Link/Link';
import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Nav(props) {
  return (
    <nav className="mainnav">
      <NavLink
        to="/films"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Films
      </NavLink>
      <NavLink
        to="/people"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        People
      </NavLink>
      <NavLink
        to="/planets"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Planets
      </NavLink>
      <NavLink
        to="/starships"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Starships
      </NavLink>
    </nav>
  );
}
