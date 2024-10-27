import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routing from './Pages/Route';
// import Login from './Auth/Login/Login';
import CoachRegistration from './Auth/Register/CoachRegistration/CoachRegistration';
import StudentRegisteration from './Auth/Register/StudentRegistration/StudentRegisteration';
import Register from './Auth/Register/Register';
import Login from './Auth/Login/Login';

/**
 * 
 * @returns The path "/*" in <Route path="/*" element={<Routing />} />
 * matches any route under /, /courses, /explore, etc., and
 * renders the Routing component.
 */

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/*' element={<Routing />}/>
          <Route path='/student' element={<StudentRegisteration />}/>
          <Route path='/coach' element={<CoachRegistration />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
