import React, { useState } from 'react'

const Example2 = () => {
    // const [brand, setBrand] = useState("Ferrari");
    // const [color, setColor] = useState("red");
    // const [model, setModel] = useState("roma");
    // const [year, setYear] = useState("2023");
    // Instead of using multiple useState, we can create an object of the car

    const [car, setCar] =useState({
        brand : "Ferrari",
        color: "red",
        model: "roma",
        year: "2023"
    })
    const changeColor = () =>{
        setCar((prev)=>{
            return {...prev, color: "blue"}
        });
    }

  return (
    <div>
        <h1>My {car.brand}</h1>
        <h3>It is a {car.color} {car.model} from {car.year}</h3>
        <button onClick={changeColor}>  Blue</button>

    </div>
  )
}

export default Example2