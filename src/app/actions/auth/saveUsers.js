"use server"
import { connectDatabase } from "@/app/lib/dbConnect"

export const saveUser = async (cratedUser) => {

    try {
        // check the user is already exist or not
        const result = await connectDatabase('users').insertOne(cratedUser)
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