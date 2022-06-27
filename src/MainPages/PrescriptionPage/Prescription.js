import React from 'react';

const Prescription = () => {
    const handleBooking = event => {
        event.preventDefault()
        const prescription = event.target.prescription.value;
        const textBox = event.target.textBox.value;
        const patientProfile = event.target.patientProfile.value;
        const patientName = event.target.patientName.value;
        const age = event.target.age.value;
        const Address = event.target.Address.value;
        const visit = event.target.visit.value;
        //
        const doctorProfile = event.target.doctorProfile.value;
        const doctorName = event.target.doctorName.value;
        const degree = event.target.degree.value;
        const specialist = event.target.specialist.value;
        const chamber = event.target.chamber.value;
        const closed = event.target.closed.value;

     
         const booking = {
          prescription,
          textBox,
          patientProfile,
          patientName,
          age,
          Address,
          visit,
          doctorProfile,
          doctorName,
          degree,
          specialist,
          chamber,
          closed

      }
   console.log(booking);
    }
//Patient Profile
    const patientName = 'Abidur Rahman';
    const patientProfile= 'Patient Profile';
    const age = '30 years old';
    const address = 'sherPur';
    const lastVisit = '2 month Ago'

//Doctor Profile
   
   const doctorProfile = 'Doctor Profile'
   const doctorName = 'md.Wahidur Rahman'
   const degree =  "MBBS (Dhaka),FCPS (Med), <br/> FACP(USA, FRCP, Edin)"
   const specialist = "Medicine Specialist"
   const chamber = "Popular MedicalCenter, Sylhet"
   const closed = "(Friday and Govt holiday Closed)"

    
  
    return (
        <div>
            <form onSubmit={handleBooking}>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-5 mt-8'>
                <div className='bg-state-200 shadow-lg min-h-[700px] p-8'>
                    {/* <div className='text-left'>
                        <h2 className='text-2xl mb-3' type='text' name='patientProfile'>Patient Profile</h2>
                        <h4 className='font-median'>Md.Abidur Rahman</h4>
                        <p>Age: 30 years Old</p>
                        <p>Address: Sherpur</p>
                        <p>Patient Type: Old</p>
                        <p>Last Visit: 20/05/2022</p>
                    </div> */}
                    <div className='min-h-[200px] shadow-lg mt-8 mb-5 bg-state-200 p-3'>
                        <h3>Blood Pressure</h3>
                    </div>
                    <div className='min-h-[200px] shadow-lg bg-state-200 p-3'>
                        <h3>Glucose Room</h3>
                    </div>
                </div>
 
           
                <div className='bg-state-200 shadow-lg col-span-2 min-h-[700px]'>
                    <div className='flex justify-between bg-gray-50 pt-8 px-5 py-3'>
                        <div className='text-left w-30'>
                        <input type="text" name='patientProfile' className='text-xl mb-2'  value={patientProfile} disabled /> <br/>
                           <span>Patient Name: <input type="text" name='patientName'  value={patientName} disabled /></span> <br/>
                          <span>Age: <input type="text" name='age' placeholder='' value={age} disabled /></span>  <br/>
                           <span>Address: <input type="text" name='Address'  value={address} disabled /></span> <br/>
                           <span>Last Visit: <input type="text" name='visit' value={lastVisit} disabled /></span> 
                            
                        </div>
                        <div className='text-left'>
                        <input type="text" name='doctorProfile' className='text-xl mb-2'  value={doctorProfile} disabled /> <br/>
                           <span>Doctor Name: <input type="text" name='doctorName'  value={doctorName} disabled /></span> <br/>
                          <span>Degree: <input type="text" name='degree'  value={degree} disabled /></span>  <br/>
                           <span>Specialist: <input type="text" name='specialist'  value={specialist} disabled /></span> <br/>
                           <span>Chamber: <input type="text" name='chamber' value={chamber} disabled /></span> <br/>
                           <span>Closed: <input type="text" name='closed' value={closed} disabled /></span> 
                        </div>
                    </div>
                    <div className='grid grid-cols-1 p-5 min-h-[600px] '>
                    <textarea className='p-5' type='text' name='prescription'>Write prescription</textarea>
                    <button className='btn mt-5 btn-primary'>Saved Prescription</button>


                    </div>
                   
                   
                </div>


                <div className='bg-state-200 shadow-lg min-h-[auto] p-5'>
                    <div className='grid grid-cols-1'>
                        <button className='btn btn-primary'>Print Prescription</button>
                    </div>
                    <div className='grid grid-cols-1 mt-5 shadow-lg'>
                        <textarea className='min-h-[200px] min-w-[200px] p-3' name='textBox' typeof='text' placeholder='Write Note' ></textarea>
                      
                    </div>
                    <div className='min-h-[200px] shadow-lg mt-8 mb-5 bg-state-200 p-3'>
                        <h3>Blood Pressure</h3>
                    </div>
                </div>
              
            </div>
            </form>
        </div>
    );
};

export default Prescription;