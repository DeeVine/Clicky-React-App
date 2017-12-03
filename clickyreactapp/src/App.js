import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Clicky from "./components/Clicky";
import cardlist from "./cards.json"
import Counter from "./components/Counter";


const App = () =>
  // <Router>
    <div>

      <Navbar/>
      <Header/>
     
      <Counter/>
    </div>
  // </Router>;

export default App;
