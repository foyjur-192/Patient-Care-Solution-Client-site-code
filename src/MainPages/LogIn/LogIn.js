import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';
// import img from '../../image/login.png'

const LogIn = () => {
    const navigate = useNavigate();
    return (

        <div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 mt-8 gap-5'>
                <div className='col-span-2 bg-state-200 shadow-lg min-h-[600px] background-bg p-8'>
                </div>
                <div className='bg-state-200 shadow-lg min-h-[600px]'>
                    <h1 className='text-2xl mt-28'>Select Your Sign up Option </h1>
                    <p className='mt-1'>Click on your option and Sing up the website</p>
                    <div className='grid grid-cols-1 p-5 mt-8'>
                        <button className='btn btn-primary' onClick={() => navigate('/PatientSignUp')}>Patient</button>
                        <button className='btn btn-primary mt-6' onClick={() => navigate('/doctorSignUp')}>Doctor</button>
                        <button className='btn btn-primary mt-6 ' onClick={() => navigate('/diagnosticSignUp')}>Diagnostic Center Or Hospital</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default LogIn;