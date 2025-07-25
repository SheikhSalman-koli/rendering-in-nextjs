import Link from 'next/link'
import React from 'react'

export default function Navber() {
    return (
        <div>
            <nav className='max-w-10/12 mx-auto'>
                <ul className='flex justify-between'>
                    <Link href='/'>
                        <li>Home</li>
                    </Link>

                    {/* <Link href='/components/post'>
                        <li>posts</li>
                    </Link> */}

                    <Link href='/products'>
                        <li>products</li>
                    </Link>

                    <Link href='/products/add'>
                        <li>add products</li>
                    </Link>

                    <Link href='/meals'>
                        <li>Meals</li>
                    </Link>

                    <Link href='/api/auth/register'>
                        <li>Register</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
