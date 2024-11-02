import React, { useState } from 'react'
import './Course.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Course = () => {
    const [visible, setVisible] = useState(true)
  return (
    <div className='courseHeader'>
        <header>
            <div className='headerSpan'>
            <span>
                    Software Engineering
                </span>
                <span>
                    Web Development
                </span>
                <span>
                    Vocational Skills
                </span>
                <span>
                    Entertainment
                </span>
                <span>
                    Programming Languages 
                </span>
            </div>
            <MoreHorizIcon />
       
            <div className='headerContent' style={{display: visible? "none" : "flex"}}>
                <p onClick={()=>setVisible(!visible)}>X</p>
                <span>
                    Software Engineering
                </span>
                <span>
                    Web Development
                </span>
                <span>
                    Vocational Skills
                </span>
                <span>
                    Entertainment
                </span>
                <span>
                    Programming Languages 
                </span>
            </div>


            <p onClick={()=>setVisible(!visible)}>Available courses</p>
        </header>
    </div>
  )
}

export default Course