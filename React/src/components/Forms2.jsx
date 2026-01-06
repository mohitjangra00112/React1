import { useState } from "react";
import { useForm } from "react-hook-form";

export function Forms2() {

    const {register, handleSubmit} = useForm();
     
    const onSubmit = (data) => {
        console.log(data);
    }
    

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)} >
            <input {...register("name")} placeholder="name" />
            <input {...register("age")} placeholder="age" />
            <button type="submit"> Submit </button>
            </form>
        </>
    )
}
