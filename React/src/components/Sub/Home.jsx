import { useContext } from "react";
import { userContext } from "../../context/Context";
export function Home() {
 
    const x = useContext(userContext);

    console.log(x);

    return(
        <>
        <h1> This is Home Page </h1>
        </>
    )
}