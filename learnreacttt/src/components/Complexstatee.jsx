// import React, { useState } from 'react'

// export default function Complexstatee() {
//     const [fName,setFName]=useState("")
//     const [lName,setLName]=useState("")

//     function handleFName(event){
//     return(
//             setFName(event.target.value),
//       console.log(event.target.name)
//       )
//     }

//     function handleLName(event){
//         return(
//       setLName(event.target.value),
//        console.log(event.target.name)
//  )
//       }
//       function handleClick(event){
//         event.preventDefault()
//       }

//   return (
//    <>
//    <h1>Hello {fName} {lName}</h1>
//    <form>
//     <input
//      type="text"
//      placeholder="First Name"
//      name="fName"
//      onChange={handleFName}
//      />
//         <input
//      type="text"
//      placeholder="Last Name"
//      name="lName"
//      onChange={handleLName}
//      />
//      <button type="submit" onClick={handleClick}>Submit</button>
//    </form>
//    </>
//   )
// }

//---------------------------other way without repeating the code-----------------------

import React,{useState} from 'react'

export default function Complexstatee(){
    const [fullName,setFullName]=useState({
        fName:"",
        lName:""
    })
    function handleChange(event){
        // const newValue=event.target.value
        // const inputName=event.target.name
        //----------OR USE DESTRUCTURING---------------
        const {name,value}=event.target

        setFullName(prevValue=>{
            // if(inputName==='fName'){
                if(name==='fName'){
                return{
                    // fName:newValue,
                    fName:value,
                    lName:prevValue.lName
                }
            // }else if(inputName==='lName'){
            }else if(name==='lName'){
                return{
                    fName:prevValue.fName,
                    // lName:newValue
                    lName:value
                }
            }
        })
    }
    return(
        <>
        <h1>Hello {fullName.fName} {fullName.lName}</h1>
        <input
         onChange={handleChange}
        type='text'
        placeholder='First Name'
        name='fName'
        value={fullName.fName}
       
        />
        <input
        onChange={handleChange}
         type='text'
         placeholder='Last Name'
         name='lName'
         value={fullName.lName}
         
         />
         <button type='submit'>Submit</button>

        </>
    )
}
