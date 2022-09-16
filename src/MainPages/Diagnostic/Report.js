import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Report = ({ reports }) => {
    const{patient,patientEmail,doctorEmail} = reports;
    const [user, loading, error,] = useAuthState (auth);
   
    var displayTodaysDate = new Date ().toLocaleDateString();

    const currentTime = new Date ().toLocaleTimeString();
    const { register, formState: { errors }, handleSubmit, reset } = useForm ();
   

    //imgbb key
    const imageStorageKey = '7af78fb7114f6735ceb0c4994b221e58';


    const onSubmit = async data => {
        const image = data.image[0]
       
        const formData = new FormData();
        formData.append('image', image);
       const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then (result => {
        if(result.success){
                   const img = result.data.url;
                   const report = {
                    patientName: data.name,
                    patientEmail: data.patient,
                    doctorEmail: data.doctorEmail,
                    diagnosticCenter: data.diagnosticCenter,
                    date: data.date,
                    time: data.time,
                    reportName: data.report,
                    img: img
                   }
                   //Send to your Database
                   fetch('http://localhost:5000/report', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },

                   body: JSON.stringify(report)
                   })
                   .then(res => res.json())
                   .then(inserted => {
                    if(inserted.success){
                        toast(`Report Delivered Successfully set,${data.time}`)
                        reset();
                    }
                    else{
                        toast.error(`You already have delivered the report on,${data.time} `)
                    }
                   })
               

                }

    })
    }




















//handle the report
// const handleBooking = event => {
//     event.preventDefault()
//     const reportName = event.target.reportName.value;
//     const date = event.target.date.value;
//     const time = event.target.time.value;
//     const file = event.target.file.value;
//     const doctorEmail = event.target.doctorEmail.value;
//    const diagnosticCenter = event.target.diagnosticCenter.value;


// const report = {
//     patientName: patient,
//     patientEmail: patientEmail,
//     diagnosticCenter: user,
//     doctorEmail,
//     reportName,
//     date,
//     time,
//     file,
//     diagnosticCenter
// }
// console.log(report);
// // console.log(booking);
// fetch('http://localhost:5000/report', {

// method: 'POST',
// headers: {
//     'content-type': 'application/json'
// },
// body: JSON.stringify(report)

// })
// .then(res => res.json())
// .then(data => {
//     if(data.success){
//         // eslint-disable-next-line no-undef
//         toast (`Report Delivered Successfully set,${date}`)
//     }
//    else {
//     // eslint-disable-next-line no-undef
//     toast.error(`You already have delivered the report on,${date} `)
//    }
// })




// }







    return (
        <div>
            <input type="checkbox" id="delivery-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="delivery-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                   <h2 className='text-2xl mb-5'>Delivery the Report</h2>
                   <form onSubmit={handleSubmit(onSubmit)}>
                        <div class=" bg-state-200 shadow-lg p-8 ">
                           
                            <div class="flex flex-wrap -m-2 ">

                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        
                                        <input 
                                         {...register("name", {

                                            required: {
                                                value: true,
                                                message: 'Name is required'

                                            }

                                        })}
                                        type="text" value={patient} name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                     <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.fullName?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.fullName.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>
                                <div class=" w-full text-left">
                                    <div class="relative">
                                       
                                        <input
                                            {...register("patient", {

                                                // required: {
                                                //     value: true,
                                                //     message: 'Email is required'

                                                // },

                                                // pattern: {
                                                //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                //     message: 'provide a valid Email'
                                                // }
                                            })}
                                            type="hidden" value={patientEmail} name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                        </label>
                                    </div>
                                </div>
                                <div class=" w-full text-left">
                                    <div class="relative">
                                     
                                        <input
                                            {...register("doctorEmail", {

                                                // required: {
                                                //     value: true,
                                                //     message: 'Email is required'

                                                // },

                                                // pattern: {
                                                //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                //     message: 'provide a valid Email'
                                                // }
                                            })}
                                            type="hidden" value={doctorEmail} name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                        </label>
                                    </div>
                                </div>
                                <div class=" w-full text-left">
                                    <div class="relative">
                                     
                                        <input
                                            {...register("diagnosticCenter", {

                                                // required: {
                                                //     value: true,
                                                //     message: 'Email is required'

                                                // },

                                                // pattern: {
                                                //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                //     message: 'provide a valid Email'
                                                // }
                                            })}
                                            type="hidden" value={user?.email} name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                        </label>
                                    </div>
                                </div>

                              
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <input 
                                         {...register("report", {

                                            required: {
                                                value: true,
                                                message: 'Report type is required'

                                            }

                                        })}
                                        
                                        
                                        type="text" placeholder='Report Type' name="report" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <label for="report" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.report?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.report.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>

                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <input 
                                         {...register("date", {

                                            required: {
                                                value: true,
                                                message: 'date is required'

                                            }

                                        })}
                                        
                                        
                                        type="text" value={displayTodaysDate} name="age" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <label for="age" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.age?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.age.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>

                                <div class=" w-full text-left">
                                    <div class="relative">
                                        <input 
                                         {...register("time", {

                                            required: {
                                                value: true,
                                                message: 'Time is required'

                                            }

                                        })}
                                        
                                        
                                        type="hidden" value={currentTime}  name="currentTime" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <label for="age" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.age?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.age.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>



                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                      
                                        <input 
                                         {...register("image", {

                                            required: {
                                                value: true,
                                                message: 'image is required'

                                            }

                                        })}
                                        
                                        
                                        type="file" name="image" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                         <label for="age" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.image?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.image.message}</span>}
                                           
                                        </label>
                                    
                                    </div>
                                </div>
                                <div class="p-2 w-full ">
                                    <button className='btn secondary-bg border-none lg:w-full md:w-full sm:w-full mt-4'>Submit</button>
                                </div>
                                {/* </form> */}
                            </div>
                        
                        </div>
                    </form>
                    {/* <form onSubmit={handleBooking}>
                        <input type="text" name='patientName' value={patient} class="mb-2 input input-bordered w-full max-w-xs " />
                        <input type="hidden" name='patientEmail' value={patientEmail} class="mb-2 input input-bordered w-full max-w-xs " />
                        <input type="hidden" name='doctorEmail' value={doctorEmail} class="mb-2 input input-bordered w-full max-w-xs " />
                        <input type="hidden" name='diagnosticCenter' value={user?.email} class="mb-2 input input-bordered w-full max-w-xs " />
                        <input type="text" name='reportName' placeholder='Report Type'  class=" mb-2 input input-bordered w-full max-w-xs" />
                        <input type="text" name='date' value={displayTodaysDate}  class=" mb-2 input input-bordered w-full max-w-xs" />
                        <input type="hidden" name='time' value={currentTime}  class=" mb-2 input input-bordered w-full max-w-xs" />
                    
                  
                        <input type="Submit" value="Delivery Now" placeholder="Delivery"class="btn btn-cyan-500 mb-2  w-full max-w-xs" />
                    </form> */}
                </div>
            </div>
            <ToastContainer/> 
        </div>
    );
};

export default Report;