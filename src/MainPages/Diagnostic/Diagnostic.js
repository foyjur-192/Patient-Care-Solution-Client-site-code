
import React, { useEffect } from 'react';
import { useState } from 'react';
import Report from './Report';
import SearchDetails from './SearchDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const Diagnostic = () => {
    const [user, loading, error] = useAuthState (auth);
    const [lists, setList] = useState([]);
    const [patients, setPatient] = useState([]);
    const [query, setQuery] = useState([]);
    const [reports, setReports] = useState(null);


    const search = (patients) => {
        return patients.filter((patient) => patient.patient.toLowerCase().includes(query))
    }


  //Booked Appointment
  useEffect ( () => {
    const getAppointment = async() => {
        const email = user.email;
        const url =`http://localhost:5000/diagnosticCenter?email=${email}`;
      console.log(url);
        const {data} = await axios.get(url);
        setList(data);
        console.log(data);
    }
     getAppointment();
 }, [user])


    useEffect(() => {
        fetch('diagnostic.JSON')
            .then(res => res.json())
            .then(data => setList(data));
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setPatient(data));
    }, [])

    return (
        <div>
            <div className='grid lg:w-full sm:w-full gap-6 px-6  '>
                <div className=' col-span-2 shadow-lg  sm:col-pan-1 h-screen p-5'>
                    <div className='border border-inherit flex justify-between p-3 mb-3'>
                        <p className='text-2xl'>Report Delivered today({lists.length})</p>
                     
                       
                        <label for="booking-modal" class="btn modal-button ">Delivery Report</label>
                        <input type="checkbox" id="booking-modal" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <input
                                    onChange={(event) => setQuery(event.target.value)}
                                    type="search" placeholder="Find Patient" class="input input-bordered input-success w-full max-w-xs" />
                                <div>
                                <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <SearchDetails setReports={setReports}  patients={search(patients) } />
                                </div>
                                {
                                    reports && <Report
                                    set
                                    reports={reports}
                                    >


                                    </Report>
                                }
                            </div>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table  w-full">
                            {/* <!-- head --> */}
                            <thead className='bg-none'>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Report Type</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lists.map(list =>
                                        <tr>
                                            <td>{list.patientName}</td>
                                            <td>{list.reportName}</td>
                                            <td>{list.date}</td>
                                            <td>{list.time}</td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex  absolute   '>
                    <div className='lg:w-6/12 sm:w-96 absolute  backdrop-blur-sm  p-5  min-h-[auto]'>
                       
                    </div>

                </div>






            </div>
        </div>

    );
};

export default Diagnostic;