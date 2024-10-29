import React from 'react'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HistoryIcon from '@mui/icons-material/History';
import './CoachSide.css'

const CoachSiderBar = () => {
  return (
    <div className='sideBar'>
        <div className='CoachSide'>
            <LocalFireDepartmentIcon className='Coachicon'/>
            <span>General</span>
        </div>
        
        <div className='CoachSide'>
            <DashboardIcon className='Coachicon'/>
            <span>Dashboard</span>
        </div>
        <div className='CoachSide'>
            <LocalLibraryIcon className='Coachicon'/>
            <span>My courses</span>
        </div>
        <div className='CoachSide'>
            <SchoolIcon className='Coachicon'/>
            <span>Rooms</span>
        </div>
        <div className='CoachSide'>
            <HistoryIcon className='Coachicon'/>
            <span>History</span>
        </div>
        <div className='CoachSide' style={{marginBottom:"6rem"}}>
            <SettingsIcon className='Coachicon'/>
            <span> Settings</span>
        </div>
        <div className='CoachSide' style={{marginBottom:"rem"}}>
            <HelpOutlineIcon className='Coachicon'/>
            <span>Help</span>
        </div>

    </div>
  )
}

export default CoachSiderBar