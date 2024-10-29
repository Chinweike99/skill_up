import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { assetsVideo } from '../../../assets/assetsVideos';
import './CoachNav.css'
import Overview from '../../Overview/Overview';

const Header = () => {
  return (
    <div className='coachContainer'>
        <header>
            <div className='coachSearch'>
                <input type="search" placeholder='search' />
                <SearchIcon className='search'/>
            </div>
            
            <div className='coachDash'>
                <h3>Dashboard</h3>
                <MessageIcon className='search'/>
                <NotificationsIcon className='search'/>
            </div>

            <div className='coachInfo'>
                <p>Amanda</p>
                <img src={assetsVideo.Amaka} alt="Coach" />
            </div>
        </header>
        <Overview />
    </div>
  )
}

export default Header