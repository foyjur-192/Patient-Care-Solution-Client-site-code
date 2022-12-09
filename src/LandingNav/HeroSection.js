import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/btn.png"
import img from "../assets/hero.png"


const HeroSection = () => {
    return (
      <div>
        <section class="text-gray-600 body-font">
  <div class="container lg:py-16 py-12 mx-auto flex flex-wrap">
    <div class="flex flex-wrap  lg:-mx-4 -mx-0 mt-auto text-left mb-auto  md:w-1/2 w-80 content-start ">
      <div class="w-full lg:p-4  ">
        <h1 class=" font-bold lg:px-4 px-2 mb-8 lg:text-5xl text-2xl lg:text-left text-center  text-white leading-relax">Easy and Convinient way<br/> Book Appointment and<br/> get  Medical Services</h1>
        <div class=" pl-4 "><p className='text-white lg:text-left text-center overflow-hidden leading-7 text-base lg:pr-4 pr-1'>Medical Care Solution is providing Easy booking Appointment,receive report, <br/> Online Prescription Facility.Doctor Effectively can write prescription and  and see report <br/>online,Diagnostic Center and Hospital  can delivery report<br/> direct to patient Dashboard.</p></div>
      </div>
      <div className='grid grid-rows grid-flow-col gap-5 flex items-stretch lg:mt-7 mt-0 lg:py-0 py-5 '>
      <div class="lg:pl-8 pl-2 self-center  ">
     <button className='btn secondary-bg shadow transition duration-700 ease-in-out'><Link to="/login"> Get Started</Link></button>
      </div>
      <div class="self-center">
      <label for="my-modal-5" class=" secondary-color cursor-pointer  "><img src={image} className="" alt="no img found" /> </label> 
      </div> 
      <div className='self-center'>
        <p className='text-gray-100'>Watch Demo</p>
      </div>
      </div>
    </div>
    <div class="lg:w-1/2 w-80 w-full rounded-lg overflow-hidden cursor-pointer shadow lg:mt-6 mt-0">
      <img class="object-cover object-center   cursor-pointer w-full h-full" src={img} alt="stats"/>
    </div>
  </div>
</section>




<input type="checkbox" id="my-modal-5" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
  <label for="my-modal-5" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <iframe width="990" height="800" src="https://www.youtube.com/embed/DSPSfEjIxdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
</div>
    );
};

export default HeroSection;