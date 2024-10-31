import React from 'react';
import './CoachRegistration.css';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { verifyRegistration } from '../../../helper/validate.js';

const CoachRegistration = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      field: "",
      password: "",
      confirmPassword: ""
    },
    validate: verifyRegistration,
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
          <h4>Welcome to our Tutors Programme</h4>
          <input {...formik.getFieldProps("name")} type="text" placeholder='Name' />
          <input {...formik.getFieldProps("email")} type="email" placeholder='Email@example.com' />
          <input {...formik.getFieldProps("field")} type="text" placeholder='Field of Expertise' />
          <input {...formik.getFieldProps("password")} type="password" placeholder='Password' />
          <input {...formik.getFieldProps("confirmPassword")} type="password" placeholder='Confirm Password' />
          <button type="submit">Submit</button>
          <p>Have an account? 
            <Link to={"/login"}>
              <span>Sign in</span>
            </Link> 
          </p>
        </form>
      </div>
    </div>
  );
};

export default CoachRegistration;
