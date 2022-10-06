import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
<nav className='flex justify-between items-center h-[5rem] px-5 shadow-md bg-red-200 text-white'>
<h3>Github Search</h3>

<span>
    <Link to="/" className='mr-2'>Home</Link>
    <Link to="/favour">Favour</Link>
</span>
</nav>
  )
}
