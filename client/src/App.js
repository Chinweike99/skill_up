import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Explore from './Pages/Explore';
import Communities from './Pages/Communities';
import Resources from './Pages/Resources';

function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/communities' element={<Communities />}/>
          <Route path='/resources' element={<Resources />}/>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
