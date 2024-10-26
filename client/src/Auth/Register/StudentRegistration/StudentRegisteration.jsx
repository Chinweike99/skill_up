import React from 'react'
import './StudentReg.css'

const StudentRegisteration = () => {
  return (
    <div className='studentReg'>
      <div className='studentRegCon'>
        <form>
        <h4>Welcome to our Learners programme</h4>
          <input type="text" placeholder='username'/>
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

export default StudentRegisteration