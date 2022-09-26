import React from 'react';
import img from '../assets/appointment.png'
import img2 from '../assets/prescription.png'
import img3 from '../assets/review.png'
import img4 from '../assets/analysis.png'
import img5 from '../assets/bookAppointment.png'
import img6 from '../assets/eprescription.png'
import img7 from '../assets/report.png'
import img8 from '../assets/search.png'
import img9 from '../assets/reportdelivery.png'
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <section class="text-gray-600 body-font">
        <div class="container px-5 lg:py-24 py-8 mx-auto">
          <div class="flex flex-wrap w-full lg:mb-20 mb-6 flex-col items-center text-center">
            <h1 class="lg:text-5xl text-2xl  font-bold  mb-4 text-white">Special Features</h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-white">We are offering Best services for patients, Doctor,Diagnostic Center</p>
            <button class="flex mx-auto mt-6 font-medium text-white shadow secondary-bg border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg"> <Link to="/login"> Sign up for free Now</Link></button>
          </div>
         
         
          <section class="text-gray-600 body-font">
  <div class="flex flex-wrap px-5 py-24 mx-auto items-left">
    <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b text-left border-cyan-500">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">For Doctors</h1>
     <div className='flex justify-between font-medium text-lg mt-8 text-white'>
     <div>
        <img src={img}alt='icon not found'/>
        <h2 className='mt-2 lg:text-lg lg:text-left text-center text-sm'>Online Appointment</h2></div>
     <div>
     <img src={img2}alt='icon not found'/>
        <h2 className='mt-2 lg:text-lg lg:text-left text-center text-sm'>Write Prescription</h2></div>  
     <div>
     <img src={img3}alt='icon not found'/>
        <h2 className='mt-2 lg:text-lg lg:text-left text-center text-sm'>Review Report</h2></div>
     <div>
     <img src={img4}alt='icon not found'/>
        <h2 className='mt-2 lg:text-lg lg:text-left text-center text-sm'>Patient Analysis</h2></div>
     </div>
       
     <div>
    
     <p class=" text-white  mt-8 leading-7 font-base" >
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span> <span className='font-medium text-xl  secondary-color-2'>Online Appointment:</span> Doctor Appointment Process will be fully online,
They can decide the time slots and amount of appointment.Patient 
Easily find doctor through search and can book appointment.When Patient will book appointment doctor will receive notification about appointment.
                </p>
     <p class=" text-white mb-2 mt-5 leading-7 font-base">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span><span className='font-medium text-xl secondary-color-2'>Write Prescription:</span> Doctor can write prescription online and saved.It
will be received by appointment book patient.
                </p>
     <p class=" text-white mb-2 mt-5 leading-7 font-base">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span><span className='font-medium text-xl secondary-color-2'>Review Report:</span> When Diagnostic Center or hospital will delivery the 
report doctor will get Notificaiton and Review the report.
                </p>
     <p class=" text-white mb-2 mt-5 leading-7 font-base">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span><span className='font-medium text-xl secondary-color-2'>Patient Analysis:</span> Doctor can analysis the patient appointment.How much
old patient return and new patient book appointment monthly.
                </p>
     </div>

     <div className='mt-40'>
     <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white mt-">For Diagnostic Center & Hospital</h1>
     <div className='flex justify-between font-medium text-lg mt-8 text-white'>
     <div>
        <img src={img9}alt='icon not found'/>
        <h2 className='mt-2'>Report Delivery</h2>
        </div>
     </div>
     <p class="text-white  mt-8 leading-7 font-base">
                 <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                     <path d="M20 6L9 17l-5-5"></path>
                   </svg>
                 </span><span className='font-medium text-xl secondary-color-2'>Online Report Delivery:</span> Diagnostic Center  can delivery the report online.
they can find patient through search and delivery the report
               </p>
     </div>

    </div>
    <div class="flex flex-col md:w-1/2 md:pl-12 mt-64">
      <h2 class=" font-semibold text-white tracking-wider sm:text-3xl text-left  text-3xl mb-3">For Patient</h2>
      <div className='flex justify-between font-medium text-lg mt-8 text-white'>
      <div>
     <img src={img8}alt='icon-not-found'/>
        <h2 className='mt-2 lg:text-lg lg:text-left text-center text-sm'>Search Doctor</h2>
        </div>
     <div>
        <img src={img5}alt='icon-not-found'/>
        <h2 className='mt-2 lg:text-lg lg:text-left text-center text-sm'>Book Appointment</h2></div>
     <div>
     <img src={img6}alt='icon-not-found'/>
        <h2 className='mt-2 lg:text-lg lg:text-left text-center text-sm'>E-Prescription</h2></div>
     <div>
     <img src={img7}alt="icon-not-found"/>
        <h2 className='mt-2 lg:text-lg lg:text-left text-center text-sm'>E-Report</h2></div>
  
     </div>
     <div>
    
    <p class=" text-white mb-2 mt-6 text-left leading-7 font-base ">
                 <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                     <path d="M20 6L9 17l-5-5"></path>
                   </svg>
                 </span><span className='font-medium text-xl secondary-color-2'>Book Appointment:</span> Patient can find the doctor through search and 
book appointment in there apropriate time frame.
               </p>
    <p class=" text-white mb-2 mt-5 text-left  leading-7 font-base">
                 <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                     <path d="M20 6L9 17l-5-5"></path>
                   </svg>
                 </span><span className='font-medium text-xl secondary-color-2'>E-Prescription :</span> Patient will receive E-prescription in their Dashboard.Patient 
can open it  and print it.
               </p>
    <p class=" text-white mb-2 mt-5 text-left leading-7 font-base">
                 <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                     <path d="M20 6L9 17l-5-5"></path>
                   </svg>
                 </span><span className='font-medium text-xl secondary-color-2'>Report :</span>  When diagnostic Center will delivery the report.Patient will receive 
notification.
               </p>
    <p class=" text-white mb-2 mt-5 text-left leading-7 font-base">
                 <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                     <path d="M20 6L9 17l-5-5"></path>
                   </svg>
                 </span><span className='font-medium text-xl secondary-color-2'>Find Doctors :</span>  Patient find doctors through searching their name, Diagnosti Center 
name, specialist, and district name as well.
               </p>
    </div>
    </div>
  </div>
</section>



         
          
         
        </div>
      </section>
    );
};

export default Feature;