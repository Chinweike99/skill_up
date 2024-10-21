import React from 'react'
import './Featured.css'
import { assetsVideo } from '../../../assets/assetsVideos'

const Featured = () => {
  return (
    <div>
      <div className='skillContainer'>
        <h1>Features.</h1>
        <p>
        "Discover Our Featured Skills"
        "At SkillUp, we curate the best skills to help you excel in your personal and professional journey. Our featured skills are designed to meet the demands of today’s competitive landscape, providing you with the knowledge and tools you need to succeed. Whether you're starting from scratch or looking to enhance your existing skills, our expert-led courses will guide you every step of the way. Dive into our featured offerings and unlock your potential today!"
        </p>
        <div className='onlineSkill'>
          <div className='tech'>
            <video className='skillVid' src={assetsVideo.programming} autoPlay controls muted loop/>
            <span><b>"Code Your Future"</b> <br />
            "In today’s digital age, programming is the backbone of innovation. Whether you want to build apps, websites, or software solutions, our programming courses will equip you with the skills to turn your ideas into reality. Join us and start coding your future!"</span>
          </div>

          <div className='tech'>
            <video className='skillVid' src={assetsVideo.writing} autoPlay controls muted loop/>
            <span>
            <b> Craft Compelling Stories </b> <br />
               "Good writing is more than just words on a page; it’s about connecting with your audience. Whether you're interested in creative writing, copywriting, or technical writing, our courses will help you hone your craft and communicate your ideas powerfully."
              </span>
          </div>

          <div className='tech item'>
            <video className='skillVid ' src={assetsVideo.marketing} autoPlay controls muted loop/>
              <span>
              <b>"Master the Art of Persuasion"</b> <br />
              "Effective marketing is essential for any business. Learn the strategies and tools that drive engagement and conversions. From digital marketing to branding, our courses will empower you to reach your target audience and grow your brand effectively."
              </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured