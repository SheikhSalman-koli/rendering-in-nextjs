"use client"
import { usePathname, useRouter } from 'next/navigation'

import  { useEffect, useState } from 'react'

export default function SearchInput() {

// const [meals, setMeals] = useState([])
    const [search, setSearch] = useState('')
    const router = useRouter()
    const pathname = usePathname()

  useEffect(() => {
        const searchQuery = {search}
        const urlQueryParams = new URLSearchParams(searchQuery)
        const url = `${pathname}?${urlQueryParams}`
        router.push(url)
    }, [search])

  return (
    <div>
         <input type="search" 
                placeholder='search meal'
                value={search}
                className='border-2 px-5 py-2 text-black'
                onChange={(e) => setSearch(e.target.value)}
                />
    </div>
  )
}