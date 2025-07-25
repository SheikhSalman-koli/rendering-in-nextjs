"use server"

import { connectDatabase } from "@/app/lib/dbConnect"

export const getProduct = async () => {
    try {
        const res = await connectDatabase('products').find({}).toArray()
        return res 
    } catch (error) {
        console.log(error);
        return []
    }
}