"use server"

import { collectionsName, connectDatabase } from "@/app/lib/dbConnect"

export const postData = async (postedData) => {
    try {
        const result = await connectDatabase(collectionsName.PRODUCTS).insertOne(postedData)
        // return result
        return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString()
        }
    } catch (error) {
        console.log(error);
        return null
    }
}