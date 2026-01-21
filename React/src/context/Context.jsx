import { createContext, useState } from "react";

export const userContext=createContext();

export function Context(props){

    const [data , setData]=useState({name:"ABCD" , age:"20"});

    // console.log(props);

    return (
        <userContext.Provider value={ {data , setData} } >
            {props.children}
        </userContext.Provider>
    )
}
