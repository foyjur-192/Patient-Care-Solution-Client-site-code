import { Route, Routes } from 'react-router-dom';
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
import Navbar from './Shared/Navbar';
import RequiredAuth from './Shared/RequiredAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; //Must Import Css for toast
import DetailsSearch from './MainPages/SearchBar/DetailsSearch';
import Profile from './Shared/Profile';
import 'simplebar-react/dist/simplebar.min.css';


function App() {
  //   const [data, setData] = useState();

  //   useEffect(() => {
  //     fetch('visitDoctor.JSON')
  //         .then(res => res.json())
  //         .then(data => setData(data));


  // }, [])



  return (
    <div className="App background-Color">
      <Navbar />
      <Routes>
   
         <Route path='/detailSearch' element={  <RequiredAuth> <DetailsSearch></DetailsSearch> </RequiredAuth>  }></Route>
        <Route path='/patient' element={  <RequiredAuth> <Patient></Patient> </RequiredAuth>  }></Route>
        <Route path='/doctor' element={ <RequiredAuth><Doctor></Doctor></RequiredAuth>  }></Route>
        <Route path='/prescription' element={ <RequiredAuth><Prescription></Prescription></RequiredAuth> }></Route>
        <Route path='/patient' element={ <RequiredAuth>  <Patient></Patient></RequiredAuth> }></Route>
        <Route path='/diagnostic' element={ <RequiredAuth><Diagnostic></Diagnostic></RequiredAuth> }></Route>
        <Route path='/profile' element={ <RequiredAuth><Profile></Profile> </RequiredAuth> }></Route>
       
          


        <Route path='/logIn' element={<LogIn></LogIn>}></Route>
        <Route path='/patientLog' element={<PatientLog></PatientLog>}></Route>
        <Route path='/doctorSignUp' element={<DoctorSignUp></DoctorSignUp>}></Route>
        <Route path='/diagnosticSignUp' element={<DiagnosticSignUp></DiagnosticSignUp>}></Route>
        <Route path='/PatientSignUp' element={<PatientSignUp></PatientSignUp>}></Route>
       
        {/* <Route path='/searchBar' element={ <SearchBar></SearchBar> }></Route> */}

  
      </Routes>
   
      <ToastContainer/>
    </div>
  );
}

export default App;
