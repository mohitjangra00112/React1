import { useContext } from "react";
import { userContext } from "../../context/Context";
export function Home() {
 
    const x = useContext(userContext);
    const data=x.data;
    const setData = x.setData;
    console.log(x);
    console.log(data);
    console.log(setData);

    return(
        <>
        <h1> This is Home Page </h1>
        <h3>{data.name}</h3>
        <h3>{data.age}</h3>
        </>
    )
}