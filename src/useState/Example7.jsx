import React, { useState } from 'react'

const Example7 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const increaseCounter = () =>{
        setCount(count + 1) //increase by 1
    }
    const onChange =(e)=>{
        setName(e.target.value)
    }
  return (
    <div>
        <input type="text" onChange={onChange} />
        <h1> {name} has clicked {count} times! </h1>
        <button onClick={increaseCounter}>Increase</button>
    </div>
  )
}

export default Example7