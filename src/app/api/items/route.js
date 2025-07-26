import { collectionsName, connectDatabase } from "@/app/lib/dbConnect"
import { revalidatePath } from "next/cache"

export async function GET() {

  const data =await connectDatabase(collectionsName.PRODUCTS).find().toArray()
 
  return Response.json( data )
}

export async function POST(req) {
 const postedData =await req.json()
 const data = {postedData}
 const result =await connectDatabase(collectionsName.PRODUCTS).insertOne(data)
 revalidatePath('/products')
  return Response.json(result)
}
