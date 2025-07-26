"use server"

import { collectionsName, connectDatabase } from "@/app/lib/dbConnect"

export const getProduct = async () => {
    try {
        const res = await connectDatabase(collectionsName.PRODUCTS).find({}).toArray()
        return res 
    } catch (error) {
        console.log(error);
        return []
    }
}