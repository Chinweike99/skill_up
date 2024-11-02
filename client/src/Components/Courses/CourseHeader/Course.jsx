import React, { useState } from 'react'
import './Course.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Course = () => {
    const [visible, setVisible] = useState(false)
  return (
    <div className='courseHeader'>
        <header>
            <div className='headerSpan'>
                <span>
                    Development
                </span>
                <span>
                    Web Development
                </span>
                <span>
                    Data Science
                </span>
                <span>
                    Mobile development
                </span>
                <span>
                    Programming Languages 
                </span>
            </div>
            <MoreHorizIcon />
       
            <div className='headerContent' style={{display: visible? "none" : "flex"}}>
                <p onClick={()=>setVisible(!visible)}>X</p>
                <span>
                    Development
                </span>
                <span>
                    Web Development
                </span>
                <span>
                    Data Science
                </span>
                <span>
                    Mobile development
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