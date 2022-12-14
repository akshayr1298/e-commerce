import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import OTPvalidation from './Components/OTPvalidation/OTPvalidation';
import AdminLoginPages from './Pages/AdminLoginPages';
import AdminHomePage from './Pages/AdminHomePage';
import List from './Components/List/List';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>       
        <Route exact path='/' element={<HomePage/>} />
        <Route path = '/otpVarification' element={<OTPvalidation/>} />
        <Route path = '/adminlogin' element={<AdminLoginPages/>}/>
        <Route path = '/adminhome' element={<AdminHomePage/>} />
        <Route path = '/adminlist' element={<List/>}/>

      </Routes>
     </Router>
    </div>
  );
}

export default App;
