import React, { useState } from 'react'
import AddDelete from './components/AddDelete'
import Note from './components/Note'

export default function AddDel() {

    const [notess,setNotess]=useState([])
    function addNote(note){
      setNotess(prevValue=>{
        return [...prevValue,note]
      })
    }
    function deleteNote(id){
      setNotess((prevValue)=>{
        return prevValue.filter((noteItem,index)=>{
            return index!==id
        })
      })
    }
  return (
    <>
    <AddDelete addNote={addNote}/>
    {notess.map((noteItem,index)=>{
     return  <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
    })}
    
    </>
  )
}
