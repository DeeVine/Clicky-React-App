import React from "react";
import "./Cards.css";
import cardlist from "../../cards.json"
import Navbar from "../../components/Navbar";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const handleClick = () => {
	console.log('wtf');
}

class Cards extends React.Component {

	state = {
		score: 0,
		array: [],
		srcArray: [],
		topScore: 0
	};

	componentWillMount = () => {
		const srcArray = this.state.srcArray;
		cardlist.map(item => {
			srcArray.push(item);
		})
	};

	shouldComponentUpdate = () => {
		this.randomize();
		return true;
	};

	randomize = () => {
		const srcArray = this.state.srcArray;
		srcArray.sort(function(a, b) {
	            return 0.5 - Math.random();
	    });
	}

	checkArray = (prop) => {

		let checker = 0;

		for (let i = 0; i < this.state.array.length; i++) {
			// console.log(this.state.array);
			if(this.state.array[i] === prop) {
	    		console.log('already exists');
	    		this.setState({
	    			score: 0,
					array: []
	    		})
	    		checker = 1;
	    	}
	    	
	    }	
    	if (checker === 0) {
    		this.state.array.push(prop);
    		this.setState({
				score: this.state.score+1
			}, function() {
				console.log('score: ' + this.state.score)
				console.log(this.state);
			}
    		// console.log(this.state.score);
    	)}
	    	
	}
		
	handleClick = (id) => {
	    console.log(id);
	    console.log(this.state.array); 
	    this.checkArray(id);
	    // this.state.array.push(id);	
	    
	}; 

	render() {
		return(

		  	 <div className='container'>
		  	 <div>score: {this.state.score}</div>  
	        {
	          this.state.srcArray.map((cards, i) =>            
	            <div key={i} className='cards' onClick={() => this.handleClick(cards.id)}>
	              <img src ={cards.image}		 
		              key={i}
		              id={cards.id}
		              image={cards.image}
	              // functionality = {this.functionality}
	            />    
	            </div>
	          )
	          // <div id='score'>score</div>
	        }     
		    </div>
	  	)
	};	
}
  

export default Cards;
