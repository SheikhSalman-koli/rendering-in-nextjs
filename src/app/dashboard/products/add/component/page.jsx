"use client"
import { postData } from '@/app/actions/products/postSingleProduct'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ProductAddForm() {
    const route = useRouter()

    const handleSubmit =async(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.productName.value
        const payLoad = name
      
        // const {NEXT_PUBLIC_BASE_URL} = process.env

        // const res = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/items`, {
        //     method: 'POST',
        //     body: JSON.stringify(payLoad),
        //     headers: {
        //         "Content-type" : "application/json"
        //     }
        // })


        const result =await postData({name: payLoad})
        form.reset()
        console.log(result);
        // alert('added successfully!')
        route.push('/products')
        // route.refresh()
    }

  return (
    <div className='flex justify-center mt-8 space-y-1.5'>
        <form onSubmit={handleSubmit}>
            <input type="text" name='productName' placeholder='product name' className='border-2 px-3 py-1'/>
            <button
            type='submit'
            className=' px-4 py-2 bg-blue-500'
            >submit</button>
        </form>
    </div>
  )
}
