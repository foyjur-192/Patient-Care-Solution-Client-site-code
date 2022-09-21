import React from 'react';
import { Link } from 'react-router-dom';

const LastHook = () => {
    return (
        <div>
            <section class="text-gray-600 body-font  mb-8">
  <div class="container mx-auto flex flex-col px-5 py-16 justify-center items-center tableHead shadow">
    <div class="w-full md:w-2/3 flex flex-col mb-8 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Are you Afraid with Trouble Medical Service Process ??</h1>
      <p class="mb-8 leading-relaxed text-white">Our main focus patient health and effortless Medical Experience</p>
      
    <button className='secondary-bg btn'> <Link to='/login'>Get Started Now</Link> </button>
    </div>
  </div>
</section>
        </div>
    );
};

export default LastHook;