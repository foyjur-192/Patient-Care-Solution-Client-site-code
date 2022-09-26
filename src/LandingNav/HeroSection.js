import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/btn.png"
import img from "../assets/hero.png"


const HeroSection = () => {
    return (
      <div>
        <section class="text-gray-600 body-font">
  <div class="container py-16 mx-auto flex flex-wrap">
    <div class="flex flex-wrap  lg:-mx-4 mt-auto text-left mb-auto lg:w-1/2 sm:w-80 content-start ">
      <div class="w-full sm:p-4  ">
        <h1 class=" font-bold px-4 mb-8 lg:text-5xl text-2xl lg:text-left text-center  text-white leading-relax">Easy and Convinient way<br/> Book Appointment and<br/> get  Medical Services</h1>
        <div class=" pl-4 "><p className='text-white lg:text-left text-center overflow-hidden leading-7 text-base lg:pr-4 '>Medical Care Solution is providing Easy booking Appointment,receive report, <br/> Online Prescription Facility.Doctor Effectively can write prescription and  and see report <br/>online,Diagnostic Center and Hospital  can delivery report<br/> direct to patient Dashboard.</p></div>
      </div>
      <div class="mt-7 lg:pl-8 pl-2 sm:w-80 lg:w-1/4 w-1/2">
     <button className='btn secondary-bg shadow'><Link to="/login"> Get Started</Link></button>
      </div>
      <div class=" flex justify-center  sm:w-80 lg:w-1/4 w-1/2">
        <img src={image} className="" alt="no img found" />
      </div> 
    </div>
    <div class="lg:w-1/2 sm:w-80 w-full rounded-lg overflow-hidden cursor-pointer shadow mt-6 sm:mt-0">
      <img class="object-cover object-center   cursor-pointer w-full h-full" src={img} alt="stats"/>
    </div>
  </div>
</section>
</div>
    );
};

export default HeroSection;