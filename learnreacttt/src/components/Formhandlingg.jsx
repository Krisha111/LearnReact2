import React, { useState } from 'react'

export default function FormHandlingg() {
    const [name,setName]=useState("")
    const [clicked,setClicked]=useState("")
    function handleChange(event){
        setName(event.target.value)
        console.log(event.target.value)
    }
    function handleClick(event){
        setClicked(name)
        event.preventDefault()
    }
  return (
    <>
   {/* <h1>Hello {name}</h1> */}
   <h1>Hello {clicked}</h1>
   <input onChange={handleChange} type="text" placeholder="What is your name???"/>
   <button type="submit"onClick={handleClick} >Submit</button>
   </>
  )
}
