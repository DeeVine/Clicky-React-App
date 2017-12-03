import React from "react";
import cardlist from "../cards.json"
import Cards from "./Cards";

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
  };

   handleClick = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.array);
  }; 

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