import React from "react";
import "./Cards.css";
import cardlist from "../../cards.json"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Cards = props =>
  <div className='cards'>
   <p>{props.id}</p>
    <img src ={props.image}/>
    {props.children}
  </div>


const stuff = 
 	<div className='container'>
      {
      	cardlist.map((cards, i) =>	      		
      		<Cards
      			key={i}
      			id={cards.id}
      			image={cards.image}
      		/>  	
      	)
      }	      
	</div>

export default Cards;
