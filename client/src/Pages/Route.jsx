import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Courses from './Courses'
import Explore from './Explore'
import Communities from './Communities'
import Resources from './Resources'
import Register from '../Auth/Register/StudentRegistration/StudentRegisteration'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'


const Routing = () => {
  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/communities' element={<Communities />}/>
          <Route path='/resources' element={<Resources />}/>
          {/* <Route path='/register' element={<Register />}/> */}
        </Routes>
        <Footer/>
    </div>
  )
}

export default Routing