import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Doctors = () => {

    const [doctors, setDoctor] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

   useEffect(() => {
   fetch('https://patient-care-solution-server-production.up.railway.app/data', {

   method: 'GET',
   headers:{
    authorization: `Bearer ${localStorage.getItem('accessToken')}`
}

   })
    .then(res => res.json())
    .then(data => setDoctor(data));
   },[])
  
 

  
  
    return (
        <div>
        <div class="navbar background-2 text-black">
   <div class="flex-1 text-left">
     <a class="normal-case text-2xl text-white">Doctors</a>
   </div>
   <div class="flex-none">
     <ul>
         <h1 className='font-normal text-2xl text-white pr-12'>Total Order-({doctors.length})</h1>
     </ul>
   </div>
 </div>
 <section class="text-gray-600 body-font pr-10 mt-5">
   <div class="container  secondary-color  mx-auto">
     <div class=" w-full mx-auto overflow-auto">
       <table class="table-auto w-full text-left whitespace-no-wrap px-5 pr-8">
         <thead>
           <tr>
             <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm tableHead  uppercase bg-gray-100 rounded-tl rounded-bl">Name</th>
             <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm tableHead uppercase bg-gray-100">Degree</th>
             <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm tableHead uppercase bg-gray-100">Expertise</th>
             <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm tableHead uppercase bg-gray-100">Chamber</th>
             <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm tableHead uppercase bg-gray-100">VisitingHour</th>
             <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm tableHead uppercase bg-gray-100">Email</th>
             <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm tableHead uppercase bg-gray-100">Payment</th>
             
           </tr>
         </thead>
         <tbody>
 
             {
                doctors.map(doctor =>
 
                   <>
             <tr>
             <td class="px-4 py-3 text-gray-100">{doctor.doctorName}</td>
             <td class="px-4 py-3 text-gray-100">{doctor.degree}</td>
             <td class="px-4 py-3 text-gray-100  ">{doctor.expertise}</td>
             <td class="px-4 py-3 text-gray-100 ">{doctor.chamber}</td>
             <td class="px-4 py-3 text-gray-100 ">{doctor.visitingHour}</td>
             <td class="px-4 py-3 text-gray-100 ">{doctor.email}</td>
             <td class="px-4 py-3 secondary-bg border-none hover:text-white btn mb-3 mt-3">{(doctor.price && !doctor.paid) && <Link to='/'>Pay</Link>}  
             {(doctor.price && doctor.paid) && <span className='btn-bg-success'>Paid</span>} 
             </td>
           </tr>
                   
                   </>
                )
 
 
 
             }
 
 
 
         </tbody>
       </table>
     </div>
 
   </div>
 </section>
 
 
         </div>
    );
};

export default Doctors;