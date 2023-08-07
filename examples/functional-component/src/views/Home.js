import Button from '../components/Button';
import '../style/home.css';
import { useState } from 'react';

const Home = () => {
    const [a, setA] = useState(0)

    const increament = () => {
        setA(a + 1)
    }

    const decrease = () => {
        setA(a - 1)
    }

    const restart = () => {
       setA(0)
    }

    return (
        <div className='main'>
            <div className='container'>
                <h1>Increament / Decrement function in ReactJS</h1>
                <p>Try test devided components</p>

                <p>Result: {a}</p>

                <Button handle={increament}>Increment</Button>
                <Button handle={decrease}>Decrease</Button>
                <Button handle={restart}>Restart</Button>
            </div>
        </div>
    )
}

export default Home;