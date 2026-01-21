//// Fetch and Axios 

////  Axios

// import axios from "axios";
// export function Api() {

//     // Get

//     async function getdata() {
//         let data = await axios.get("https://fakestoreapi.com/products");
//         console.log(data);
//     }

// // Post

//     async function postdata() {
//         let response = await axios.post("https://fakestoreapi.com/products", {

//             "id": 0,
//             "title": "string",
//             "price": 0.1,
//             "description": "string",
//             "category": "string",
//             "image": "http://example.com"
//         })

//         console.log(response);
//     }

//     // PUT  // update 

//     async function updatedata(){
//         const response = await axios.put("https://fakestoreapi.com/products/{id}",{
//   "id": 0,
//   "title": "string",
//   "price": 0.1,
//   "description": "string",
//   "category": "string",
//   "image": "http://example.com"
// })

//    console.log(response);     

//     }

//     return (
//         <>
//             <button onClick={() => getdata()} >
//                 Get
//             </button>
//             <br /><br />
//             <button onClick={() => postdata()} >
//                 Post
//             </button> 
//             <br/><br/>
//             <button onClick={() => updatedata()} >
//                 Put
//             </button>
//         </>
//     )
// }





//// Fetch 

// fetch gives a response; res.json() converts it to usable JSON data


export function Api(){

    async function getdata(){
        
        let res=await fetch("https://fakestoreapi.com/products");
        let data=await res.json();
        console.log(data);

    }


    return(
        <>
        <button onClick={()=>getdata()} >
                GetData
        </button>
        </>
    )
}