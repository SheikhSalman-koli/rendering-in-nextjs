
import React from 'react'
import { getProduct } from '../actions/products/getProduct'

export const dynamic = "force-dynamic"

export default async function GetAllProduct() {

    // const {NEXT_PUBLIC_BASE_URL} = process.env
    // const res =await fetch(`${NEXT_PUBLIC_BASE_URL}/api/items`)
    // const data =await res.json()

    const data = await getProduct()

  return (
    <div className='flex justify-center mt-4'>
        <div>
            {
                data.map((singleData, index) => {
                    return <ul key={singleData._id}>
                        <li>{index+1}. {singleData.name}</li>
                    </ul>
                })
            }
        </div>
    </div>
  )
}
