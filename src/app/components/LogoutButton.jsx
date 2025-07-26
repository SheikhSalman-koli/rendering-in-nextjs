"use client"

import { signOut } from 'next-auth/react'
import React from 'react'

export default function LogoutButton() {
  return (
    <div>
        <button
         className='border-1 border-gray-200 rounded-full py-2.5 px-7 hover:bg-gray-100'
         onClick={()=> signOut()}
        >Log out</button>
    </div>
  )
}
