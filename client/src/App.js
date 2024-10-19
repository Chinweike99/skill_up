import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Courses from './Pages/Courses';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/courses' element={<Courses />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
