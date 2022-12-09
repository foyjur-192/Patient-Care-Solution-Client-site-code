import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe ('pk_test_51LjkEdASc4CYwlU4gRjAmLe1deBn2stDoDOz6NjPfbOt2AOjb0YKXhtXeC1x3eZbWPKqPncwJ1ahNlBUSSOpnH6e005Tb1MjgN');

const Pricing = () => {
  const [user] = useAuthState (auth);
const [doctor, setDoctor] = useState([]);
const [userData, setUserData] = useState([])
// const [user] = useAuthState();
console.log(doctor);
const { id } = useParams ();

var showDate = new Date();
var displayTodaysDate = showDate.getDate()+'/'+(showDate.getMonth()+1)+'/'+showDate.getFullYear();



const handlePayment = event => {
    event.preventDefault()

    const doctorName = event.target.doctorName.value;
    const email = event.target.email.value;
    const age = event.target.age.value;
    const doctorLicense = event.target.doctorLicense.value;
    const employee = event.target.employee.value;
    const designation = event.target.designation.value;
    const degree = event.target.degree.value;
    const experienced = event.target.experienced.value;
    const expertise = event.target.expertise.value;
    const chamber = event.target.chamber.value;
    const visitingHour = event.target.visitingHour.value;
    const closed = event.target.closed.value;
    const chamberName = event.target.chamberName.value;
    const date = event.target.date.value;
    const slots = event.target.slots.value;
    const price = event.target.price.value;
  
   


    const doctorData = {
        doctorName,
        email,
        age,
        doctorLicense,
        employee,
        designation,
        degree,
        experienced,
        expertise,
        chamber,
        visitingHour,
        closed,
        slots,
        date,
        chamberName,
        price

    }

    console.log(doctorData);

    fetch('https://patient-care-solution-server-production.up.railway.app/newData', {

        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(doctorData)

    })
        .then(res => res.json())
        .then(data => {
          if(data.success){
              toast(`Data Update Successfully`)
          }
         else {
          toast.error(`You already have been submitted data`)
         }
      })
}

useEffect (() => {
  const getMedicine = async () => {
      const email = user.email;
      const url = `https://patient-care-solution-server-production.up.railway.app/userData?email=${email}`;
      console.log(url);
      const { data } = await axios.get(url);
      setUserData(data);
      console.log(data);
  }
  getMedicine();
}, [user])


 useEffect(() => {
   fetch('/doctorDetails.json')
    .then(res => res.json())
    .then(data => setDoctor(data));
   },[])

   
//    useEffect(() => {
//     const email = user.email;
//     fetch( `https://patient-care-solution-server-production.up.railway.app/priceData?email=${email}`, {
 
//     method: 'GET',
//     headers:{
//      authorization: `Bearer ${localStorage.getItem('accessToken')}`
//  }
 
//     })
//      .then(res => res.json())
//      .then(data => setPayment(data));
//     },[])


  // const url = `https://patient-care-solution-server-production.up.railway.app/priceData/${id}`;

  // const { data: payment, isLoading } = useQuery (['priceData', id], () => fetch(url, {
  //     method: 'GET',
  //     headers: {
  //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  //     }
  // }).then(res => res.json()));

  // if (isLoading) {
  //     return toast('Data is Loading')
  // }


  //  console.log(payment);



   
    

    return (
        <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto text-white">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-5xl  font-bold  mb-2 text-white">Subscription for Doctors</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Without Payment Doctor Profile will not appear in Search </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 sm:w-1/4 md:w-1/3 w-full ">
              <div class="h-full p-6 secondary-color flex flex-col relative overflow-hidden shadow">
                <span class="secondary-bg text-white px-3 py-1 tracking-widest text-xm absolute right-0 top-0 rounded-bl">POPULAR</span>
                <h2 class="text-3xl  mb-12 text-center   mb-12 text-white font-medium mt-5">3 Month Package</h2>
               <div>
                <p className='text-lg mb-2'>Unlimited Patient Data</p>
                <p className='text-lg mb-2'>Keep your Profile in search</p>
                <p className='text-lg '>24/7 support</p>
               </div>
                <h1 class="text-7xl text-white leading-none text-center  mt-16 ">
                  <span className='mb-12 text- font-bold text-center'>2000<span className='text-sm secondary-color-2'>TK</span></span>
           
                </h1>
                 <label for="my-modal-1" class="btn modal-button secondary-bg text-lg mt-14 ">Payment Now</label>
              </div>
            </div>
            <div class="p-4 sm:w-1/4 md:w-1/3 w-full ">
              <div class="h-full p-6 secondary-color flex flex-col relative overflow-hidden shadow">
              
                <h2 class="text-3xl  mb-12 text-center   mb-12 text-white font-medium mt-5">6 Month Package</h2>
               <div>
                <p className='text-lg mb-2'>Unlimited Patient Data</p>
                <p className='text-lg mb-2'>Keep your Profile in search</p>
                <p className='text-lg '>24/7 support</p>
               </div>
                <h1 class="text-7xl text-white leading-none text-center  mt-16 ">
                  <span className='mb-12 text- font-bold text-center'>3000<span className='text-sm secondary-color-2'>TK</span></span>
           
                </h1>
                 <label for="my-modal-1" class="btn modal-button secondary-bg text-lg mt-14 ">Payment Now</label>
              </div>
            </div>
            <div class="p-4 sm:w-1/4 md:w-1/3 w-full ">
              <div class="h-full p-6 secondary-color flex flex-col relative overflow-hidden shadow">

                <h2 class="text-3xl  mb-12 text-center   mb-12 text-white font-medium mt-5">Annual Package</h2>
               <div>
                <p className='text-lg mb-2'>Unlimited Patient Data</p>
                <p className='text-lg mb-2'>Keep your Profile in search</p>
                <p className='text-lg '>24/7 support</p>
               </div>
                <h1 class="text-7xl text-white leading-none text-center  mt-16 ">
                  <span className='mb-12 text- font-bold text-center'>5000<span className='text-sm secondary-color-2'>TK</span></span>
           
                </h1>
                 <label for="my-modal-1" class="btn modal-button secondary-bg text-lg mt-14 ">Payment Now</label>
              </div>
            </div>



     

            
         
          </div>
        </div>



{/* Package One */}
<input type="checkbox" id="my-modal-1" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 sm:w-2/3  max-w-5xl secondary-color">
  <label for="my-modal-1" class="btn secondary-bg btn-sm btn-circle absolute right-2 top-2">✕</label>
  <h1 className='text-3xl text-white font-medium'>Fill up the Form Properly</h1>

{
  doctor.slice(0,1).map(doctors =>
  

      <form onSubmit={handlePayment}>
        <div class="form-control w-full mb-3 text-white mt-8">
        <label class="label">
          <span class="label-text  text-white">Full Name</span>
        </label>
        <input type="text" name='doctorName' placeholder="Name" class="input border-gray-400  input-bordered secondary-color w-full " />
      </div>
      
      
        <div class="form-control w-full mb-3 text-white">
        <label class="label">
          <span class="label-text text-white">Email</span>
        </label>
        <input type="text" name='email' value={user?.email} placeholder="Sign up Email" class="input border-gray-400 secondary-color input-bordered w-full" />
      </div>
      
      
        <div class="form-control w-full mb-3 text-white">
        <label class="label">
          <span class="label-text text-white">Age</span>
        </label>
        <input type="text" name='age' placeholder="Age" class="input secondary-color border-gray-400 input-bordered w-full " />
      </div>
      
      
        <div class="form-control w-full mb-3 text-white">
        <label class="label">
          <span class="label-text text-white">Doctor License ID</span>
        </label>
        <input type="text" name='doctorLicense' placeholder="ID" class="input secondary-color border-gray-400 input-bordered w-full " />
      </div>
      
      
        <div class="form-control w-full mb-3 text-white">
        <label class="label">
          <span class="label-text text-white text-left">Employee of Government Hospital/Private Hospital Name</span>
        </label>
        <input type="text" name='employee' placeholder="Hospital Name" class="input border-gray-400 secondary-color input-bordered w-full " />
      </div>
      
      
        <div class="form-control w-full mb-3 text-white">
        <label class="label">
          <span class="label-text text-white">Designation</span>
        </label>
        <input type="text" name='designation' placeholder="Designation" class="input border-gray-400 secondary-color input-bordered w-full " />
      </div>
      
      
        <div class="form-control w-full mb-3 text-white">
        <label class="label">
          <span class="label-text text-white">Degrees</span>
        </label>
        <input type="text" name='degree' placeholder="Degrees" class="input secondary-color border-gray-400  input-bordered w-full " />
      </div>
      
      
        <div class="form-control w-full mb-3 text-white">
        <label class="label">
          <span class="label-text text-white">Yours of Experienced</span>
        </label>
        <input type="text" name='experienced' placeholder="Yours of Experienced" class="input  border-gray-400  secondary-color input-bordered w-full " />
      </div>
      
      
        <div class="form-control w-full mb-3 text-white">
        <label class="label">
          <span class="label-text text-white">Field of Expertise</span>
        </label>
        <input type="text" name='expertise' placeholder="Field of Expertise" class="input border-gray-400 secondary-color input-bordered w-full " />
      </div>
      
      
        <div class="form-control w-full mb-3 text-white">
        <label class="label">
          <span class="label-text text-white">Private Chamber Name</span>
        </label>
        <input type="text" name='chamberName' placeholder="Private Chamber Name" class="input  border-gray-400  secondary-color input-bordered w-full " />
      </div>

        <div class="form-control w-full mb-3 text-white">
        <label class="label">
          <span class="label-text text-white">Private Chamber Address</span>
        </label>
        <input type="text" name='chamber' placeholder="Private Chamber Address" class="input  border-gray-400   secondary-color input-bordered w-full " />
      </div>
      
        <div class="form-control w-full mb-3 text-white">
        <label class="label">
          <span class="label-text text-white">Private Chamber Visiting Hours</span>
        </label>
        <input type="text" name='visitingHour' placeholder="Private Chamber Visiting Hours" class="input  border-gray-400   secondary-color input-bordered w-full " />
      </div>
      
        <div class="form-control w-full mb-3 text-white">
        <label class="label">
          <span class="label-text text-white">Private Chamber day off</span>
        </label>
        <input type="text" name='closed' placeholder="Day off" class="input  border-gray-400 secondary-color   input-bordered w-full " />
      </div>
      
        <div class="form-control w-full mb-3 text-white">
        <input type="hidden" name='price' value={2000} placeholder="Private Chamber Address" class="input  border-gray-400   secondary-color input-bordered w-full " />
      </div>
        <div class="form-control w-full mb-2">
        <input type="hidden" name='date' value={displayTodaysDate}  placeholder="Private Chamber Address" class="input  border-gray-400  text-gray-300 secondary-color input-bordered w-full " />
      </div>
        <div class="form-control w-full mb-2">
        <label class="label">
          <span class="label-text text-white">Serial Time Slots</span>
        </label>
        <input type="text" name='slots' value={doctors.slots} placeholder="Private Chamber Address" class="input  border-gray-400  text-gray-300 secondary-color input-bordered w-full " />
      </div>
      
      <button className='btn'><label for="my-modal-6" class="btn modal-button px-3">Next</label></button>
      </form>
         
         )}
        

 
  </div>
</div>






<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle ">
  <div class="modal-box background-search">
  <label for="my-modal-6" class="btn secondary-bg btn-sm btn-circle absolute right-2 top-2">✕</label>
  <h1 className='text-white font-medium text-2xl text-left mb-3'>Payment</h1>
  <div class="form-control w-full mb-2 text-white">
        {/* <label class="label">
          <span class="label-text text-white">Amount</span>
        </label> */}
        <input type="hidden" name='closed' value={2000} placeholder="$" class="input  border-gray-400 secondary-color   input-bordered w-full " />
      </div>
      <div class="form-control w-full mb-2 text-white">
        {/* <label class="label">
          <span class="label-text text-white">Card Number</span>
        </label> */}
        <input type="hidden" name='card' placeholder="5041  2584   6574" class="input  border-gray-400 secondary-color   input-bordered w-full " />
      </div>
      <div class="form-control w-full mb-2 text-white">
        {/* <label class="label">
          <span class="label-text text-white">Pin</span>
        </label> */}
        <input type="hidden" name='pin' placeholder="Pin Number" class="input  border-gray-400 secondary-color   input-bordered w-full " />
      </div>

      <div class="form-control w-full mb-2 text-white">
        {/* <label class="label">
          <span class="label-text text-white">Expire Date</span>
        </label> */}
        <input type="hidden" name='expire' placeholder="10/23" class="input  border-gray-400 secondary-color   input-bordered w-full " />
      </div>
      <div class="form-control w-full mb-5 mt-5 text-white">
      <Elements stripe={stripePromise}>
      <CheckoutForm/>
      </Elements>
      </div>
      <div class="form-control w-full mb-3 text-white">
        <input type="hidden" name='email'  placeholder="email" class="input  border-gray-400 secondary-color   input-bordered w-full " />
      </div>

      
  </div>
</div>









{/* Package Two */}
<input type="checkbox" id="my-modal-2" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
      <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>

{/* Package Three */}
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
      <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>

      </section>
    );
};

export default Pricing;