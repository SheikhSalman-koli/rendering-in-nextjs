"use server"

import { connectDatabase } from "@/app/lib/dbConnect"

export const postData = async(postedData)=>{
    try{
        const result =await connectDatabase('products').insertOne(postedData)
         return result
    }catch(error){
        console.log(error);
        return null
    }
}