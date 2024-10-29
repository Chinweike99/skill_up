import React from 'react'
import { assetsVideo } from '../../assets/assetsVideos'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Overview.css'

const Overview = () => {
  return (
    <div className='overView'>
        <div className='mainOverview'>
            <div className='mainContent'>
                <div className='overviewSelector'>
                    <h4>Overview</h4>
                    <div className='overviewLike'>
                        <span>Likes</span>
                        <span>Comments</span>
                        <span>Students</span>
                    </div>
                </div>
                <div className='numbers'>
                    <h4>500</h4>
                    <h4>500</h4>
                    <h4>500</h4>
                    <h4>500</h4>
                    <h4>500</h4>
                    <h4>500</h4>
                    <h4>500</h4>
                    <h4>500</h4>
                    <h4>500</h4>
                </div>
            </div>

            <div className='postActivity'>
                <div>
                    <p>Post Activity</p>
                </div>
                <div className='overviewActivity'>
                    <div className='overviewMessage'>
                        <img src={assetsVideo.Onyeka} alt="" />
                        <span>You have the best training on Skillup</span>
                        <span>@chrisworth</span>
                        <span>7:00am</span>
                    </div>
                    <div className='overviewMessage'>
                        <img src={assetsVideo.bamisaye} alt="" />
                        <span>How do i connect with you in person</span>
                        <span>@chrisworth</span>
                        <span>9:00am</span>
                    </div>
                    <div className='overviewMessage'>
                        <img src={assetsVideo.johnson} alt="" />
                        <span>Your programme seems a lot for newbie</span>
                        <span>@chrisworth</span>
                        <span>7:00am</span>
                    </div>
                    <div className='overviewMessage'>
                        <img src={assetsVideo.deborah} alt="" />
                        <span>message</span>
                        <span>@chrisworth</span>
                        <span>7:00am</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='studentsActivity'>
            <div className='studentContainer'>
                <div className='studentTotal'>
                    <h4>Total Students</h4>
                    <MoreHorizIcon />
                </div>
                <h1>30,000.00</h1>
                <div>
                    <span>up to 10% from last week</span>
                </div>
            </div>
            <div className='studentContainer'>
                <div className='studentTotal'>
                    <h4>Total Comments</h4>
                    <MoreHorizIcon />
                </div>
                <h1>30,000.00</h1>
                <div>
                    <span>up to 10% from last week</span>
                </div>
            </div>
            <div className='studentContainer'>
                <div className='studentTotal'>
                    <h4>Total Likes</h4>
                    <MoreHorizIcon />
                </div>
                <h1>30,000.00</h1>
                <div>
                    <span>up to 10% from last week</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview