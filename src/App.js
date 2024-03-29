import { Route, Routes} from 'react-router-dom';
import './App.css';
import Diagnostic from './MainPages/Diagnostic/Diagnostic';
import Doctor from './MainPages/Doctor/Doctor';
import DiagnosticSignUp from './MainPages/LogIn/DiagnosticSignUp'
import DoctorSignUp from './MainPages/LogIn/DoctorSignUp';
import LogIn from './MainPages/LogIn/LogIn';
import PatientLog from './MainPages/LogIn/PatientLog';
import PatientSignUp from './MainPages/LogIn/PatientSignUp';
import Prescription from './MainPages/PrescriptionPage/Prescription';
import Patient from './MainPages/Patient';
// import SearchBar from './MainPages/SearchBar/SearchBar';


import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; //Must Import Css for toast
import DetailsSearch from './MainPages/SearchBar/DetailsSearch';

import 'simplebar-react/dist/simplebar.min.css';
import Dashboard from './MainPages/Dashboard/Dashboard';
import Home from './MainPages/Home/Home';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import DoctorLogIn from './MainPages/LogIn/DoctorLogIn';
import DiagnosticLogIn from './MainPages/LogIn/DiagnosticLogIn';
import Navbar from './Shared/Navbar';
import RequiredAuth from './Shared/RequiredAuth';
import Profile from './Shared/Profile';
import Doctors from './MainPages/Dashboard/Doctors';
import DiagnosticCenter from './MainPages/Dashboard/DiagnosticCenter';
import Users from './MainPages/Dashboard/Users';
import RequiredAdmin from './Hook/RequiredAdmin';
import LandingPage from './Landing page/LandingPage';
;

function App() {
  const [user, loading, error] = useAuthState (auth);

  return (
    <div className="App background-Color">
      
  
   {
    user && <Navbar/>
   }
  
      <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='landingPage' element={<LandingPage/>}></Route>
      <Route path='login' element={<LogIn></LogIn>}></Route>
        <Route path='doctorLogIn' element={ <DoctorLogIn></DoctorLogIn> }></Route>
        <Route path='diagnosticLogIn' element={ <DiagnosticLogIn></DiagnosticLogIn> }></Route>
        <Route path='patientLog' element={<PatientLog></PatientLog>}></Route>
        <Route path='doctorSignUp' element={<DoctorSignUp></DoctorSignUp>}></Route>
        <Route path='diagnosticSignUp' element={<DiagnosticSignUp></DiagnosticSignUp>}></Route>
        <Route path='PatientSignUp' element={<PatientSignUp></PatientSignUp>}></Route>
        <Route path='detailSearch' element={  <RequiredAuth >  <DetailsSearch></DetailsSearch> </RequiredAuth>  } ></Route>
        <Route path='patient' element={  <RequiredAuth><Patient/></RequiredAuth>  }></Route>
        <Route path='doctor' element={<RequiredAuth> <Doctor/> </RequiredAuth> }></Route>
        <Route path='prescription' element={ <RequiredAuth><Prescription></Prescription></RequiredAuth> }></Route>
        <Route path='patient' element={ <RequiredAuth>  <Patient></Patient></RequiredAuth> }></Route>
        <Route path='diagnostic' element={ <RequiredAuth> <Diagnostic/> </RequiredAuth> }></Route>
        <Route path='profile' element={ <RequiredAuth> <Profile></Profile> </RequiredAuth> }></Route>
        {/* Nasted Route */}
        <Route path='dashboard' element={ <RequiredAuth> <Dashboard/> </RequiredAuth> }>
        <Route index element={<RequiredAdmin> <Doctors/> </RequiredAdmin>}></Route>
        <Route path='users' element={ <RequiredAdmin> <Users/> </RequiredAdmin>  }></Route>
        <Route path='diagnosticCenter' element={<RequiredAdmin> <DiagnosticCenter/> </RequiredAdmin>}></Route>
        </Route>
      

        
      </Routes>
   
      <ToastContainer/>
   </div>
  );
}

export default App;
