import React from 'react'
import './Register.css'
import SchoolIcon from '@mui/icons-material/School';
import Person3Icon from '@mui/icons-material/Person3';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
        <div className='registerContainer'>

            <Link to={"/student"}>
                <div className='regContent'>
                    <SchoolIcon style={{fontSize: "3rem"}}/>
                    <h1>Register as a Learner</h1>
                    <p>
                    Unlock a world of possibilities. Gain new skills, advance your career, and learn from experienced coaches. Whether you're looking to master a craft or develop professional skills, SkillUp is your gateway to growth.
                    </p>
                    <Link to={"/student"}>
                        <button className='regBtn'>Signup</button>
                    </Link>
                </div>
            </Link>

            <Link to={"/coach"}>
            <div className='regContent regcontent2'>
                <Person3Icon style={{fontSize: "3rem"}}/>
                <h1>Register as a Coach</h1>
                <p>
                Share your expertise and inspire the next generation of learners. Join SkillUp as a coach to mentor students, impart valuable knowledge, and make a meaningful impact on people's lives. Expand your reach and grow your influence.
                </p>
                <Link to={"/coach"}>
                    <button>Signup</button>
                </Link>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Register