
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const BookingAppointment = ({ appointment }) => {
    const { _id,doctorName,email, degree, expertise, chamber, visitingHour, closed, slots } = appointment;
    
    const [user, loading, error] = useAuthState (auth);

var showDate = new Date();
var displayTodaysDate = showDate.getDate()+'/'+(showDate.getMonth()+1)+'/'+showDate.getFullYear();


  const handleBooking = event => {
      event.preventDefault()
      const slot = event.target.slot.value;
      const phoneNumber = event.target.phoneNumber.value;
      const age = event.target.age.value;
      const address = event.target.address.value;
      const date = event.target.date.value;
    
    
      

       const booking = {
        appointmentId: _id,
        doctor: doctorName,
        doctorEmail: email,
        chamber: chamber,
        slot,
        date,
        age,
        address,
        phoneNumber,
        patient: user.displayName,
        patientEmail: user.email
    }

    console.log(booking);

fetch('https://dark-pink-tortoise-slip.cyclic.app/booking', {

method: 'POST',
headers: {
    'content-type': 'application/json'
},
body: JSON.stringify(booking)

})
.then(res => res.json())
.then(data => {
    if(data.success){
        toast(`Appointment Successfully set,${displayTodaysDate} at ${slot}`)
    }
   else {
    toast.error(`You already have an Appointment on,${data.booking?.date} at  ${data.booking?.slot}`)
   }
})

}







    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box w-full max-w-xsnpm ">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-3xl font-medium'>Booking Appointment</h1>
                    <h3 class="font-bold text-lg mt-8">Doctor Name{doctorName}</h3>
                    <p>{degree}</p>
                    <p>{expertise}</p>
                    <p className='mt-6'>{chamber}</p>
                    <p>{visitingHour}</p>
                    <p>{closed}</p>
                    
                    <form className='mt-5 ' onSubmit={handleBooking}>
                      
                        <input type="text" name='name' disabled value={user?.displayName} class="mb-2 input input-bordered w-full max-w-xs " />
                        <input type="text" name='email' value={user?.email} class=" mb-2 input input-bordered w-full max-w-xs" />
                        <input type="text" name='doctorName' placeholder={doctorName} class="mb-2 input input-bordered w-full max-w-xs " />
                        <input type="email" name='doctorEmail' placeholder={email} class="mb-2 input input-bordered w-full max-w-xs " />
                        <input  type="text" name='phoneNumber' placeholder="Phone Number" class=" mb-2 input input-bordered w-full max-w-xs" />
                        <input  type="text" name='chamber' placeholder={chamber} class=" mb-2 input input-bordered w-full max-w-xs" />
                        <input  type="text" name='age' placeholder='Age'   class=" mb-2 input input-bordered w-full max-w-xs" />
                        <input  type="text" name='address' placeholder='address'   class=" mb-2 input input-bordered w-full max-w-xs" />
                        <input type="text"   name='serial' placeholder={slots.length} class=" mb-2 input input-bordered w-full max-w-xs" />
                        <input type="text"   name='date' value={displayTodaysDate} class=" mb-2 input input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs mb-2">
                            {
                                slots.map( (slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="Submit" value="submit" placeholder="Book Appointment" class="btn btn-cyan-500 mb-2  w-full max-w-xs" />
                    </form>
                </div>
            </div>
            <ToastContainer/> 
        </div>
    );
};

export default BookingAppointment;