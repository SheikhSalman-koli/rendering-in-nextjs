import { connectDatabase } from "@/app/lib/dbConnect"

export async function GET() {

   const data =await connectDatabase('products').find().toArray()
 
  return Response.json( data )
}

export async function POST(req) {

 const postedData =await req.json()
 
 const result =await connectDatabase('products').insertOne(postedData)
 
  return Response.json(result)
}
