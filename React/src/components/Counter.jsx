import { useState } from "react";

export function Counter() {
    {
let arr=[1,2,3,4,5,6];
  const [count , setCount]=useState(0);
  const [ar, setArr]=useState(arr);
      return(
        <>
        <div >
          <button onClick={()=>setCount(count+1)} >count is {count}</button>
          <div>
            <h4>{ar.map((item) => item + " ")}</h4>
          </div>
          <button onClick={()=>setArr([...ar , ar.length+1]) }> Add </button>
          <h1>Hello</h1>
        </div>
        </>
      )
}}

