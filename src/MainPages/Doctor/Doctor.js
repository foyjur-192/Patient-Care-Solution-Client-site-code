
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import PrescriptionDetails from './PrescriptionDetails';


const Doctor = () => {

    const [reports, setReports] = useState([]);
    const [newPatients, setNewPatients] = useState([]);
   const [prescriptions, setPrescription] = useState(null);
    const [user, loading, error] = useAuthState(auth);
   
    // Doctors
    // useEffect(() => {
    //     fetch('latestReport.JSON')
    //         .then(res => res.json())
    //         .then(data => setPatients(data));

    // }, [])







    // Doctors appointment
    useEffect(() => {
        const getPatient = async () => {
            const email = user.email;
            const url = `http://localhost:5000/patientAppointment?email=${email}`;
            console.log(url);
            const { data } = await axios.get(url);
            setNewPatients(data);
            console.log(data);
        }
        getPatient();
    }, [user])

    // Patient Reports
    useEffect(() => {
        const getPatientReport = async () => {
            const email = user.email;
            const url = `http://localhost:5000/patientReport?email=${email}`;
            console.log(url);
            const { data } = await axios.get(url);
            setReports(data);
            console.log(data);
        }
        getPatientReport();
    }, [user])






    // useEffect(() => {
    //     fetch('newPatient.JSON')
    //         .then(res => res.json())
    //         .then(data => setNewPatients(data));

    // }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 px-6  '>
                <div className='lg:col-span-1  secondary-color text-white  min-h-[500px] p-5 '>
                    <div class="overflow-x-auto">
                        <table class="table  w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th className=' secondary-color'>Patient Name</th>
                                    <th className='secondary-color'>See Reports</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reports.map(report =>
                                        <tr>
                                            <td>{report.patientName}</td>
                                            <td className='text-primary'><Link to='prescription'>See Reports</Link></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className='lg:col-span-3  overflow-auto min-h-[500px] secondary-color  p-5'>
                    <div className='border border-inherit text-white flex justify-between p-3 mb-3'>
                        <p>Today Patient List</p>
                        <p>Today Appointment Limit-100</p>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table  w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th className='secondary-color text-white' >Patient Name</th>
                                    <th className='secondary-color text-white'>Time Slot</th>
                                    <th className='secondary-color text-white'>Date</th>
                                    <th className='secondary-color text-white '> Diagnostic Center name</th>
                                    <th className='secondary-color text-white'> Prescription</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newPatients.map(newPatient =>
                                        <tr>
                                            <td>{newPatient.patient}</td>
                                            <td>{newPatient.slot}</td>
                                            <td>{newPatient.date}</td>
                                            <td className='text-sm'>{newPatient.chamber}</td>
                                            <td className='text-primary'> <label for="prescription-modal"  onClick={() => setPrescription(newPatient)}  class="btn modal-button">open modal</label></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>

                      {
                         prescriptions && <PrescriptionDetails
                         set prescriptions = {prescriptions}
                         >

                         </PrescriptionDetails>
                      
                        }
                </div>
          
                <div className='lg:col-span-3  overflow-auto min-h-[400px] secondary-color'>    </div>



                <div className='lg:col-span-1  overflow-auto min-h-[400px] secondary-color gap-6 text-white'>
                    <div className='p-5'>
                        <div className='flex justify-between'>
                            <p>Patient</p>
                            <p>2020/2021</p>
                        </div>
                        <div>
                            <div className='mt-8 flex items-center '>
                                <p className=' flex justify-center   w-12 h-12 bg-cyan-100 rounded-full shadow-lg'><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                </svg> </p>
                                <p className='ml-2 text-xl'>New Patient 80%</p>

                            </div>
                            <div className='mt-3 flex items-center '>
                                <p className=' flex justify-center   w-12 h-12 bg-cyan-100 rounded-full shadow-lg'><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                </svg> </p>
                                <p className='ml-2 text-xl'>Old patient Return 20%</p>

                            </div>

                            <div>

                            </div>
                        </div>

                    </div>
                    <div className='bg-state-200  shadow-lg  min-h-[180px] p-5'>
                        <div className='flex justify-between'>
                            <p>Man & Women</p>
                            <p>2020/2021</p>
                        </div>
                        <div className='mt-8 flex items-center '>
                            <p className=' flex justify-center   w-12 h-12 bg-cyan-100 rounded-full shadow-lg'><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg> </p>
                            <p className='ml-2 text-xl'>Women Patient 70%</p>

                        </div>
                        <div className='mt-3 flex items-center '>
                            <p className=' flex justify-center   w-12 h-12 bg-cyan-100 rounded-full shadow-lg'><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg> </p>
                            <p className='ml-2 text-xl'>Male Patient 30%</p>

                        </div>



                    </div>

                </div>









            </div>
        </div>
    );
};

export default Doctor;