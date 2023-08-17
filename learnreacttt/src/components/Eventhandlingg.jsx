import React, { useState } from 'react'

export default function Eventhandlingg() {
    const [isSubmitted,setSubmitted]=useState("Yes")
    const [isMouseOver,setMouseOver]=useState(false)

    function handleSubmitted(){
        setSubmitted("Submitted")
    }
    function handleMouseOver(){
       setMouseOver(true) 
    }
    function handleMouseOut(){
        setMouseOver(false)
    }
  return (
    <>
    <h1>{isSubmitted}</h1>
    <h1>User</h1>
    <input type="text" placeholder="What is your name...???"/>
    <button 
    style={{backgroundColor:isMouseOver?"black":"white",color:isMouseOver?"white":"black"}}
    type="submit" 
    onClick={handleSubmitted}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    >Submit</button>
    </>
  )
}
