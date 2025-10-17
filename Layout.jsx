import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = ({onLogout}) => {
  return (
    <div>
      <Navbar onLogout={onLogout}/>
      <Outlet/>
    </div>
  )
}

export default Layout
