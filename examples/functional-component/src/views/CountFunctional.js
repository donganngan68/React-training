import Button from '../components/Button';
import '../style/home.css';
import { useState } from 'react';

const CountFunctional = () => {
  const [count, setCount] = useState(0)

  const increament = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  const restart = () => {
    setCount(0)
  }

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