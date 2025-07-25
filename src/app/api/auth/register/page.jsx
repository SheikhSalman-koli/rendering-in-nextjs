"use client"

import { saveUser } from '@/app/actions/auth/saveUsers'
import React from 'react'

export default function RegisterPage() {

    const handleSubmit =async(e)=>{
        e.preventDefault()
        const form = e.target
        const userName = form.userName.value
        const password = form.password.value
        const data = {userName, password}
        const payLoad = {...data, role: "user"}
        console.log("okokokkok", payLoad);
        const result = await saveUser(payLoad)
        console.log(result);
        form.reset()
    }

  return (
    <div className='max-w-[300px] mx-auto mt-10 border-1 p-3'>
        <form 
        onSubmit={handleSubmit}
        className='flex flex-col gap-7'>
            <input 
            name='userName'
            type="text" 
             className='border-1 py-2.5 pl-1'
            placeholder='unique user name'
            />
            <input 
            name='password'
            type="password" 
            className='border-1 py-2.5 pl-1'
            placeholder='strong password'
            />
            <button
            type='submit'
            className='px-4 py-1.5 border-1 w-[120px]'
            >Submit</button>
        </form>
    </div>
  )
}
