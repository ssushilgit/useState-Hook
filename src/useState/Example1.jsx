import React from 'react'
import { useState } from 'react';
import './Example1.css'

const Example1 = () => {

    // let color="Red";
    // const changeColor = () =>{
    //   color="Blue"
    //   console.log(color)
    // }

    const [color, setcColor] = useState("Red");
    const changeColor = () =>{
      setcColor("Blue");
    }

  return (
    <>
    <h1>My favourite color is {color}!</h1>
    <button onClick={changeColor}>Blue</button>
    </>
  )
}

export default Example1