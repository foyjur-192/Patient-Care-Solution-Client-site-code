
import React, { useEffect } from 'react';
import { useState } from 'react';
import Report from './Report';
import SearchDetails from './SearchDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import SimpleBar from 'simplebar-react';


const Diagnostic = () => {
    const [user, loading, error] = useAuthState (auth);
    const [lists, setList] = useState([]);
    const [patients, setPatient] = useState([]);
    const [query, setQuery] = useState([]);
    const [reports, setReports] = useState(null);

   console.log(lists);
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
        fetch('http://localhost:5000/dataForSearch')
            .then(res => res.json())
            .then(data => setPatient(data));
    }, [])

    return (
        <div>


           <div className=''>
          <div className=' lg:max-w-full sm:max-w-xs  py-5 '>
          <div className='flex justify-between   py-5 px-8'>
                        <div> <p className='lg:text-2xl sm:text-xl text-left text-white'>Report Delivered<br/> today({lists.length})</p></div>
                       <div> <label for="booking-modal" class="btn modal-button secondary-bg text-white ">Delivery Report</label></div>
                        </div>
          </div>

          <div className='lg:max-w-full sm:max-w-xs  bg-gray-500'>

 <div className="secondary-color px-8 h-screen">
 <SimpleBar  style={{ minHeight: '600px' }}>
                        <table class="table  w-full ">
                            {/* <!-- head --> */}
                            <thead className=''>
                                <tr>
                                    <th className='tableHead text-white'>Patient Name</th>
                                    <th className='tableHead text-white'>Report Type</th>
                                    <th className='tableHead text-white'>Date</th>
                                    <th className='tableHead text-white'>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                           
                                {
                                    lists.map(list =>
                                        <tr>
                                            <td  className='secondary-color text-white'>{list.patientName}</td>
                                            <td className='secondary-color text-white'>{list.reportName}</td>
                                            <td className='secondary-color text-white'>{list.date}</td>
                                            <td className='secondary-color text-white'>{list.time}</td>

                                        </tr>
                                    )
                                }
                               
                            </tbody>
                        </table>
                        </SimpleBar>
                    </div>
          </div>
          </div>

























              <div>
             <div className='  '>
                <div className=' p-5'>
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
        
            </div>
             </div> 
        </div>

    );
};

export default Diagnostic;