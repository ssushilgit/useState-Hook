import React, { useState } from 'react'
// import '../useState/CounterExample.css'

const CounterExample = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div className='counter-container'>
            <p className='counter-display'>{count}</p>
            <div className="buttons">
                <button className='counter-button' onClick={decrement}> Decrement</button>
                <button className='counter-button' onClick={reset}> Reset</button>
                <button className='counter-button' onClick={increment}> Decrement</button>
            </div>
        </div>
    )
}

export default CounterExample