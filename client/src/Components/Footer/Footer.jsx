import React, { useEffect, useState } from 'react'
import './Footer.css'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

  const [recentDate, setDate] = useState()

    const getDate = () => {
        const myDate = new Date().getFullYear();
        return setDate(myDate);
    }
    useEffect(()=>{
        getDate();
    })

  return (
    <div className='footer'>
      <div className='footerContainer'>
        <div className='footerContent'>
          <h3>Courses</h3>
          <ul>
            <li>Online Skills</li>
            <li>Entertainment</li>
            <li>Vocational Skills</li>
            <li>Sales</li>
          </ul>
        </div>

        
        <div className='footerContent'>
          <h3>Entertainment</h3>
          <ul>
            <li><PhoneIphoneIcon style={{color: "grey", fontSize: "1.3rem"}}/> +234 9144330306</li>
              <li><AlternateEmailIcon style={{color: "red", fontSize: "1.3rem"}}/> chinweiketwitter@gmail.com</li> 
              <li><WhatsAppIcon style={{color: "green", fontSize: "1.3rem"}}/> +234 9144330306</li>
          </ul>
        </div>

        <div className='footerContent icons'>
          <h3>Socials</h3>
          <ul>
            <li><LinkedInIcon style={{color: "white", fontSize: "1.3rem"}}/></li>
              <li><XIcon style={{color: "white", fontSize: "1.3rem"}}/></li> 
              <li><FacebookIcon style={{color: "white", fontSize: "1.3rem"}}/></li>
              <li><GitHubIcon style={{color: "white", fontSize: "1.3rem"}}/></li>
          </ul>
        </div>


      </div>
      <p>
      © {recentDate}  SkillUp. All rights reserved. Unauthorized reproduction or distribution of any content or materials on this website is prohibited without prior written consent.
      </p>
    </div>
  )
}

export default Footer