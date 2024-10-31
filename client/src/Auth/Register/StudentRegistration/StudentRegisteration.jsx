import React from 'react'
import './StudentReg.css'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { studentRegistration } from '../../../helper/validate.js';

const StudentRegisteration = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validate: studentRegistration,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values); // Placeholder for actual submission logic
      // Add actual submission API call here
    }
  });


  return (
    <div className='studentReg'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='studentRegCon'>
        <form onSubmit={formik.handleSubmit}>
        <h4>Welcome to our Learners programme</h4>
          <input {...formik.getFieldProps("name")}type="text" placeholder='username'/>
          <input {...formik.getFieldProps("email")} placeholder='@example.com'/>
          <input {...formik.getFieldProps("password")} placeholder='Password'/>
          <input {...formik.getFieldProps("confirmPassword")} placeholder='Confirm Password'/>
          <button type='submit'> Submit</button>
          <p>Have an account?
            <Link to={"/login"}>
              <span>sign in</span>
            </Link> 
          </p>
        </form>
        
      </div>
    </div>
  )
}

export default StudentRegisteration