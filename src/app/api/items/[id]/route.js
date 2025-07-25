import { collectionsName, connectDatabase } from "@/app/lib/dbConnect"
import { ObjectId } from "mongodb"

export async function GET(req, { params }) {

    const id = params.id
    const filter = { _id: new ObjectId(id) }
    const data = await connectDatabase(collectionsName.PRODUCTS).findOne(filter)

    return Response.json(data)
}


export async function DELETE(req, {params}) {

    const p = params.id
    const filter = {_id: new ObjectId(p)}
    const deleteData = await connectDatabase(collectionsName.PRODUCTS).deleteOne(filter)

    return Response.json(deleteData)
}


export async function PATCH(req, { params }) {

    const p = params.id
    const filter = { _id: new ObjectId(p) }
    const updatedDoc = await req.json()
    const updatedResult = await connectDatabase(collectionsName.PRODUCTS).updateOne(filter, { $set: { ...updatedDoc } })

    return Response.json(updatedResult)
}