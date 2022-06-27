import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Report = ({ reports }) => {
    const{patient,patientEmail,doctorEmail} = reports;
    const [user, loading, error] = useAuthState (auth);
   
    var displayTodaysDate = new Date ().toLocaleDateString();

    const currentTime = new Date ().toLocaleTimeString();
   
//handle the report
const handleBooking = event => {
    event.preventDefault()
    const reportName = event.target.reportName.value;
    const date = event.target.date.value;
    const time = event.target.time.value;
    const file = event.target.file.value;
    const doctorEmail = event.target.doctorEmail.value;
   const diagnosticCenter = event.target.diagnosticCenter.value;


const report = {
    patientName: patient,
    patientEmail: patientEmail,
    diagnosticCenter: user,
    doctorEmail,
    reportName,
    date,
    time,
    file,
    diagnosticCenter
}
console.log(report);
// console.log(booking);
fetch('http://localhost:5000/report', {

method: 'POST',
headers: {
    'content-type': 'application/json'
},
body: JSON.stringify(report)

})
.then(res => res.json())
.then(data => {
    if(data.success){
        toast (`Report Delivered Successfully set,${displayTodaysDate}`)
    }
   else {
    toast.error(`You already have delivered the report on,${data.report?.date} at  ${data.report}`)
   }
})




}







    return (
        <div>
            <input type="checkbox" id="delivery-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="delivery-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                   <h2 className='text-2xl mb-5'>Delivery the Report</h2>
                    <form onSubmit={handleBooking}>
                        <input type="text" name='patientName' value={patient} class="mb-2 input input-bordered w-full max-w-xs " />
                        <input type="hidden" name='patientEmail' value={patientEmail} class="mb-2 input input-bordered w-full max-w-xs " />
                        <input type="hidden" name='doctorEmail' value={doctorEmail} class="mb-2 input input-bordered w-full max-w-xs " />
                        <input type="hidden" name='diagnosticCenter' value={user?.email} class="mb-2 input input-bordered w-full max-w-xs " />
                        <input type="text" name='reportName' placeholder='Report Type'  class=" mb-2 input input-bordered w-full max-w-xs" />
                        <input type="text" name='date' value={displayTodaysDate}  class=" mb-2 input input-bordered w-full max-w-xs" />
                        <input type="hidden" name='time' value={currentTime}  class=" mb-2 input input-bordered w-full max-w-xs" />
                      
                        <input type="text" name='file' placeholder='Choose file' class="mb-2 input input-bordered w-full max-w-xs " />
                        <input type="Submit" value="Delivery Now" placeholder="Delivery" class="btn btn-cyan-500 mb-2  w-full max-w-xs" />
                    </form>
                </div>
            </div>
            <ToastContainer/> 
        </div>
    );
};

export default Report;