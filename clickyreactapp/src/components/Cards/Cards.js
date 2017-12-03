import React from "react";
import "./Cards.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Cards = props =>
  <div className='cards' onClick={props.onClick}>
    <p>{props.id}</p>
    <img src ={props.image}/>
    {props.children}
  </div>

export default Cards;
