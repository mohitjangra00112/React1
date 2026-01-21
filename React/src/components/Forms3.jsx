import { useForm } from "react-hook-form"

export default function Forms3(){

    const {register,handleSubmit}=useForm();

    const onSubmit=(data)=>{
          console.log(data);
    }

 return(
    <>
    <form onSubmit={handleSubmit(onSubmit)} >
          <input {...register("name")} placeholder="name"  />
          <input {...register("age")} placeholder="age" />
             
          <button>Submit form 3</button>
    </form>
    </>
 )

}