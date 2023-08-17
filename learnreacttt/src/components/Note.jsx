import React from 'react'

export default function Note(props) {
    function deleteItem(){
        {props.onDelete(props.id)}
    }
  return (
 <>
 <h1>{props.title} {props.content}</h1>
 <button onClick={deleteItem}>Delete</button>
 </>
  )
}
