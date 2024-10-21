import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets.js'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [showlist, setShowList] = useState(false)
  return (
    <nav>
      <div className='container'>
        <img src={assets.skill} alt="" />

        <div className='navList2' style={{display: showlist? "none" : "block"}}>
          <CloseIcon
          onClick={()=>setShowList(!showlist)}
          className='closeIcon' 
          style={{color: "#fff", fontSize: "3rem"}}/>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Courses</a></li>
            <li><a href="">Explore</a></li>
            <li><a href="">Communities</a></li>
            <li><a href="">Resources</a></li>
          </ul>
        </div>


        <MenuIcon
        onClick={()=>setShowList(!showlist)}
        className='menuIcon'
        style={{color: "#fff", fontSize: "3rem"}}/>

        <div className='navList'>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Courses</a></li>
            <li><a href="">Explore</a></li>
            <li><a href="">Communities</a></li>
            <li><a href="">Resources</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar