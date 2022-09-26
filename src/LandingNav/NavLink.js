import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/logo.png'
const NavLink = () => {
    return (
        <div class="navbar secondary-color shadow  text-white lg:px-24">
        <div class=" container navbar-start">
        <a class="btn btn-ghost normal-case   text-2xl font-bold"><img src={img}    alt='No log found'      /></a>
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow secondary-color rounded-box w-52">
              <li><a>About</a></li>
              <li tabindex="0">
                <a class="justify-between">
                  Feature
                </a>
          
              </li>
              <li> <button class="btn btn-sm secondary-bg"><Link to="/login"> Sign up</Link> </button></li>
            </ul>
          </div>
         
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a>About</a></li>
            <li tabindex="0">
              <a>
                Features
              </a>
          
            </li>
            <li><a>Price</a></li>
          </ul>
        </div>
        <div class="navbar-end invisible lg:visible">
          <button class="btn btn-sm secondary-bg"><Link to="/login"> Sign up</Link> </button>
        </div>
      </div>
    );
};

export default NavLink;