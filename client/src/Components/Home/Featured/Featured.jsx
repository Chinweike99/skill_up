import React from 'react'
import './Featured.css'
import { assetsVideo } from '../../../assets/assetsVideos'

const Featured = () => {
  return (
    <div>
      <div className='skillContainer'>
        <h1>Features.</h1>
        <p>
        <b>Unlock a World of Opportunities with <em>SkillUp:</em>  </b>
          SkillUp is your gateway to mastering diverse skills and turning them into opportunities. Our featured sections are more than just online tutorials; they offer real-world learning experiences. Whether you’re looking to upskill with digital expertise, learn practical trades, or explore the world of entertainment, we bring skills to life with hands-on demonstrations and expert guidance. Start your journey to becoming a skilled professional today!
        </p>
        <div className='onlineSkill'>
          <div className='tech'>
            <video className='skillVid' src={assetsVideo.programming} autoPlay controls muted loop/>
            <span><b>Learn Today, Lead Tomorrow.</b> <br />
            Empower yourself with digital skills that drive the future. Dive into programming, marketing, writing, and more. Each video offers a glimpse into what you can achieve, with SkillUp guiding you beyond the basics to real-world applications.</span>
          </div>

          <div className='tech'>
            <video className='skillVid' src={assetsVideo.fashion} autoPlay controls muted loop/>
            <span>
            <b> Craft Your Path to Success.</b> <br />
            Master practical skills that open doors to rewarding careers. From tailoring to other hands-on trades, these videos demonstrate the art of craftsmanship. SkillUp is here to help you build not just skills, but a sustainable livelihood.
              </span>
          </div>

          <div className='tech item'>
            <video className='skillVid ' src={assetsVideo.entertainment} autoPlay controls muted loop/>
              <span>
              <b>Discover Your Creative Potential.</b> <br />
              Unleash your inner artist and explore the world of entertainment. Whether it's music, acting, or creative production, we show you what’s possible, and SkillUp provides the tools to make your mark in the industry.
              </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured