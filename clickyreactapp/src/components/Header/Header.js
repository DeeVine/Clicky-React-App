import React from "react";
import "./Header.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Header = props =>
  <header className='header'>
    <h1>Clicky Game!</h1>
    <h2>Click on an image to earn points, but don't click on any more than once!</h2>
  </header>

export default Header;
