import Link from 'next/link'
import React from 'react'

export const fetchPost = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

export default async function Postpage() {
    const posts = await fetchPost()
 
  return (
    <div >
        <p>{posts.length}</p>
     <div className='grid grid-cols-4 gap-3 '>
           {
            posts.map(post=> {
                return <div 
                className='border-2 border-blue-500'
                key={post.id}>
                    {/* don't need to impost it in every component */}
                    <p className='globally-accessable-css'>{post.title}</p>
                    <p>{post.body}</p>
                    <Link href={`/components/post/${post.id}`}>
                    <button
                    className='bg-green-500 p-3'
                    >veiw details</button>
                    </Link>
                </div>
            })
        }
     </div>
        
    </div>
  )
}
