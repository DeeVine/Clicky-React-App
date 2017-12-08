import React from "react";
import cardlist from "../cards.json"
import Cards from "./Cards";

// const handleClick = () => {
//   console.log('wtf');
// }

// const Cards = props =>
//   <div id={props.id} className='cards' onClick={handleClick}>
//     <p>{props.id}</p>
//     <img src ={props.image}/>
//     {props.children}
//   </div>

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0,
    array: [0,1,2,3]
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.array);
    console.log(this.state);
    if (this.state.array[0] === 0){
      console.log(true);
    }
    else{
      console.log(false);
    }
  };

  arrayClick = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.array);
    console.log(this.id);
  }; 

  // functionality = () => {
  //   if(this.id === valueinArray) {
  //     console.log('you lose')
  //   }
  //   else {
  //     score += 1;
  //     array.push(this.id);
  //   }
  // }

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Click Counter!</div>
        <div className="panel-body text-center">
        <div className="testing it out">Test div</div>
          <p>Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
        <div className='container'>
        {
          cardlist.map((cards, i) =>            
            <Cards
              onClick={this.handleClick}
              key={i}
              id={cards.id}
              image={cards.image}
              // functionality = {this.functionality}
            />    
          )
        }       
      </div>
      <div onClick={this.handleIncrement}>rnadom cliigaoirg divvvv</div>
      </div>
    );
  }
}

export default Counter;