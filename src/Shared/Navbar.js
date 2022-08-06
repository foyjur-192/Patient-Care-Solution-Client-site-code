import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailsSearch from '../MainPages/SearchBar/DetailsSearch';
import BookingAppointment from '../MainPages/SearchBar/BookingAppointment';
import auth from '../firebase.init';
import SimpleBar from 'simplebar-react';

const Navbar = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState();
  const [appointment, setAppointment] = useState(null);
//authState
  const [user, loading, error] = useAuthState (auth);
  const navigate = useNavigate()

  const Logout = () => {
    signOut (auth);
  };

  const search = (users) => {
      return users.filter((user) => user.doctorName.toLowerCase().includes(query) || user.chamber.toLowerCase().includes(query) || user.expertise.toLowerCase().includes(query));
  }


  useEffect(() => {
  fetch('http://localhost:5000/data')
  .then(res => res.json())
  .then(data => setUsers(data));
  },[])



  return (
    <div className=''>
      <div class="navbar  background-color  d px-8">
        <div class="navbar-start  ">
          <h2 className='text-3xl secondary-color-2'>Patient Care Solution</h2>
        </div>

        <div class="navbar-center">
      <div class="form-control text-white">
      <form action="" class="relative mx-auto w-max">
        <input
        onChange={(event) => setQuery(event.target.value)}
         type="search" 
              class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-gray-300 focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-gray-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>

    </div> 
    </div>
    

      
        

        <div class="navbar-end text-white ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>

          <div class="flex-none">
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=33791" />
                </div>
              </label>
              <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow tableHead text-white rounded-box w-52">
                <li>
                  <a className="justify-between cursor-pointer text-md" onClick={() => navigate('/profile')}>Profile</a>
                </li>
         
                 {
                  user && <li className='text-white text-left' ><Link to='/dashboard'></Link>Dashboard </li>
                 }
               
                <li><a>Settings</a></li>
                <li className='text-left'> { user ? <button class="btn btn-ghost " onClick={Logout}>log Out</button> : <Link to="/login">Log in</Link>} </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <ul className='text-white'>
          <li><Link to='patient'>Patient</Link>   </li>
          <li><Link to='doctor'>Doctor</Link>   </li>
          <li><Link to='prescription'>Prescription</Link></li>
          <li><Link to='searchBar'>Search</Link></li>
          <li><Link to='login'>login</Link></li>
          <li><Link to='diagnostic'>diagnostic</Link></li>
         
        </ul> */}
      </div>
      <div className='flex justify-center  '>
      <>
      <div className='lg:w-6/12 sm:w-96 absolute background-search  px-6  min-h-[auto]'>
      <SimpleBar  style={{ maxHeight: '600px' }}>
      <DetailsSearch setAppointment={setAppointment} users={search(users)}  />
      </SimpleBar>
      </div>
   
      </>
      
      {
        appointment && <BookingAppointment 
        set
        appointment={appointment}>

        </BookingAppointment>
      }
      </div>
   
    </div>
  );
};

export default Navbar;