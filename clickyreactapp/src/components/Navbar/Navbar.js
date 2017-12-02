import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
       
      </div>
      <ul className="nav navbar-nav">
        <li>Clicky Game</li>
        <li>Click an image to begin!</li>
        <li>Score: 0 | Tope Score: 0 </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
