import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets.js'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [showlist, setShowList] = useState(false)

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 720) {
  //       window.location.reload(); // Reload page to reset state when screen gets wider
  //     }
  //   };

    // window.addEventListener('resize', handleResize);
    
    // Clean up event listener on unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <nav>
      <div className='container'>
        <img src={assets.skill} alt="" />

        <div className='navList2' style={{display: showlist? "block" : "none"}}>
          <CloseIcon
          onClick={()=>setShowList(!showlist)}
          className='closeIcon' 
          style={{color: "#fff", fontSize: "3rem"}}/>
          <ul>
            <li className='popIn'><a href="">Home</a></li>
            <li className='popIn'><a href="">Courses</a></li>
            <li className='popIn'><a href="">Explore</a></li>
            <li className='popIn'><a href="">Communities</a></li>
            <li className='popIn'><a href="">Resources</a></li>
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