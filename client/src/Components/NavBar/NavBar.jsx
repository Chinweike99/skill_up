import React, {useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets.js'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [showlist, setShowList] = useState(false)

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
           
          <li className='popIn' onClick={()=>setShowList(!showlist)}> <Link to={"/"}>Home</Link></li>
            <li onClick={()=>setShowList(!showlist)}><Link to={"/courses"}>Courses</Link></li>
            <li className='exploreList exploreSmall'>
              <Link>Explore</Link>
                <div className='exploreDropdown'>
                  <ul>
                    <h4>Goals</h4>
                    <li>Take a free course</li>
                    <li> Earn a degree</li>
                    <li>Earn a certificate</li>
                    <li>Find your new career</li>
                  </ul>

                  <ul className='secondUl'>
                    <h4>Subjects</h4>
                    <li>Data Science</li>
                    <li>Business</li>
                    <li>Computer Science</li>
                    <li>Information Technology</li>
                    <li>Language Learning</li>
                    <li>Health</li>
                    <li>Personal Development</li>
                    <li>Social Sciences</li>
                    <li>Arts and Humanities</li>
                    <li>Browse all subjects</li>
                  </ul>
                </div>
            </li>
            <li onClick={()=>setShowList(!showlist)}><Link to={"/communities"}>Communities</Link></li>
            <li onClick={()=>setShowList(!showlist)}><Link to={"/resources"}>Resources</Link></li>
            <li onClick={()=>setShowList(!showlist)}><Link to={"/register"}><button>Login</button></Link></li>
          </ul>
        </div>


        <MenuIcon
        onClick={()=>setShowList(!showlist)}
        className='menuIcon'
        style={{color: "#fff", fontSize: "3rem"}}/>

        <div className='navList'>
          <ul>
          <li className='popIn'> <Link to={"/"}>Home</Link></li>
            <li><Link to={"/courses"}>Courses</Link></li>
            <li className='exploreList'>
              <Link>Explore</Link>
                <div className='exploreDropdown'>
                  <ul>
                    <h4>Goals</h4>
                    <li>Take a free course</li>
                    <li> Earn a degree</li>
                    <li>Earn a certificate</li>
                    <li>Find your new career</li>
                  </ul>

                  <ul>
                    <h4>Subjects</h4>
                    <li>Data Science</li>
                    <li>Business</li>
                    <li>Computer Science</li>
                    <li>Information Technology</li>
                    <li>Language Learning</li>
                    <li>Health</li>
                    <li>Personal Development</li>
                    <li>Social Sciences</li>
                    <li>Arts and Humanities</li>
                    <li>Browse all subjects</li>
                  </ul>
                </div>
            </li>
            <li><Link to={"/communities"}>Communities</Link></li>
            <li><Link to={"/resources"}>Resources</Link></li>
            <li><Link to={"/login"}> <button>Login</button> </Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar