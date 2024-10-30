import React from 'react'
import './CoachRegistration.css'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { verifyRegistration } from '../../../helper/validate.js'


const CoachRegistration = () => {

  const formik = useFormik({
    initialValues:{
      name: "",
      surname: "",
      email: "",
      number: "",
      field: "",
      password: "",
      confirmPassword: ""
    },
    validate: verifyRegistration,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values)
    }
  })


  
  return (
    <div className='studentReg'>
      <Toaster position='top-center' reverseOrder='false'> </Toaster>
      <div className='studentRegCon'>
        <form onSubmit={formik.handleSubmit}>
        <h4>Welcome to our Tutors programme</h4>
         <input required {...formik.getFieldProps("name")} type="text" placeholder='name'/>
         {/* <input required {...formik.getFieldProps("surname")} type="text" placeholder='surname'/> */}
        
         <input required {...formik.getFieldProps("email")} type="email" placeholder='@example.com'/>
          <input required {...formik.getFieldProps("field")} type="field" placeholder='Field'/>
          <input required {...formik.getFieldProps("password")} type="password" placeholder='Password'/>
          <input required {...formik.getFieldProps("confirmPassword")} type="password" placeholder='Confirm Password'/>
          <button> Submit</button>
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

export default CoachRegistration