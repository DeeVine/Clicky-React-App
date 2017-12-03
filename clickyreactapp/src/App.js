import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Clicky from "./components/Clicky";
import cardlist from "./cards.json"


const App = () =>
  // <Router>
    <div>
      <Navbar/>
      <Header/>
      <Clicky/>
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
    </div>
  // </Router>;

export default App;
