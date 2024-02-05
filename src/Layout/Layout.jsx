import React from 'react'
import { Sidebar } from '../Component/Sidebar/Sidebar'
import { Navbar } from '../Component/Navbar/Navbar';
import './Layout.scss';
import { Dashboard } from '../Pages/Dashboard';
import { Routers } from '../Routers/Routers';

export const Layout = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="navbar">
            <Navbar />
            <Routers />
            {/* <div className="service">
              <Dashboard />
            </div> */}
        </div>
        
    </div>
  )
}
