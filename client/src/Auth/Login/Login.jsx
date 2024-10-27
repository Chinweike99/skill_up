import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='Login'>
      <div className='LoginUser'>
        <form>
          <h1>Login</h1>
          <input required type="email" placeholder='Email address'/>
          <input required type="password" placeholder='Password'/>
          <button>Login</button>
        </form>
        <p>Dont have an account? 
        <Link to={"/register"}>
              <span>register</span>
            </Link>
        </p>
      </div>
    </div>
  )
}

export default Login