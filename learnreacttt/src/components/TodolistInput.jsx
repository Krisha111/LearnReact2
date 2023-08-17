//---------to do the line through to the clicked event-------------

// import React, { useState } from 'react'

// export default function TodolistInput(props) {
//     const [isDone,setIsDone]=useState(false)
//     function handleClick(){
//         return(
//             setIsDone(!isDone)
//         )
//     }
//   return (
//     <div onClick={handleClick}>
//     <li style={{textDecoration:isDone?"line-through":"none"}} key={props.index}>{props.item}</li>
//     </div>
//   )
// }

import React from 'react'

export default function TodolistInput(props) {
   
   
  return (
    <div onClick={()=>{props.onCheck(props.index)}}>
    <li>{props.item}</li>
    </div>
  )
}
