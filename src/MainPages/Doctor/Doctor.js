import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Doctor = () => {
    const [patients, setPatients] = useState([]);
    const [newPatents, setNewPatients] = useState([]);


    // Doctors
    useEffect(() => {
        fetch('latestReport.JSON')
            .then(res => res.json())
            .then(data => setPatients(data));

    }, [])


    // Doctors
    useEffect(() => {
        fetch('newPatient.JSON')
            .then(res => res.json())
            .then(data => setNewPatients(data));

    }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6 px-6  '>
                <div className='bg-state-200 sm:w-full shadow-lg  min-h-[500px] p-5 '>
                    <div class="overflow-x-auto">
                        <table class="table  w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>See Reports</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    patients.map(patient =>
                                        <tr>
                                            <td>{patient.patientName}</td>
                                            <td className='text-primary'><Link to='prescription'>{patient.report}</Link></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>


                </div>
                <div className='bg-state-300 col-span-2 shadow-lg  sm:col-pan-1 min-h-[500px] p-5'>
                    <div className='border border-inherit flex justify-between p-3 mb-3'>
                        <p>Today Patient List</p>
                        <p>Today Appointment Limit-100</p>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table  w-full">
                            {/* <!-- head --> */}
                            <thead className='bg-none'>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Serial Number</th>
                                    <th>Patient Type</th>
                                    <th> Diagnostic Center name</th>
                                    <th> Prescription</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newPatents.map(newPatent =>
                                        <tr>
                                            <td>{newPatent.PatientName}</td>
                                            <td>{newPatent.serialNumber}</td>
                                            <td>{newPatent.patientType}</td>
                                            <td>{newPatent.chamber}</td>
                                            <td className='text-primary'><Link to='prescription'>{newPatent.prescription}</Link></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>





                </div>


            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6 px-6 mt-8 mb-8'>
                <div className='col-span-2 bg-state-200 shadow-lg min-h-[400px]'>    </div>
                <div className='bg-state-200  min-h-[400px] grid grid-rows-2 grid-flow-col gap-6'>
                    <div className='bg-state-200  shadow-lg min-h-[180px] p-5'>
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