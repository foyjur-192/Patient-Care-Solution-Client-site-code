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
            const url = `http://localhost:5000/patientData?email=${email}`;
            console.log(url);
            const { data } = await axios.get(url);
            setProfile(data);
            console.log(data);
        }
        getData();
    }, [user])
    return (
        <div className='lg:w-full sm:w-full gap-5 mt-12 px-20 text-left'>
            <div><h1 className='text-lg bg-blue-700 p-3 w-60 text-white '>{user?.displayName} Profile</h1></div>
           <div className='mt-5' >
           {
           profiles.map(profile=>
              <><p>Full Name: {profile.patientName}</p>
              <p className='mt-3'>Age: {profile.age} Years</p>
              <p className='mt-3'>District: {profile.district}</p>
              </>
            )
           }
           </div>
           <p></p>
        </div>
    );
};

export default Profile;