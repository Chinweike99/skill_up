import React from 'react'
import './CoachRegistration.css'
import { Link } from 'react-router-dom'

const CoachRegistration = () => {
  return (
    <div className='studentReg'>
      <div className='studentRegCon'>
        <form>
        <h4>Welcome to our Tutors programme</h4>
        <div className='coachReg'>
         <input required type="text" placeholder='name'/>
         <input required type="text" placeholder='surname'/>
        </div>
        <div className='coachReg'>
         <input required type="email" placeholder='@example.com'/>
         <input required type="number" placeholder='Phone'/>
        </div>
          <input required type="field" placeholder='Field'/>
          <input required type="password" placeholder='Password'/>
          <input required type="password" placeholder='Confirm Password'/>
          <button> Submit</button>
          <p>Have an account? 
          <Link to={"/coachlogin"}>
              <span>sign in</span>
            </Link> 
          </p>
        </form>
        
      </div>
    </div>
  )
}

export default CoachRegistration