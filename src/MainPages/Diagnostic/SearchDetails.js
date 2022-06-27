import React from 'react';

const SearchDetails = ({patients, setReports}) => {
    return (
        <div>
                {
           patients.slice(0,5).map(patient => (
            <div className='lg:flex lg:justify-between sm:items-center items-left bg-white shadow-lg mb-5 p-8'> 
            
            <div className=' mb-5 text-left '>
            <h3 className='text-lg font-medium' key={patient.id}> {patient.patient} </h3>
            <p className='text-sm '> {patient.patientEmail} </p>
            </div>
            <label
            for="delivery-modal"   onClick={() => setReports(patient)} class="btn modal-button">Delivery Report</label>
            </div>

           ))
        }

        {/* <div>    disabled = {user.slots.length === 0}  onClick={() => setAppointment(user)}  </div> */}
        </div>
    );
};

export default SearchDetails;