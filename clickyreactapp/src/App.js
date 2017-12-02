import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import cardlist from "./cards.json"


const App = () =>
  // <Router>
    <div>
      <Navbar/>
      <Header/>
      <Cards
      	id={cardlist[0].id}
      />  
      <Cards
      	id={cardlist[1].id}
      />    
    </div>
  // </Router>;

export default App;
