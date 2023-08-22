import React, { Component } from 'react';
import '../style/home.css';
import '../style/components/button.css';

// Defining a class-based component named CountClass
class CountClass extends Component {
  constructor(props) {
    super(props);

    // Initializing the component's state with a count of 0
    this.state = {
      count: 0,
    };
  }

  // Increment the count state when the "Increase" button is clicked
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Decrement the count state when the "Decrease" button is clicked
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  // Reset the count state to 0 when the "Restart" button is clicked
  restart = () => {
    this.setState((prevState) => ({
      count: 0
    }));
  }

  // The render method returns the JSX that defines the component's UI
  render() {
    return (
      <div className='main'>
        <h1>Increament / Decrement function in ReactJS</h1>
        <p>Result: {this.state.count}</p>
        <button className='button' onClick={this.increment}>Increase</button>
        <button className='button' onClick={this.decrement}>Decrease</button>
        <button className='button' onClick={this.restart}>Restart</button>
      </div>
    );
  }
}

export default CountClass;
