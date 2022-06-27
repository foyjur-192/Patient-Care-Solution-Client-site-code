import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';



const Patient = () => {
    const [user] = useAuthState(auth);
    const [doctors, setDoctors] = useState([]);
    const [reports, setReports] = useState([]);
    const [appointments, setAppointment] = useState([]);


    // Doctors
    useEffect(() => {
      fetch('visitDoctor.JSON')
      .then(res => res.json())
      .then(data => setDoctors(data));
     
     },[])

    //  //Reports
    // useEffect(() => {
    //   fetch('report.JSON')
    //   .then(res => res.json())
    //   .then(data => setReports(data));
     
    //  },[])


  //Reports
  useEffect ( () => {
    const getReports = async() => {
        const email = user.email;
        const url =`http://localhost:5000/userReport?email=${email}`;
      console.log(url);
        const {data} = await axios.get(url);
        setReports(data);
        console.log(data);
    }
     getReports();
 }, [user])



  //Booked Appointment
    useEffect ( () => {
        const getAppointment = async() => {
            const email = user.email;
            const url =`http://localhost:5000/appointment?email=${email}`;
          console.log(url);
            const {data} = await axios.get(url);
            setAppointment(data);
            console.log(data);
        }
         getAppointment();
     }, [user])

    // useEffect ( () => {
    //     const getAppointment = async() => {
    //         const url =`http://localhost:5000/appointment`;
    //         console.log(url);
    //         const {data} = await axios.get(url);
    //         setAppointment(data);
    //         console.log(data);
    //     }
    //     getAppointment();
    // }, [])






    return (
        <div className='mt-12'>
           <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1  gap-5 px-6'>
           <div className='bg-Slate-100 min-h-[500px]'>
           <div class="overflow-x-auto">
                    <table class="table  w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Doctor Name</th>
                                <th>Chamber</th>
                                <th>Location</th>
                                <th>Prescription</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            doctors.slice(0,5).map(doctor => 
                                <tr>
                                <td>{doctor.doctorName}</td>
                                <td>{doctor.chamber}</td>
                                <td>{doctor.location}</td>
                                <td className='text-primary'><Link to='prescription'>{doctor.prescription}</Link></td>
                            </tr>
                            )
                            }
                  </tbody>
                    </table>
                </div>
           </div>
           <div className='bg-Slate-100 min-h-[500px]'>
           <div className=''>
                <div className='bg-Slate-300  shadow-lg text-left px-4 min-h-[200px] py-8'>
                    <h2 className='text-2xl font-median-bold mb-6 '>Appointment</h2>
                   {
                       appointments.slice(0,3).map(appointment =>
                        <div>
                        <div className='flex inline-block mt-5'>
                         <img alt="doctor" class="w-12 h-12 mb-3 object-cover object-center rounded-full inline-block border-2" src="https://t4.ftcdn.net/jpg/00/58/33/17/240_F_58331714_RO7gYyfIE19CcD9MzJZxwEqqeetvtyhA.jpg"/> 
                         <p className='mt-2 ml-3'>Doctor: {appointment.doctor}</p>
                         </div>
                         <div className='flex content-center'>
                             <div className='flex-initial text-left'> <p className=''>Your Appointment Time </p>
                        <p className='ml-3'>{appointment.slot}</p>
                        <p className='ml-3'>{appointment.date}</p>
                        </div>

                         </div>
                       
                         <p className='mt-3 text-red-500'>Alart- You should arrive in Chamber 2 Hours Earlier of appointment time</p>
                        </div>
                        
                        )
                   }
                </div>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1  gap-3 px-2 py-2' >
                <div className='bg-Slate-300 shadow-lg h-72'>
                <div className='Chart-one'>
                <h1>Hello</h1>
                </div>
                <div className='bg-Slate-300 shadow-lg h-72'></div>
            </div>
                <div className='bg-Slate-300 shadow-lg h-72'>
                <div className='Chart-one'>
                <h1>Hello</h1>
                </div>
                <div className='bg-Slate-300 shadow-lg h-72'></div>
            </div>
                <div className='bg-Slate-300 shadow-lg h-72'>
                <div className='Chart-one'>
                <h1>Hello</h1>
                </div>
                <div className='bg-Slate-300 shadow-lg h-72'></div>
            </div>
                <div className='bg-Slate-300 shadow-lg h-72'>
                <div className='Chart-one'>
                <h1>Hello</h1>
                </div>
                <div className='bg-Slate-300 shadow-lg h-72'></div>
            </div>
              
      

           </div>
           </div>

        {/* Section-Two */}
               <div className=''>
            <div className='bg-Slate-100 min-h-[500px] mt-8 shadow-lg p-5 '>
           <div class="overflow-x-auto">
           <table class="table  w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                               
                                <th>Recent Medical Report</th>
                                <th>Date</th>
                                <th>Reports</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            reports.map(report => 
                                <tr>
                                <td>{report.reportName}</td>
                                <td>{report.date}</td>
                                <td className='text-primary'><Link to='prescription'>View Report</Link></td>
                            </tr>
                            )
                              
                        }
                  </tbody>
                    </table>
                </div>
           </div>
            </div>

      
           
           <div className='bg-Slate-100 min-h-[500px]'>
      
            {/* <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1  gap-3 px-2 py-2' >
                <div className='bg-Slate-300 shadow-lg h-72'>Hi joosh</div>
                <div className='bg-Slate-300 shadow-lg h-72'>Hello bosh</div>
            </div> */}
            <div className=''>
            <div className='bg-Slate-100 min-h-[500px] mt-8 shadow-lg p-5 '>
           <div class="overflow-x-auto">
                    <table class="table  w-full ">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                               
                                <th>Decreased Names</th>
                                <th>Common Decease</th>
                                <th>2010-2021</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            <tr>
                                <td>High Blood Pressure</td>
                                <td>Running</td>
                                <td className='text-primary'><Link to='prescription'>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Heart Problem</td>
                                <td>Running</td>
                                <td className='text-primary'><Link to='prescription'>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Cholesterols</td>
                                <td>Running</td>
                                <td className='text-primary'><Link to='prescription'>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Zoint Pain</td>
                                <td>Running</td>
                                <td className='text-primary'><Link to='prescription'>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Fever</td>
                                <td>Sometimes</td>
                                <td className='text-primary'><Link to='prescription'>Edit</Link></td>
                            </tr>
                       
                  </tbody>
                    </table>
                </div>
           </div>
            </div>
      
           </div>
           </div>

 
   
        </div>
      
    );
};

export default Patient;