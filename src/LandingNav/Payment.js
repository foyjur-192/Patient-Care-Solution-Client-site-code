// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useQuery } from 'react-query';
// import { Link, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import auth from '../firebase.init';
// import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe ('pk_test_51LjkEdASc4CYwlU4gRjAmLe1deBn2stDoDOz6NjPfbOt2AOjb0YKXhtXeC1x3eZbWPKqPncwJ1ahNlBUSSOpnH6e005Tb1MjgN');


// const Payment = () => {
//     const { id } = useParams ();
//     const [user] = useAuthState (auth);
//     const [doctor, setDoctor] = useState([]);

//     useEffect(() => {
//         fetch('/doctorDetails.json')
//          .then(res => res.json())
//          .then(data => setDoctor(data));
//         },[])


//     const handlePayment = event => {
//         event.preventDefault()
    
//         const doctorName = event.target.doctorName.value;
//         const email = event.target.email.value;
//         const age = event.target.age.value;
//         const doctorLicense = event.target.doctorLicense.value;
//         const employee = event.target.employee.value;
//         const designation = event.target.designation.value;
//         const degree = event.target.degree.value;
//         const experienced = event.target.experienced.value;
//         const expertise = event.target.expertise.value;
//         const chamber = event.target.chamber.value;
//         const visitingHour = event.target.visitingHour.value;
//         const closed = event.target.closed.value;
//         const chamberName = event.target.chamberName.value;
//         const slots = event.target.slots.value;
//         const price = event.target.price.value;
      
       
    
    
//         const data = {
//             doctorName,
//             email,
//             age,
//             doctorLicense,
//             employee,
//             designation,
//             degree,
//             experienced,
//             expertise,
//             chamber,
//             visitingHour,
//             closed,
//             slots,
//             chamberName,
//             price
    
//         }
    
//         console.log(data);
    
//         fetch('https://search-doctor-server-production.up.railway.app/data', {
    
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
    
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.success) {
//                    return 'ok'
//                 }
//             })
//     }


//     const url = `https://search-doctor-server-production.up.railway.app/priceData/${id}`;

//   const { data: payment, isLoading } = useQuery (['priceData', id], () => fetch(url, {
//       method: 'GET',
//       headers: {
//           'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//       }
//   }).then(res => res.json()));

//   if (isLoading) {
//       return 'ok'
//   }



  

//     return (
//         <div>
//             {/* Package One */}
// <input type="checkbox" id="my-modal-1" class="modal-toggle" />
// <div class="modal">
//   <div class="modal-box w-11/12 sm:w-2/3  max-w-5xl secondary-color">
//   <label for="my-modal-1" class="btn secondary-bg btn-sm btn-circle absolute right-2 top-2">✕</label>
//   <h1 className='text-3xl text-white font-medium'>Fill up the Form Properly</h1>
  
//    {
//    doctor.slice(0,1).map(doctors =>
//         <form onSubmit={handlePayment}>
//         <div class="form-control w-full mb-3 text-white mt-8">
//         <label class="label">
//           <span class="label-text  text-white">Full Name</span>
//         </label>
//         <input type="text" name='doctorName' value={user?.displayName} placeholder="Name" class="input border-gray-400  input-bordered secondary-color w-full " />
//       </div>
      
      
//         <div class="form-control w-full mb-3 text-white">
//         <label class="label">
//           <span class="label-text text-white">Email</span>
//         </label>
//         <input type="text" name='email' value={user.email} placeholder="Sign up Email" class="input border-gray-400 secondary-color input-bordered w-full" />
//       </div>
      
      
//         <div class="form-control w-full mb-3 text-white">
//         <label class="label">
//           <span class="label-text text-white">Age</span>
//         </label>
//         <input type="text" name='age' placeholder="Age" class="input secondary-color border-gray-400 input-bordered w-full " />
//       </div>
      
      
//         <div class="form-control w-full mb-3 text-white">
//         <label class="label">
//           <span class="label-text text-white">Doctor License ID</span>
//         </label>
//         <input type="text" name='doctorLicense' placeholder="ID" class="input secondary-color border-gray-400 input-bordered w-full " />
//       </div>
      
      
//         <div class="form-control w-full mb-3 text-white">
//         <label class="label">
//           <span class="label-text text-white text-left">Employee of Government Hospital/Private Hospital Name</span>
//         </label>
//         <input type="text" name='employee' placeholder="Hospital Name" class="input border-gray-400 secondary-color input-bordered w-full " />
//       </div>
      
      
//         <div class="form-control w-full mb-3 text-white">
//         <label class="label">
//           <span class="label-text text-white">Designation</span>
//         </label>
//         <input type="text" name='designation' placeholder="Designation" class="input border-gray-400 secondary-color input-bordered w-full " />
//       </div>
      
      
//         <div class="form-control w-full mb-3 text-white">
//         <label class="label">
//           <span class="label-text text-white">Degrees</span>
//         </label>
//         <input type="text" name='degree' placeholder="Degrees" class="input secondary-color border-gray-400  input-bordered w-full " />
//       </div>
      
      
//         <div class="form-control w-full mb-3 text-white">
//         <label class="label">
//           <span class="label-text text-white">Yours of Experienced</span>
//         </label>
//         <input type="text" name='experienced' placeholder="Yours of Experienced" class="input  border-gray-400  secondary-color input-bordered w-full " />
//       </div>
      
      
//         <div class="form-control w-full mb-3 text-white">
//         <label class="label">
//           <span class="label-text text-white">Field of Expertise</span>
//         </label>
//         <input type="text" name='expertise' placeholder="Field of Expertise" class="input border-gray-400 secondary-color input-bordered w-full " />
//       </div>
      
      
//         <div class="form-control w-full mb-3 text-white">
//         <label class="label">
//           <span class="label-text text-white">Private Chamber Name</span>
//         </label>
//         <input type="text" name='chamberName' placeholder="Private Chamber Name" class="input  border-gray-400  secondary-color input-bordered w-full " />
//       </div>

//         <div class="form-control w-full mb-3 text-white">
//         <label class="label">
//           <span class="label-text text-white">Private Chamber Address</span>
//         </label>
//         <input type="text" name='chamber' placeholder="Private Chamber Address" class="input  border-gray-400   secondary-color input-bordered w-full " />
//       </div>
      
//         <div class="form-control w-full mb-3 text-white">
//         <label class="label">
//           <span class="label-text text-white">Private Chamber Visiting Hours</span>
//         </label>
//         <input type="text" name='visitingHour' placeholder="Private Chamber Visiting Hours" class="input  border-gray-400   secondary-color input-bordered w-full " />
//       </div>
      
//         <div class="form-control w-full mb-3 text-white">
//         <label class="label">
//           <span class="label-text text-white">Private Chamber day off</span>
//         </label>
//         <input type="text" name='closed' placeholder="Day off" class="input  border-gray-400 secondary-color   input-bordered w-full " />
//       </div>
      
//         <div class="form-control w-full mb-3 text-white">
//         <input type="hidden" name='price' value={2000} placeholder="Private Chamber Address" class="input  border-gray-400   secondary-color input-bordered w-full " />
//       </div>
//         <div class="form-control w-full mb-2">
//         <label class="label">
//           <span class="label-text text-white">Serial Time Slots</span>
//         </label>
//         <input type="text" name='slots' value={doctors.slots} placeholder="Private Chamber Address" class="input  border-gray-400  text-gray-300 secondary-color input-bordered w-full " />
//       </div>
      
//       <button className='btn'><label for="my-modal-6" class="btn modal-button px-3">Next</label></button>
//       </form>
//     )}
    
        
        

 
//   </div>
// </div>

// {/* Send Payment */}

// <input type="checkbox" id="my-modal-6" class="modal-toggle" />
// <div class="modal modal-bottom sm:modal-middle ">
//   <div class="modal-box background-search">
//   <label for="my-modal-6" class="btn secondary-bg btn-sm btn-circle absolute right-2 top-2">✕</label>
//   <h1 className='text-white font-medium text-2xl text-left mb-3'>Payment</h1>
//   <div class="form-control w-full mb-2 text-white">
//         {/* <label class="label">
//           <span class="label-text text-white">Amount</span>
//         </label> */}
//         <input type="hidden" name='closed' value={2000} placeholder="$" class="input  border-gray-400 secondary-color   input-bordered w-full " />
//       </div>
//       <div class="form-control w-full mb-2 text-white">
//         {/* <label class="label">
//           <span class="label-text text-white">Card Number</span>
//         </label> */}
//         <input type="hidden" name='card' placeholder="5041  2584   6574" class="input  border-gray-400 secondary-color   input-bordered w-full " />
//       </div>
//       <div class="form-control w-full mb-2 text-white">
//         {/* <label class="label">
//           <span class="label-text text-white">Pin</span>
//         </label> */}
//         <input type="hidden" name='pin' placeholder="Pin Number" class="input  border-gray-400 secondary-color   input-bordered w-full " />
//       </div>

//       <div class="form-control w-full mb-2 text-white">
//         {/* <label class="label">
//           <span class="label-text text-white">Expire Date</span>
//         </label> */}
//         <input type="hidden" name='expire' placeholder="10/23" class="input  border-gray-400 secondary-color   input-bordered w-full " />
//       </div>
//       <div class="form-control w-full mb-5 mt-5 text-white">
//       <Elements stripe={stripePromise}>
//       <CheckoutForm payment={payment}/>
//       </Elements>
//       </div>
//       <div class="form-control w-full mb-3 text-white">
//         <input type="hidden" name='email'  placeholder="email" class="input  border-gray-400 secondary-color   input-bordered w-full " />
//       </div>

      
//   </div>
// </div>
//         </div>
//     );
// };

// export default Payment;