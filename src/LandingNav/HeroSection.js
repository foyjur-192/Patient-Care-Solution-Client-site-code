import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/btn.png"


const HeroSection = () => {
    return (
        <section class="text-gray-600 body-font">
  <div class="container py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap  lg:-mx-4 mt-auto text-left mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4  ">
        <h1 class=" font-bold px-4  sm:text-5xl  text-white leading-relax">Easy and Convinient way<br/> Book Appointment and<br/> get  Medical Services</h1>
        <div class="leading-relaxed"><p className='text-white text-md p-4 '>Medical Care Solution is providing Easy booking Appointment, receive report, Online Prescription Facility.Doctor Effectivly can write prescription and  and see report online,Diagnostic Center and Hospital can delivery report direct to patient Dashboard.</p></div>
      </div>
      <div class="mt-7 lg:pl-8 sm:w-1/2 lg:w-1/4 w-1/2">
     <button className='btn secondary-bg'><Link to="/login"> Get Started</Link></button>
      </div>
      <div class=" flex justify-center  sm:w-1/2 lg:w-1/4 w-1/2">
        <img src={image} className="" alt="no img found" />
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden cursor-pointer mt-6 sm:mt-0">
      <img class="object-cover object-center cursor-pointer w-full h-full" src="https://i.ibb.co/fGJRJ9J/Patent-Page-1.png" alt="stats"/>
    </div>
  </div>
</section>
    );
};

export default HeroSection;