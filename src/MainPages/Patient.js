import axios from 'axios';
import auth from '../firebase.init';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { toast, ToastContainer } from 'react-toastify';
import SimpleBar from 'simplebar-react';
import { signOut } from 'firebase/auth';
import { useNavigate, useParams } from 'react-router-dom';








const Patient = () => {
    const [user] = useAuthState(auth);
    const [reports, setReports] = useState([]);
    const [deceases, setDeceases] = useState([])
    const [problems, setProblem] = useState([])
    const [appointments, setAppointment] = useState([]);
    const [medicines, setMedicine] = useState([])
    var currentDate = new Date().toLocaleDateString();
    
    const params = useParams();
    const navigate = useNavigate()
    //Report PopUp
    const [popUpContents, setPopUpContent] = useState([]);
    const changeContent = (report) => {
        setPopUpContent([report])
    };

    //Prescription Popup
    const [prescriptionPopUps, setPrescriptionPopUps] = useState([]);
    const showPrescription = (medicine) => {
        setPrescriptionPopUps([medicine])
    };

    //update Decease Popup
    const [deceaseUpdate, setDeceaseUpdatePopUps] = useState([]);
    const update = (decease) => {
        setDeceaseUpdatePopUps([decease])
    };
    // Doctors

    //  //Reports
    // useEffect(() => {
    //   fetch('report.JSON')
    //   .then(res => res.json())
    //   .then(data => setReports(data));

    //  },[])
    //Prescription
    useEffect(() => {
        const getMedicine = async () => {
            const email = user.email;
            const url = `http://localhost:5000/prescriptionMedicine?email=${email}`;
            console.log(url);
            const { data } = await axios.get(url);
            setMedicine(data);
            console.log(data);
        }
        getMedicine();
    }, [user])


    //Reports
    // useEffect(() => {
    //     const getReports = async () => {
    //         const email = user.email;
    //         const url = `http://localhost:5000/userReport?email=${email}`;
    //         console.log(url);
    //         const { data } = await axios.get(url);
    //         setReports(data);
    //         console.log(data);
    //     }
    //     getReports();
    // }, [user])

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/userReport?email=${user.email}`, {

                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setReports(data);
                });


        }

    }, [user])


//Get internal Data
    useEffect(() => {
        fetch('/update.json')
         .then(res => res.json())
         .then(data => setDeceases(data));
        },[])

    //update Blood Pressure
    // useEffect(() => {
    //     const getBloodPressure = async () => {
    //         const email = user.email;
    //         const url = `http://localhost:5000/pressureData?email=${email}`;
    //         console.log(url);
    //         const { data } = await axios.get(url);
    //         setPressure(data);
    //         console.log(data);
    //     }
    //     getBloodPressure();
    // }, [user])

    //update Heart Data
    // useEffect(() => {
    //     const getBloodPressure = async () => {
    //         const email = user.email;
    //         const url = `http://localhost:5000/heartData?email=${email}`;
    //         console.log(url);
    //         const { data } = await axios.get(url);
    //         setProblem(data);
    //         console.log(data);
    //     }
    //     getBloodPressure();
    // }, [user])



    //Booked Appointment
    useEffect(() => {
        const getAppointment = async () => {
            const email = user.email;
            const url = `http://localhost:5000/appointment?email=${email}`;
            console.log(url);
            const { data } = await axios.get(url);
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

    //Handle the Blood Pressure update
    const handleDeceaseUpdate = event => {
        event.preventDefault()
        const update = event.target.update.value;
        const email = event.target.email.value;
        const date = event.target.date.value;


        const pressureData = {
            update,
            email,
            date
        }
        console.log(pressureData);

        fetch( ` http://localhost:5000/pressureData=${params}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(pressureData)

        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Updated Successfully set`)
                }
            })
    }




    //Handle the Heart problem update
    // const handleHeartUpdate = event => {
    //     event.preventDefault()

    //     const heartUpdate = event.target.heartUpdate.value;
    //     const email = event.target.email.value;
    //     const dates = event.target.dates.value;

    //     const heartProblem = {
    //         heartUpdate,
    //         email,
    //         dates

    //     }
    //     console.log(heartProblem);

    //     fetch('http://localhost:5000/heartData', {

    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(heartProblem)

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.success) {
    //                 toast(`Updated Successfully set`)
    //             }
    //         })
    // }
















    //Grap

    const [state, setState] = useState({
        series: [{

            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 200,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },

            yaxis: {
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                xaxis: {

                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                },
            },



            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },


    })






    return (

        <div className='grid lg:grid-cols-4  gap-4 px-8 md:grid-cols-2 sm:grid-cols-1'>

            <div className='lg:col-span-3   min-h-[700px] secondary-color'>
                <div className='flex justify-between px-5 py-5'>
                    <div><p className='text-white font-bold lg:text-base sm:text-sm'>Visited Doctors</p></div>
                    <div><p className='text-white font-bold sm:text-sm'>2021-2022</p></div>
                </div>
                <div>
                    <SimpleBar style={{ maxHeight: '600px' }}>
                        <table className=' table table-auto w-full text-left  whitespace-no-wrap  mb-5 text-white ' >
                            <thead className='pt-6 mb-5'  >
                                <tr className='secondary-color' >
                                    <th className=' text-left px-5 py-4 tableHead ' >Doctor Name</th>
                                    <th className='text-left  py-4 tableHead'>Chamber</th>
                                    <th className='text-left  py-4 tableHead'>Location</th>
                                    <th className='text-left  py-4 tableHead'>Prescription</th>
                                </tr>
                            </thead>
                            <tbody className='pt-12    py-5'>

                                {
                                    medicines.map(medicine =>

                                        <tr >
                                            <td className='text-sm border-y-gray-600 text-left secondary-color pl-5'>{medicine.doctorName}</td>
                                            <td className='text-sm border-y-gray-600 text-left secondary-color'>{medicine.chamber}</td>
                                            <td className='text-sm border-y-gray-600 text-left secondary-color'>{medicine.chamberAddress}</td>
                                            <td className='text-white border-y-gray-600 text-left cursor-pointer secondary-color-2 secondary-color' ><label for="prescription-modal" onClick={() => showPrescription(medicine)} >See Prescription</label></td>
                                        </tr>

                                    )}











                            </tbody>
                        </table>
                    </SimpleBar>
                    {/* Popup */}
                    <input type="checkbox" id="prescription-modal" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box lg:max-w-5xl sm:max-w-xs sm:modal-middle  ">
                            <label for="prescription-modal" class="btn btn-sm btn-circle absolute secondary-color-2 right-2 top-2">✕</label>
                            {
                                prescriptionPopUps.map(view =>
                                    <>
                                        <div className='bg-state-200 shadow-lg col-span-2 min-h-[700px] text-black'>
                                            <div className='flex justify-between bg-gray-50 pt-8 px-5 py-3'>
                                                <>


                                                    <div className='text-left w-30'>
                                                        <p>Doctor Profile</p>
                                                        <p>{view.doctorName}</p>
                                                        <p>{view.degree}</p>
                                                        <p>{view.expertise}</p>
                                                        <p>{view.chamber}</p>
                                                    </div>


                                                </>
                                                <>

                                                    <div className='text-left w-30'>
                                                        <p>Patient Profile</p>
                                                        <p>Name: {view.patient}</p>
                                                        <p>Age: {view.age}</p>
                                                        <p>Address: {view.address}</p>
                                                        <p>Patient Type: {view.patientType}</p>
                                                    </div>

                                                </>



                                            </div>
                                            <div className='grid grid-cols-1 p-5 min-h-[600px] '>

                                                <textarea className='p-5' type='text' name='prescription'>{view.prescriptionText}</textarea>





                                            </div>


                                        </div>
                                    </>

                                )
                            }




                        </div>
                    </div>
                </div>

            </div>
            <div className='lg:col-span-1 min-h-[250px]  sticky secondary-color text-white '>
                <div className=''>
                    <div className='bg-Slate-300  text-left px-4  py-8'>
                        <h2 className='text-2xl font-median-bold mb-6  '>Appointment</h2>
                        <SimpleBar style={{ maxHeight: '600px' }}>
                            {
                                appointments.map(appointment =>
                                    <div>

                                        <div className='flex inline-block mt-5'>
                                            <img alt="doctor" class="w-12 h-12 mb-3 object-cover object-center rounded-full inline-block border-2" src="https://t4.ftcdn.net/jpg/00/58/33/17/240_F_58331714_RO7gYyfIE19CcD9MzJZxwEqqeetvtyhA.jpg" />
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
                        </SimpleBar>
                    </div>
                </div>
            </div>
            <div className='lg:col-span-1 text-white  min-h-[200px] secondary-color'>
                <p className='text-left font-medium font-base pl-5 pt-5'>Blood Pressures</p>

                <div className='max-w-full'>
                    <ReactApexChart options={state.options} series={state.series} type="area" height={200} className="max-w-full" />
                </div>


            </div>
            <div className='lg:col-span-1 text-white  min-h-[200px] secondary-color'>
                <p className='text-left font-medium font-base pl-5 pt-5'>Heart Rate</p>
                <div >
                    <ReactApexChart options={state.options} series={state.series} type="area" height={200} className="max-w-full" />
                </div>
            </div>
            <div className='lg:col-span-1 text-white  min-h-[200px] secondary-color'>
                <p className='text-left font-medium font-base pl-5 pt-5'>Cholesterol</p>
                <div >
                    <ReactApexChart options={state.options} series={state.series} type="area" height={200} className="max-w-full" />
                </div>
            </div>
            <div className='lg:col-span-1 text-white  min-h-[200px] secondary-color'>
                <p className='text-left font-medium font-base pl-5 pt-5'>Glucose Room</p>
                <div >
                    <ReactApexChart options={state.options} series={state.series} type="area" height={200} className="max-w-full" />
                </div>
            </div>

            <div className='lg:col-span-2  min-h-[336px] secondary-color'>

                <div>
                    <SimpleBar style={{ maxHeight: '336px' }}>
                        <table className='table table-auto w-full text-left whitespace-no-wrap mb-5 text-white  ' >

                            <thead className='pt-6 mb-5'>

                                <tr>
                                    <th className=' text-left px-5 py-4 tableHead' >Recent Medical Report</th>
                                    <th className='text-left  py-4 tableHead'>Date</th>
                                    <th className='text-left  py-4 tableHead'>Report</th>
                                </tr>

                            </thead>


                            <tbody className='pt-12   py-5 '>

                                {
                                    reports.map(report =>

                                        <tr >
                                            <td className='text-sm border-y-gray-600 text-left pl-5 secondary-color'>{report.reportName}</td>
                                            <td className='text-sm border-y-gray-600 text-left secondary-color'>{report.date}</td>
                                            <td className='text-white border-y-gray-600 text-left cursor-pointer secondary-color-2 secondary-color '><label onClick={() => changeContent(report)} for="report-modal" >View Report</label></td>
                                        </tr>

                                    )}





                            </tbody>


                        </table>
                    </SimpleBar>

                    {/* Popup */}
                    <input type="checkbox" id="report-modal" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box lg:max-w-5xl sm:max-w-xs sm:modal-middle  ">
                            <label for="report-modal" class="btn btn-sm btn-circle absolute secondary-color-2 right-2 top-2">✕</label>
                            {
                                popUpContents.map(pop =>
                                    <>
                                        <h1 className='text-black text-2xl mb-3'>{pop.reportName}</h1>
                                        <img className='w-full h-full' src={pop.img} alt="No Image" />
                                    </>

                                )
                            }




                        </div>
                    </div>
                </div>

            </div>
            <div className='lg:col-span-2  min-h-[336px] secondary-color '>
            <SimpleBar style={{ maxHeight: '336px' }}>
                <table className='table table-auto w-full text-left whitespace-no-wrap mb-5 text-white ' >
                    <thead className='pt-6 mb-5'  >
                        <tr className='' >
                            <th className=' text-left px-5 py-4 tableHead ' >Decreased Names</th>
                            <th className='text-left  py-4 tableHead '>Common Decease</th>
                            <th className='text-left  py-4 tableHead '>2010-2021</th>
                            <th className='text-left  py-4 tableHead '>Update</th>
                        </tr>
                    </thead>
                    <tbody className='pt-12 border border-blue-900 py-5 px-5'>
                      
                           
                           
                                {
                                    deceases.map(decease =>
                                      
                                        <tr>
                                        <td className=' border-y-gray-600  secondary-color pl-5'>{decease.name}</td>
                                        <td className=' border-y-gray-600 secondary-color'><p>{decease.update}</p></td>
                                        <td className='border-y-gray-600 secondary-color'><p>{decease.date}</p></td>
                                        <td className='border-y-gray-600 secondary-color'><label for="pressure-modal" onClick={() => update(decease)} class="secondary-color-2 cursor-pointer">Update</label></td>

                                        </tr>
                                
                             
                                     
                                    )
                                }

                           
                        
                    </tbody>
                </table>
                </SimpleBar>

                {/* PopUp */}
                <input type="checkbox" id="pressure-modal" class="modal-toggle" />
                                <div class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box secondary-color">
                                        <label for="pressure-modal" class="btn btn-sm secondary-color-2 absolute right-2 top-2">✕</label>
                                        <p className='text-white text-2xl text-left'> Decease Condition Update</p>
                                        {
                                            deceaseUpdate.map( update =>
                                                
                                                <form onSubmit={handleDeceaseUpdate}>
                                                  
                                                <input type="text" name='name' value={update.name} class="mb-2 mt-5 text-normal secondary-color text-white input input-bordered border-gray-400 w-full  focus:ring-2 focus:ring-cyan-400 " required />
                                                <input type="text" name='update' placeholder='Condition of Decease' class="mb-2 mt-5 secondary-color text-white border-gray-400 input input-bordered w-full focus:ring-2 focus:ring-cyan-400 " required />
                                                <input type="hidden" name='email' value={user?.email} class=" mb-2 input input-bordered w-full max-w-xs" />
                                                <input type="hidden" name='date' value={currentDate} class=" mb-2 input input-bordered w-full max-w-xs" />
    
                                                <div class="modal-action justify-start" >
                                                    <input for="pressure-modal" type="submit" value="Update" class="btn secondary-bg  mb-2   cursor-pointer " />
    
                                                </div>
                                            </form>



                                            )}
                                   

                                    </div>
                                </div>
            </div>
            <ToastContainer />

        </div>








        // <div className='mt-12'>
        //    <div className=' lg:w-4/5 sm:max-w-xs gap-5 px-6'>
        //    <div className='bg-Slate-100 min-h-[500px]'>
        //    <div class="overflow-x-auto">
        //     <table class="table  w-full">

        //         <thead>
        //             <tr>
        //                 <th>Doctor Name</th>
        //                 <th>Chamber</th>
        //                 <th>Location</th>
        //                 <th>Prescription</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //         {
        //             medicines.map(medicine => 
        //                 <tr>
        //                 <td>{medicine.doctorName}</td>
        //                 <td>{medicine.chamber}</td>
        //                 <td>{medicine.chamberAddress}</td>
        //                 <td className='text-primary cursor-pointer ' onClick={() => navigate('/prescription')}> View</td>
        //             </tr>
        //             )
        //             }
        //   </tbody>
        //     </table>
        //         </div>
        //    </div>
        // <div className=''>
        //     <div className='bg-Slate-100 min-h-[500px] mt-8 shadow-lg p-5 '>
        //    <div class="overflow-x-auto">
        //    <table class="table  w-full">
        //                 <thead>
        //                     <tr>
        //                         <th>Recent Medical Report</th>
        //                         <th>Date</th>
        //                         <th>Reports</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                 {
        //                     reports.map(report => 
        //                         <tr>
        //                         <td>{report.reportName}</td>
        //                         <td>{report.date}</td>
        //                         <td className='text-primary'><Link to='prescription'>View Report</Link></td>
        //                     </tr>
        //                     )

        //                 }
        //           </tbody>
        //             </table>
        //         </div>
        //    </div>
        // </div>



        //    <div className='bg-Slate-100 min-h-[500px]'>
        //     <div className=''>
        //     <div className='bg-Slate-100 min-h-[500px] mt-8 shadow-lg p-5 '>
        //    <div class="overflow-x-auto">
        //             <table class="table  w-full ">

        //                 <thead>
        //                     <tr>

        //                         <th>Decreased Names</th>
        //                         <th>Common Decease</th>
        //                         <th>2010-2021</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>

        //                     <tr>
        //                         <td>High Blood Pressure</td>
        //                         <td>Running</td>
        //                         <td className='text-primary'><Link to='prescription'>Edit</Link></td>
        //                     </tr>
        //                     <tr>
        //                         <td>Heart Problem</td>
        //                         <td>Running</td>
        //                         <td className='text-primary'><Link to='prescription'>Edit</Link></td>
        //                     </tr>
        //                     <tr>
        //                         <td>Cholesterols</td>
        //                         <td>Running</td>
        //                         <td className='text-primary'><Link to='prescription'>Edit</Link></td>
        //                     </tr>
        //                     <tr>
        //                         <td>Zoint Pain</td>
        //                         <td>Running</td>
        //                         <td className='text-primary'><Link to='prescription'>Edit</Link></td>
        //                     </tr>
        //                     <tr>
        //                         <td>Fever</td>
        //                         <td>Sometimes</td>
        //                         <td className='text-primary'><Link to='prescription'>Edit</Link></td>
        //                     </tr>

        //           </tbody>
        //             </table>
        //         </div>
        //    </div>
        //     </div>

        //    </div>
        //    </div>



        // </div>

    );
};

export default Patient;