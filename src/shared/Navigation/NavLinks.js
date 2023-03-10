import classes from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { useContext } from "react";

export default function NavLinks(props) {
  const auth = useContext(AuthContext);

  return (
    <ul className={classes.nav_links}>
      <li>
        <NavLink to={"/"}>ALL USERS</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={"u1/places"}>MY PLACES</NavLink>
        </li>
      )}

      {auth.isLoggedIn && (
        <li>
          <NavLink to={"/places/new"}>ADD PLACES</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to={"/auth"}>AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
}
