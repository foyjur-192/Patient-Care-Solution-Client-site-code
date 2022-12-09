import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Prescription = () => {
    const [user, loading, error] = useAuthState (auth );
   const [medicines, setMedicine] = useState([])






    
    useEffect(() => {
        const getMedicine = async () => {
            const email = user.email;
            const url = `https://dark-pink-tortoise-slip.cyclic.app/prescriptionMedicine?email=${email}`;
            console.log(url);
            const { data } = await axios.get(url);
            setMedicine(data);
            console.log(data);
        }
        getMedicine();
    }, [user])

  
    return (
        <div>
           
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-5 mt-8'>
                <div className='bg-state-200 shadow-lg min-h-[700px] p-8'>
                    {/* <div className='text-left'>
                        <h2 className='text-2xl mb-3' type='text' name='patientProfile'>Patient Profile</h2>
                        <h4 className='font-median'>Md.Abidur Rahman</h4>
                        <p>Age: 30 years Old</p>
                        <p>Address: Sherpur</p>
                        <p>Patient Type: Old</p>
                        <p>Last Visit: 20/05/2022</p>
                    </div> */}
                    <div className='min-h-[200px] shadow-lg mt-8 mb-5 bg-state-200 p-3'>
                        <h3>Blood Pressure</h3>
                    </div>
                    <div className='min-h-[200px] shadow-lg bg-state-200 p-3'>
                        <h3>Glucose Room</h3>
                    </div>
                </div>
 
           
                <div className='bg-state-200 shadow-lg col-span-2 min-h-[700px]'>
                    <div className='flex justify-between bg-gray-50 pt-8 px-5 py-3'>
                      <>
                      {
                          medicines.map(medicine=>
                            <div className='text-left w-30'>
                              <p>Doctor Profile</p>
                              <p>{medicine.doctorName}</p>
                              <p>{medicine.degree}</p>
                              <p>{medicine.expertise}</p>
                              <p>{medicine.chamber}</p>
                            </div>
                            )
                        }
                        </>
                      <>
                      {
                          medicines.map(medicine=>
                            <div className='text-left w-30'>
                              <p>Patient Profile</p>
                              <p>Name: {medicine.patient}</p>
                              <p>Age: {medicine.age}</p>
                              <p>Address: {medicine.address}</p>
                              <p>Patient Type: {medicine.patientType}</p>
                            </div>
                            )
                        }
                        </>
                    

                   
                    </div>
                    <div className='grid grid-cols-1 p-5 min-h-[600px] '>
                    {
                          medicines.map(medicine=>
                            <textarea className='p-5' type='text' name='prescription'>{medicine.prescriptionText}</textarea>
                            )
                        }
                   
              


                    </div>
                   
                   
                </div>


                <div className='bg-state-200 shadow-lg min-h-[auto] p-5'>
                    <div className='grid grid-cols-1'>
                        <button className='btn btn-primary'>Print Prescription</button>
                    </div>
                    <div className='grid grid-cols-1 mt-5 shadow-lg'>
                        <textarea className='min-h-[200px] min-w-[200px] p-3' name='textBox' typeof='text' placeholder='Write Note' ></textarea>
                      
                    </div>
                    <div className='min-h-[200px] shadow-lg mt-8 mb-5 bg-state-200 p-3'>
                        <h3>Blood Pressure</h3>
                    </div>
                </div>
              
            </div>
          
        </div>
    );
};

export default Prescription;