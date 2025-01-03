import React from 'react'
import Logo from '../../../Common/Logo'
// icon
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-60 shadow-custom fixed h-full'>
      <Logo className='flexCenter py-6'>ADMIN</Logo>
      <div className='w-full flex items-center gap-2 px-4 bg-darkGray bg-opacity-40 hover:bg-darkGray hover:bg-opacity-10 cursor-pointer'>
        <FaUser className='text-lg'/>
        <p className='py-3 font-medium'>User</p>
      </div>
      <div className='w-full flex items-center gap-2 px-4 hover:bg-darkGray hover:bg-opacity-10 cursor-pointer'>
        <FaUser className='text-lg'/>
        <p className='py-3 font-medium'>Courses</p>
      </div>
    </div>
  )
}

export default Navbar
