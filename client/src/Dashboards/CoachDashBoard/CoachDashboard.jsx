import React from 'react'
import Header from './CoachNav/CoachNav'
import CoachSiderBar from './CoachSideBar/CoachSiderBar'
import './CoachDash.css'

const CoachDashboard = () => {
  return (
    <div className='Maindashboard'>
        <CoachSiderBar/>
        <Header />
    </div>
  )
}

export default CoachDashboard