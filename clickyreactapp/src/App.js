import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Clicky from "./components/Clicky";
import cardlist from "./cards.json"
import Counter from "./components/Counter";

class App extends React.Component {
	constructor() {
        super();
        this.state = {
            score: 7,
			array: [],
			srcArray: [],
			topScore: 0
        };
    }


	render() {
		return(
			<div>
		      <Navbar score = {this.state.score}/>
		      <Header/>     
		      <Cards/>
		    </div>
		);
	}
}
    
  // </Router>;

export default App;
