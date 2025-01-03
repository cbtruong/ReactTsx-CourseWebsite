import React from 'react'
// component
import Navbar from './AdminLayout/Navbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
