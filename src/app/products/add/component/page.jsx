"use client"
import React from 'react'

export default function ProductAddForm() {

    const handleSubmit =async(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.productName.value
        const payLoad = {name}

        const res = await fetch(`http://localhost:3000/api/items`, {
            method: 'POST',
            body: JSON.stringify(payLoad),
            headers: {
                "Content-type" : "application/json"
            }
        })

        const result =await res.json()
        form.reset()
        alert('added successfully!')
        console.log(result);
    }

  return (
    <div className='flex justify-center mt-8 space-y-1.5'>
        <form onSubmit={handleSubmit}>
            <input type="text" name='productName' placeholder='product name' className='border-2 px-3 py-1'/>
            <button
            type='submit'
            className=' px-4 py-2 bg-blue-500'
            >sbmit</button>
        </form>
    </div>
  )
}
