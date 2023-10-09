import React, { useState } from "react";
import "./navbar.css";
import { MenuItems } from "./Menuitems";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="NavbarItems">
      <Link to='/'><h1 className="navbar-logo"><span>Trip</span>Start</h1></Link>
      <div className="menu-icons" onClick={() => setToggle(!toggle)}>
        <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={toggle ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i>{item.icon}</i>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
