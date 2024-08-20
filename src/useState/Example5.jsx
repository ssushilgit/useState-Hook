import React from 'react'
import { useState } from 'react'
 
const Example5 = () => {

    const [name, setName] =useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(true);

    const updateName = () =>{
        setName("Sugam Shrestha")
    }
    const updateAge = () =>{
        setAge(age +1)
    }
    const toggleEmloyedStatus = () =>{
        setIsEmployed(!isEmployed)
    }
  return (
    <div>
        <p>Name: {name} </p>
        <button onClick={updateName}> Set Name </button>

        <p>Age: {age} </p>
        <button onClick={updateAge}> Increment Age </button>

        <p>Is employed: {isEmployed ? "Yes" : "No"} </p>
        <button onClick={toggleEmloyedStatus}> Toggle Status </button>


    </div>
  )
}

export default Example5