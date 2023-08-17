import React, { useState } from 'react'
import TodolistInput from './TodolistInput'

export default function Todolistt() {
    const [inputText,setInputText]=useState("")
    const [items,setItems]=useState([])
    function handleChange(event){
        const newValue=event.target.value
        setInputText(newValue)
        console.log(newValue)
    }
    function handleClick(){
        setItems((prevItems)=>{

            //do not forget to return the array
            return[...prevItems,inputText]
           
        })
        setInputText("")
    }
    function deleteItem(id){
       setItems((prevItems)=>{
        return prevItems.filter((item)=>{
             return item.id!==id
        })
       })
    }
  return (
    <>
    <h1>Todo list</h1>
    <input
    onChange={handleChange}
    type="text"
    placeholder='Write a todo'
    value={inputText}
    />
    <button
    type='submit' onClick={handleClick}>Add</button>
    <ul>
        {items.map((item,index)=>
            <TodolistInput 
            key={index}
            onCheck={deleteItem}
            item={item}
            index={index}
            />
   ) }
    </ul>
    </>
  )
}
