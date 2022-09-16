import React from 'react';

const DetailsSearch = ({users,setAppointment}) => {
    return (
        
            
    <div className='lg:w-full sm:w-96  '>
        {
           users.map(user => (
            <div className='lg:flex lg:justify-between   sm:items-left  items-center bg-gray-100 shadow-lg mb-5 p-8'> 
            
            <div className='  mb-5  text-left '>
            <h1 key={user.id} className="text-2xl" >{user.doctorName} </h1>
            <p> {user.degree} </p>
            <p>{user.expertise} </p>
            <p>{user.chamber} </p>
            <p>{user.visitingHour} </p>
            <p>{user.closed}</p>
            </div>
            <label
            disabled = {user.slots.length === 0}
            for="booking-modal"   onClick={() => setAppointment(user)} class="btn modal-button">Book Appointment</label>
            </div>

           ))
        }
        </div>
    );
};

export default DetailsSearch;