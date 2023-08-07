import React, { Component } from 'react';
import '../styles/home.css';
import '../styles/components/button.css';



class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  restart = () => {
    this.setState((prevState) => ({
        count: 0
    }));
  }

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

export default Home;
