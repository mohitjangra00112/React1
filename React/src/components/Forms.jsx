import { useState , useRef } from "react";

export function Forms() {

    const name=useRef(null);
    const age=useRef(null);

    const [data , setData]=useState({name:"undefined" , age:"undefined"});

    const [live, setLive]=useState({name:"" , age:""});

    function handleSubmit(e){
        e.preventDefault();
        console.log(name.current.value, " " , age.current.value);
        setData({name:name.current.value , age:age.current.value});
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="name" ref={name} onChange={(e)=>setLive({...live,name:e.target.value})}  />
            <input placeholder="age" ref={age} onChange={(e)=>setLive({...live,age:e.target.value})} />
            <button type="submit"> Submit </button>
        </form>

        <h3>  { data?.name + "  " + data?.age } </h3>
        <h2>Live Updating Data</h2>
        <h4> {live.name} </h4>
        <h4> {live.age} </h4>
        </>
    )
}