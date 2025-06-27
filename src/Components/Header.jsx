import React from 'react'

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="flex justify-between items-center">
                <h2 className='text-xl font-bold'>Camel Survey</h2>

                <ul className='flex gap-5'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Payments</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </header>
  )
}
