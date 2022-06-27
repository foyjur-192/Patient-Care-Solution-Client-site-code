import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PrescriptionDetails = ({prescriptions}) => {
    const [user, loading, error] = useAuthState(auth);
    const{patient} = prescriptions;
    const [details, setDetails] = useState({});
 
   

    useEffect(() => {
        const getDoctorDetails = async () => {
            const email = user.email;
            const url = `http://localhost:5000/doctorDetails?email=${email}`;
            const { data } = await axios.get(url);
            setDetails(data);
            
        }
        getDoctorDetails();
    }, [user])




    return (
        <div>
            <input type="checkbox" id="prescription-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="prescription-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                   <div className="flex justify-between" >
                  <div>
                  <p>{details.length}</p>
                  </div>
                  <div>
                    <h2>{patient}</h2>
                  </div>


                   </div>
                </div>
            </div>
        </div>
    );
};

export default PrescriptionDetails;