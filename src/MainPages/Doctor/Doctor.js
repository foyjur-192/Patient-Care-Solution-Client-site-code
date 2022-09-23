
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import PrescriptionDetails from './PrescriptionDetails';
import SimpleBar from 'simplebar-react';
import ReactApexChart from 'react-apexcharts';

const Doctor = () => {

    const [reports, setReports] = useState([]);
    const [newPatients, setNewPatients] = useState([]);
    const [prescriptions, setPrescription] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    //Report Popup
    const [reportPopUps, setReportPopUps] = useState([]);
    const showReport = (report) => {
        setReportPopUps([report])
    };
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
            const url = `https://search-doctor-server-production.up.railway.app/patientAppointment?email=${email}`;
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
            const url = `https://search-doctor-server-production.up.railway.app/patientReport?email=${email}`;
            console.log(url);
            const { data } = await axios.get(url);
            setReports(data);
            console.log(data);
        }
        getPatientReport();
    }, [user])




//Apex Chart
const [state, setState] = useState({
    series: [{
        style: {
            colors: ['#00D8FF'],
          },
        name: 'New Patient',
        data: [31, 40, 28, 51, 42, 109, 100],
        color: '#41B883',
       
    }, {
        name: 'Old Patient Return',
        data: [11, 32, 45, 32, 34, 52, 41],
        color: '#00D8FF',
    }],
    options: {
        chart: {
            height: 200,
            type: 'area'
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'smooth'
        },

        yaxis: {
            labels: {
                style: {
                    colors : ['#ffffff'],
                    
                    
                }
            },
            xaxis: {

                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
        },



        tooltip: {
            x: {
                format: '22/07/2022 05:30'
            },
        },
    },


})

    // useEffect(() => {
    //     fetch('newPatient.JSON')
    //         .then(res => res.json())
    //         .then(data => setNewPatients(data));

    // }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 px-6  '>
                <div className='lg:col-span-1  secondary-color text-white  min-h-[600px] p-5 '>
                
                <div>
                <SimpleBar  style={{ maxHeight: '600px' }}>
                        <table class="table table-auto w-full text-left  ">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th className=' tableHead'>Patient Name</th>
                                    <th className=' tableHead'>See Reports</th>

                                </tr>
                            </thead>
                            
                          
                          
                            <tbody className=''>
                                {
                                    reports.map(report =>
                                        <tr className=''>
                                            <td className='border-y-gray-600 text-white secondary-color'>{report.patientName}</td>
                                            <td className='  border-y-gray-600 secondary-color-2 secondary-color' ><label for="report-modal" className='cursor-pointer' onClick={() => showReport(report)} >See Report</label></td>
                                        </tr>
                                    )
                                }
                         
                            </tbody>
              
                            
                          
                          
                        </table>
                        </SimpleBar>
                        <div>



                         {/* <!--Pop up --> */}
                        <input type="checkbox" id="report-modal" class="modal-toggle" />
                                <div class="modal">
                                    <div class="modal-box lg:max-w-5xl sm:max-w-xs sm:modal-middle  ">
                                        <label for="report-modal" class="btn btn-sm btn-circle absolute secondary-color-2 right-2 top-2">✕</label>
                                        {
                                            reportPopUps.map(pop =>
                                                <>
                                                    <h1 className='text-black text-2xl mb-3'>{pop.reportName}</h1>
                                                    <img className='w-full h-full text-black' src={pop.img} alt="No Image" />
                                                </>

                                            )
                                        }




                                    </div>
                                </div>
                        </div>
                        </div>
                        
                </div>

                <div className='lg:col-span-3  overflow-auto min-h-[500px] secondary-color  p-5'>
                    <div className='border border-inherit text-white flex justify-between p-3 mb-3'>
                        <p>Today Patient List</p>
                        <p>Today Appointment Limit-100</p>
                    </div>
                    <div class="">
                    <SimpleBar  style={{ maxHeight: '600px' }}>
                        <table class="table table-auto  w-full text-left   text-white">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th className='tableHead text-white' >Patient Name</th>
                                    <th className='tableHead text-white'>Time Slot</th>
                                    <th className='tableHead text-white'>Date</th>
                                    <th className='tableHead text-white '> Diagnostic Center name</th>
                                    <th className='tableHead text-white'> Prescription</th>

                                </tr>
                            </thead>
                           
                            <tbody className=''>
                                {
                                    newPatients.map(newPatient =>
                                        <tr className=''>
                                            <td className='border-y-gray-600 secondary-color '>{newPatient.patient}</td>
                                            <td className=' border-y-gray-600 secondary-color'>{newPatient.slot}</td>
                                            <td className='border-y-gray-600 secondary-color'>{newPatient.date}</td>
                                            <td className='border-y-gray-600 text-sm secondary-color'>{newPatient.chamber}</td>
                                            <td className='border-y-gray-600 text-primary secondary-color'> <label for="prescription-modal" onClick={() => setPrescription(newPatient)} class="secondary-color-2 cursor-pointer">Create Prescription</label></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            
                        </table>
                        </SimpleBar>
                    </div>

                    {
                        prescriptions && <PrescriptionDetails
                            set prescriptions={prescriptions}
                        >

                        </PrescriptionDetails>

                    }
                </div>

                <div className='lg:col-span-3  overflow-auto min-h-[400px] secondary-color'> 
              
                <p className='text-left text-white text-2xl font-medium font-base pl-5 pt-5'>Patient Graph</p>
                <div >
                    <ReactApexChart options={state.options} series={state.series} type="area" height={400} className="max-w-full text-white" />
                </div>
            </div>   



                <div className='lg:col-span-1  overflow-auto min-h-[400px] secondary-color gap-6 text-white'>
                    <div className='p-5'>
                        <div className='flex justify-between'>
                            <p className='text-2xl'>Patient</p>
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
                            <p className='text-2xl'>Man & Women</p>
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