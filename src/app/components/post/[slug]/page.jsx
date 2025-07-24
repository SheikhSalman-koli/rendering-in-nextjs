import React from 'react'

export  const singlePost = async(postId)=>{
    const res =await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data =await res.json()
    return data
}

export async function generateMetadata({ params }) {
  // read route params
  const id =await params.slug
 
  // fetch data
  const post = await singlePost(id)

  return {
    title: post.title,
    description: post.body
  }
}
 

export default async function DetailsPage({params}) {

    const id =await params.slug
    const post = await singlePost(id)

  return (
    <div>
        <p>DetailsPage</p>
        <h1 className='globally-accessable-css'>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}
