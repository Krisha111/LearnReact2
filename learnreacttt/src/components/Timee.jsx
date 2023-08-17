import React, { useState } from 'react'

export default function Timee() {

  // setInterval(krisha,1000)

  const timee=new Date().toLocaleTimeString()
  // console.log(timee)
  const[time,setTime]=useState(timee)
  

  function krisha(){
   const now=new Date().toLocaleTimeString()
   setTime(now)
  }
  return (
    <>

    <div>{time}</div>
    <button onClick={krisha}>Click here</button>
    </>
  )
}
