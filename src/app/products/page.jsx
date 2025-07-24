import React from 'react'

export default async function GetAllProduct() {

    const res =await fetch(`http://localhost:3000/api/items`)
    const data =await res.json()

  return (
    <div>
        <div>
            {
                data.map(singleData => {
                    return <ul key={singleData._id}>
                        <li>{singleData.name}</li>
                    </ul>
                })
            }
        </div>
    </div>
  )
}
