import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="topnav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/exercises">Logged Exercises</NavLink>
      <NavLink to="/create-user">Create User</NavLink>
      <NavLink to="/create-exercise">Create Exercise</NavLink>
      {/* <NavLink to="/exercises">Exercises</NavLink> */}
    </nav>
  );
};

export default Nav;
