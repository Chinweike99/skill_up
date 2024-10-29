import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { assetsVideo } from '../../../assets/assetsVideos';
import './CoachNav.css'

const CoachNav = () => {
  return (
    <div className='coachContainer'>
        <nav>
            <div className='coachSearch'>
                <input type="search" placeholder='search' />
                <SearchIcon />
            </div>
            
            <div className='coachDash'>
                <h3>Dashboard</h3>
                <MessageIcon />
                <NotificationsIcon />
            </div>

            <div className='coachInfo'>
                <p>Amanda</p>
                <img src={assetsVideo.Amaka} alt="Coach" />
            </div>
        </nav>
    </div>
  )
}

export default CoachNav