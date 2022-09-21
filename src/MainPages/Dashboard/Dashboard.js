import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
        <div class="drawer drawer-mobile  ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content text-left ml-6">
          {/* Page content here */}
          <h1 className='text-4xl font-medium text-white'>Dashboard</h1>
          <Outlet />
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div class="drawer-side  ">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 secondary-color text-white">
         {/* Sidebar content here */}
            <li className='  '><Link to='/dashboard' className='font-2xl text-white hover:bg-Cyan-400'> Doctors </Link></li>
            <li><Link to='/dashboard/users' >Users</Link></li>
          </ul>
        
        </div>
      </div>
      </div>
    );
};

export default Dashboard;