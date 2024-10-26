import React from 'react'
import './CoachRegistration.css'

const CoachRegistration = () => {
  return (
    <div className='studentReg'>
      <div className='studentRegCon'>
        <form>
        <h4>Welcome to our Tutors programme</h4>
        <div className='coachReg'>
         <input type="text" placeholder='username'/>
         <input type="text" placeholder='Field'/>
        </div>
          <input type="email" placeholder='@example.com'/>
          <input type="password" placeholder='Password'/>
          <input type="password" placeholder='Confirm Password'/>
          <button> Submit</button>
          <p>Have an account? <span>sign in</span></p>
        </form>
        
      </div>
    </div>
  )
}

export default CoachRegistration