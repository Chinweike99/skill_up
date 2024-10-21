import React from 'react'
import './About.css'
import { assetsVideo } from '../../../assets/assetsVideos'

const About = () => {
  return (
    <div className='aboutUs'>
      <h1>About us</h1>
      <div className='aboutContent'>
        
        <div className='videoContainer'>
          <video className='aboutVid' src={assetsVideo.aboutus} autoPlay controls muted loop/>
        </div>
        
        <div className='aboutInfo'>
          <p>Welcome to SkillUp, your go-to platform for discovering and mastering valuable skills with guidance from experienced mentors.
            
            <br /> We believe that learning should be accessible, practical, and enjoyable. Whether you’re looking to learn a new handiwork, dive into online skills, or explore the world of entertainment, SkillUp connects you with the right mentors to help you unlock your potential. <br />
          <br />
            Our mission is to empower individuals to achieve their goals by providing quality mentorship and real-world skill development. At SkillUp, we go beyond conventional learning methods, focusing on hands-on training, interactive lessons, and personalized guidance to ensure you gain not just knowledge, but confidence in your abilities.</p>
        </div>
      </div>
    </div>
  )
}

export default About