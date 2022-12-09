import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const PrescriptionDetails = ({prescriptions}) => {
    const [user, loading, error] = useAuthState(auth);
    const{patient,age, address,patientType,patientEmail,doctorEmail} = prescriptions;
    const [details, setDetails] = useState([]);
    var displayTodaysDate = new Date ().toLocaleDateString();
   
   //Handle 
   const handlePrescription = event => {
    event.preventDefault()

    const prescriptionText = event.target.prescriptionText.value;
    const patient = event.target.patient.value;
    const age = event.target.age.value;
    const address = event.target.address.value;
    const patientType = event.target.patientType.value;
    const doctorName = event.target.doctorName.value;
    const degree = event.target.degree.value;
    const expertise = event.target.expertise.value;
    const chamber = event.target.chamber.value;
    const date = event.target.date.value;
    const patientEmail = event.target.patientEmail.value;
    const doctorEmail = event.target.doctorEmail.value;


    const prescriptionData = {
       date,
       prescriptionText,
       patient,
       age,
       address,
       patientType,
       doctorName,
       degree,
       expertise,
       chamber,
       patientEmail,
       doctorEmail

    }
    console.log(prescriptionData);

    fetch('https://patient-care-solution-server-production.up.railway.app/prescriptionData', {

        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(prescriptionData)
        
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast (`Prescription Saved Successfully set,${date}`)
            }
           else {
            toast.error(`You already have Saved the Prescription on,${date}`)
           }
        })











   }























    useEffect(() => {
        const getDoctorDetails = async () => {
            const email = user.email;
            const url = `https://patient-care-solution-server-production.up.railway.app/doctorDetails?email=${email}`;
            const { data } = await axios.get(url);
            setDetails(data);
        }
        getDoctorDetails();
    }, [user])




    return (
        <div>
            <input   type="checkbox" id="prescription-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box lg:max-w-5xl sm:max-w-xs sm:modal-middle">
                    <label for="prescription-modal" class="btn btn-sm btn-circle absolute secondary-color-2 right-2 top-2">✕</label>
                   <form onSubmit={handlePrescription}>
                   <div className="flex justify-between mt-8" > 
                  <div>
                    {
                        details.map(detail =>
                          <div className='text-left'>
                            <p>{detail.doctorName}</p>
                            <p className='text-xs'>{detail.degree}</p>
                            <p  className='text-xs'>{detail.expertise}</p>
                            <p  className='text-xs'>{detail.chamber}</p>
                            <input type="hidden" name='doctorName' value={detail.doctorName} class="mb-2 input input-bordered w-full max-w-xs " />
                            <input type="hidden" name='degree' value={detail.degree} class="mb-2 input input-bordered w-full max-w-xs " />
                            <input type="hidden" name='expertise' value={detail.expertise} class="mb-2 input input-bordered w-full max-w-xs " />
                            <input type="hidden" name='chamber' value={detail.chamber} class="mb-2 input input-bordered w-full max-w-xs " />
                            
                            </div>  
                     )
                    }
                  </div>
                  <div className='text-left'>
                    <p>{patient}</p>
                    <p className='text-xs'>Age: {age}</p>
                    <p className='text-xs'>Address: {address}</p>
                    <p className='text-xs'>PatientType :{patientType}</p>
                    <p className='font-medium text-xs'>Blood Pressure:</p>
                    <p className='text-xs'>Date :{displayTodaysDate}</p>

                    <input type="hidden" name='patient' value={patient} class="mb-2 input input-bordered w-full max-w-xs " />
                    <input type="hidden" name='age' value={age} class="mb-2 input input-bordered w-full max-w-xs " />
                    <input type="hidden" name='patientEmail' value={patientEmail} class="mb-2 input input-bordered w-full max-w-xs " />
                    <input type="hidden" name='doctorEmail' value={doctorEmail} class="mb-2 input input-bordered w-full max-w-xs " />
                    <input type="hidden" name='address' value={address} class="mb-2 input input-bordered w-full max-w-xs " />
                    <input type="hidden" name='patientType' value={patientType} class="mb-2 input input-bordered w-full max-w-xs " />
                    <input type="hidden" name='date' value={displayTodaysDate} class="mb-2 input input-bordered w-full max-w-xs " />
                           
                  </div>
                   </div>
                   <div className='lg:w-full sm-w-full mt-5  min-h-[400px]'>
                   <textarea className='lg:w-full sm-w-full min-h-[400px] p-5 border' type='text' name='prescriptionText'>Write prescription</textarea>
                   <input type="Submit" value="Saved" placeholder="Saved" class="btn btn-cyan-500 mb-2 right  " />
                   <input type="Submit" value="Print" placeholder="Saved" class="btn btn-cyan-500 mb-2 ml-3 right  " />
                   </div>
                   </form>
                </div>
            </div>
            <ToastContainer/> 
        </div>
    );
};

export default PrescriptionDetails;