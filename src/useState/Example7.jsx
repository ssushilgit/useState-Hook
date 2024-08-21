import React, { useState } from 'react'

const Example7 = () => {
    // const [count, setCount] = useState(0);
    // const [name, setName] = useState("");
    const [details, setDetails] = useState({
        count: 0,
        name: ""
    });

    // const increaseCounter = () =>{
    //     setCount(count + 1) //increase by 1
    // }
    const onChange = (e) => {
        setDetails((prev) => ({
            ...prev,
            name: e.target.value 
        }));
    };

    const increaseCounter = () =>{
        setDetails((prev) => ({
            ...prev,
            count: prev.count + 1 ,
        }));
    }


  return (
    <div>
        <input type="text" onChange={onChange} style={{padding: "10px 20px"  }}/>
        <h1> {details.name} has clicked {details.count} times! </h1>
        <button onClick={increaseCounter}>Increase</button>
    </div>
  )
}

export default Example7