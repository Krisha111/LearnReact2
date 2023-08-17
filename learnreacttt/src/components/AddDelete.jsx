import React, { useState } from 'react'

export default function AddDelete(props) {

    const [note,setNote]=useState({
        title:"",
        content:""
    })

    function handleChange(event){
        const {name,value}=event.target

        setNote((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            }
        })
    }
function onSubmit(event){
   { props.addNote(note)}
  setNote({
    title:"",
    content:""
  })
  event.preventDefault()
}

  return (
   <>
   <form>
    <input name="title" onChange={handleChange} value={note.title} placeholder='Title'/>
    <textarea name="content" onChange={handleChange}   value={note.content} placeholder='Take a Note....' rows="3"/>
    <button onClick={onSubmit}>Add</button>
   </form>
   </>
  )
}
