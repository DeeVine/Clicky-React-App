import React from "react";
import "./Cards.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Cards = props =>
  <div class='cards'>
    <p>{props.id}</p>
    <img src ="http://via.placeholder.com/100x100"/>
  </div>

export default Cards;
