// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
// import auth from '../../firebase.init';
// import { signOut } from 'firebase/auth';
// import { toast } from 'react-toastify';

// const Doctors = () => {

//     const [doctors, setDoctor] = useState([]);
//     const [user] = useAuthState(auth);
//     const navigate = useNavigate();


  
 

//     useEffect(() => {
//       if (user) {
//           fetch(`http://localhost:5000/order?user=${user.email}`, {
//               method: 'GET',
//               headers: {
//                   'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//               }
//           })
//               .then(res => {
//                   console.log('res', res);
//                   if (res.status === 401 || res.status === 403) {
//                       signOut(auth);
//                       localStorage.removeItem('accessToken');
//                       navigate('/');
//                   }
//                   return res.json()
//               })
//               .then(data => {
  
//                 setDoctor(data);
//               });
//       }
//   }, [user])
  
//     return (
//         <div>
//         <div class="navbar background-2 text-black">
//    <div class="flex-1">
//      <a class="normal-case text-3xl text-white">Doctors</a>
//    </div>
//    <div class="flex-none">
//      <ul>
//          <h1 className='font-normal text-2xl text-white '>Total Order-({doctors.length})</h1>
//      </ul>
//    </div>
//  </div>
//  <section class="text-gray-600 body-font mt-5">
//    <div class="container  bg-white  mx-auto">
//      <div class=" w-full mx-auto overflow-auto">
//        <table class="table-auto w-full text-left whitespace-no-wrap px-5 pr-8">
//          <thead>
//            <tr>
//              <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm  uppercase bg-gray-100 rounded-tl rounded-bl">Product Name</th>
//              <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm uppercase bg-gray-100">Quantity of the Product</th>
//              <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm uppercase bg-gray-100">Total Price</th>
//              <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm uppercase bg-gray-100">Product Model</th>
//              <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm uppercase bg-gray-100">Remove Item</th>
             
//            </tr>
//          </thead>
//          <tbody>
 
//              {
//                 doctors.map(doctor =>
 
//                    <>
//              <tr>
//              <td class="px-4 py-3 text-gray-900">{doctor.name}</td>
//              <td class="px-4 py-3 text-black">{doctor.quantity}</td>
//              <td class="px-4 py-3 text-black  ">${doctor.total}</td>
//              <td class="px-4 py-3 text-black ">{doctor.model}</td>
//              <td class="px-4 py-3 text-black bg-color border-none hover:text-white btn mb-3 mt-3">Payment</td>
//            </tr>
                   
//                    </>
//                 )
 
 
 
//              }
 
 
 
//          </tbody>
//        </table>
//      </div>
 
//    </div>
//  </section>
 
 
//          </div>
//     );
// };

// export default Doctors;