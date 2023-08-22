import Button from '../components/Button'; // Importing a custom Button component
import '../style/home.css'; // Importing CSS styles for the component
import { useState } from 'react'; // Importing the useState hook from React

// Defining a functional component named CountFunctional
const CountFunctional = () => {
  // Using the useState hook to initialize the count state to 0
  const [count, setCount] = useState(0)

  // Function to increment the count state
  const increament = () => {
    setCount(count + 1)
  }

  // Function to decrement the count state
  const decrease = () => {
    setCount(count - 1)
  }

  // Function to reset the count state to 0
  const restart = () => {
    setCount(0)
  }

  // The return statement defines the component's UI using JSX
  return (
    <div className='main'>
      <div className='container'>
        <h1>Increament / Decrement function in ReactJS</h1>
        <p>Try test devided components</p>

        <p>Result: {count}</p>

        <Button handle={increament}>Increment</Button>
        <Button handle={decrease}>Decrease</Button>
        <Button handle={restart}>Restart</Button>
      </div>
    </div>
  )
}

export default CountFunctional;