import React, { useState } from 'react'

const Example3 = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () =>{
        setCount(prev=>prev+1) //1
        setCount(prev=>prev+1) //2
        setCount(prev=>prev+1) //3
        setCount(prev=>prev+1) //4

        // setCount(count + 1) increase by 1

    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={increaseCount}>Increase by 4</button>
    </div>
  )
}

export default Example3