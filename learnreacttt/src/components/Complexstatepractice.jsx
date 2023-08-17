import React, { useState } from 'react'

export default function Complexstatepractice() {
     const [contact,setContact] =useState({
        fName:"",
        lName:"",
        email:""
     })
    function handleChange(event){
        const {name,value}=event.target
        setContact((prevValue)=>{
            
            // using spred operator to shorteb the code
            return{
            ...prevValue,
            [name]:value
            }

            // if(name==='firstName'){
            //     return{
            //     fName:value,
            //     lName:prevValue.lName,
            //     email:prevValue.email
            //     }
            // }else if(name==='lastName'){
            //     return{
            //     fName:prevValue.fName,
            //     lName:value,
            //     email:prevValue.email
            //     }
            // }else if(name==='emaill'){
            //     return{
            //     fName:prevValue.fName,
            //     lName:prevValue.lName,
            //     email:value
            //     }
            // }
        })
       
    }

  return (
    <>
    <h1>Hello {contact.fName} {contact.lName}</h1>
    <p>{contact.email}</p>
    <input
    onChange={handleChange}
    type="text"
    placeholder='First Name'
    // name='firstName'----------for bigger code
    name='fName'
    value={contact.fName}
    />
     <input
     onChange={handleChange}
    type="text"
    placeholder='Last Name'
    // name='lastName'----------for bigger code
    name='lName'
    value={contact.lName}
    />
     <input
     onChange={handleChange}
    type="email"
    placeholder='Email'
    name='emaill'
    value={contact.email}
    />
    <button type='submit'>Submit</button>
    </>
  )
}
