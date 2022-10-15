import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
<nav className='flex justify-between items-center h-[5rem] px-5 shadow-md bg-red-200 text-white'>
<h3 className='font-bold tex-lg'>Github Search</h3>

<span className='font-bold'>
    <Link to="/" className='mr-2 isActive  active:text-red-300'>Home</Link>
    <Link to="/favour" className='mr-2 active:text-red-300'>Favour</Link>
    <Link to="/state" className='mr-2 active:text-red-300'>State</Link>
    <Link to="/effect" className='mr-2 active:text-red-300'>Effect</Link>
</span>
</nav>
  )
}
