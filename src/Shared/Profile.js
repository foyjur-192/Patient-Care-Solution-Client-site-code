import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
    const [profiles, setProfile] = useState([])

    useEffect(() => {
        const getData = async () => {
            const email = user.email;
            const url = `https://dark-pink-tortoise-slip.cyclic.app/patientData?email=${email}`;
            console.log(url);
            const { data } = await axios.get(url);
            setProfile(data);
            console.log(data);
        }
        getData();
    }, [user])
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 px-6  background-Color min-h-[1000px]'>
            <div className='lg:col-span-1  overflow-auto min-h-[800px] secondary-color gap-6 text-white'>
                <h2 className='mt-12 text-3xl text-left pl-6'>Patient Profile</h2>
                <img src='https://i.ibb.co/VM0ZM6c/Rectangle-309.png' className='pl-6 pt-6' alt='Image is not available' />
                <h3 className='text-2xl text-left pl-6 pt-5'><span className='deep-color'>Name:</span> Azadur Rahman</h3>
            </div>
            <div className='lg:col-span-3  overflow-auto min-h-[800px] secondary-color gap-6 text-white'>
                <div className='text-left pl-12 mt-28'>
                    <label for="edit-modal" className="text-lg mb-8 secondary-color-2 cursor-pointer">Edit Profile</label>
                    <p className='text-lg mt-6  mb-8'><span className='deep-color '>Age:</span> 28 Years Old</p>
                    <p className='text-lg mb-8'><span className=' deep-color '>Address:</span> Village-Parkul, Post-Afruzganj, Police Station- Nabiganj District-Habiganj</p>
                    <p><span className='text-lg deep-color mt-6'>District:</span> Habiganj</p>
                </div>



                {/* Body part */}
                <input type="checkbox" id="edit-modal" class="modal-toggle" />
                <div className="modal modal-bottom  sm:modal-middle">
                    <div className="modal-box secondary-color">
                        <label for="edit-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h2 className='text-left text-lg'>Update Profile</h2>
                        <input type="file" name='photo' placeholder='Photo' class="lg:w-full mt-8 md:w-full secondary-color mb-6 rounded border border-black text-white  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
                        <input type="text" name='name' placeholder='Name' class="lg:w-full md:w-full secondary-color mb-6 rounded border border-black text-white  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
                        <input type="text" name='age' placeholder='Age' class="lg:w-full md:w-full secondary-color mb-6 rounded border border-black text-white  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
                        <input type="text" name='district' placeholder='District' class="lg:w-full md:w-full secondary-color mb-6 rounded border border-black text-white  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />

                        <div class="modal-action">
                            <label for="edit-modal" class="btn secondary-bg">Update Profile</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;