"use client"
import React from 'react'
import { signIn } from "next-auth/react"

export default function LoginButton() {
  return (
    <div>
         <button
         className='border-1 border-gray-200 rounded-full py-2.5 px-7 hover:bg-gray-100'
         onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
