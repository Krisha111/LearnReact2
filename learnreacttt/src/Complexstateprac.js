import React from 'react'
// import Complexstatepractice from './components/Complexstatepractice'

export default function Complexstateprac() {
    //for arrays
    const citrus=["lime","lemon","orange"]
    const fruits=["Apple",...citrus,"banana","mango"]
    const fruitss=["Apple","banana","mango",...citrus]
    console.log(fruits)
    console.log(fruitss)

    //for objs

    const fullName={
        name:"James",
        surname:"bond"
    }
    const info={
        ...fullName,
        id:1,
        petname:"fifu"
    }
    console.log(info)
  return (
    <>
    <h1>{fruits}</h1>
        {/* <Complexstatepractice/> */}
    </>
  )
}
