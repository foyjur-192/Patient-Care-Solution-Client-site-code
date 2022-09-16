import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';
import img from './../../image/log in 3.png'
// import img from '../../image/login.png'

const LogIn = () => {
    const navigate = useNavigate();
    return (

        <div className='background-Color  max-h-[fit] ml-50px mr-50px'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1  gap-5'>
                <div className='md:col-span-2 sm:col-span-1 '>
                <div className='lg:pl-10 '>
                <img src={img} alt="" width='100%' height='auto'  />
                </div>
                
                </div>
                <div className='secondary-color  max-h-[fit] py-5 '>
                    <div className='grid md:grid-cols-1 sm:grid-cols-1 p-5 lg:mt-48  '>
                    <h1 className='lg:text-4xl sm:text-3xl mt-5 text-white mb-3'>Select Your Sign up Option </h1>
                    <p className='mt-1 text-xl text-white mb-12'>Click on your option and Sing up the website</p>
                        <button className='btn border2 secondary-color ' onClick={() => navigate('/PatientSignUp')}>Patient</button>
                        <button className='btn  border2 secondary-color mt-6' onClick={() => navigate('/doctorSignUp')}>Doctor</button>
                        <button className='btn border2 mt-6 secondary-color' onClick={() => navigate('/diagnosticSignUp')}>Diagnostic Center Or Hospital</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default LogIn;