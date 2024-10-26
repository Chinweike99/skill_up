import React from 'react'
import './StudentReg.css'
import { Link } from 'react-router-dom'

const StudentRegisteration = () => {
  return (
    <div className='studentReg'>
      <div className='studentRegCon'>
        <form>
        <h4>Welcome to our Learners programme</h4>
          <input required type="text" placeholder='username'/>
          <input required type="email" placeholder='@example.com'/>
          <input required type="password" placeholder='Password'/>
          <input required type="password" placeholder='Confirm Password'/>
          <button> Submit</button>
          <p>Have an account?
            <Link to={"/studentlogin"}>
              <span>sign in</span>
            </Link> 
          </p>
        </form>
        
      </div>
    </div>
  )
}

export default StudentRegisteration