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

        <h3 className='featuresh3'>More Features</h3>

        <div className="moreFeatureContainer">
          <div className="featureSection hideSection">
            <div className="moreFeat">
              <h4>Progress Tracking and Gamification</h4>
              <span>Track Your Growth, Earn Rewards</span>
              <p>
              SkillUp helps you stay motivated by tracking your progress and rewarding you for completing courses, projects, and challenges. Earn badges, certificates, and even discounts as you hit milestones.
              </p>
            </div>
            <div className="moreFeat black">
              <h4> Live Workshops and Webinars</h4>
              <span>Join Live Sessions with Industry Experts</span>
              <p>
                Attend live workshops, webinars, and Q&A sessions with experts across different fields. Get insights, ask questions, and receive feedback in real-time, making your learning experience more dynamic and engaging.
              </p>
            </div>
            <div className="moreFeat">
              <h4>SkillUp Mobile App</h4>
              <span>Learn Anytime, Anywhere</span>
              <p>
                 Take your learning on the go with the SkillUp mobile app. Access courses, connect with mentors, and track your progress directly from your smartphone.
              </p>
            </div>
            <div className="moreFeat black">
              <h4> Local Skill Events and Competitions</h4>
              <span>Showcase Your Skills</span>
              <p>
              SkillUp organizes events and competitions where learners can demonstrate their skills, win prizes, and get recognition. It’s a great way to put your knowledge to the test and network with others in your field.
              </p>
            </div>
          </div>

          <div className="featureSection">
            <div className="moreFeat black">
              <h4>Personalized Learning Experiences</h4>
              <span>Tailored Learning Experiences</span>
              <p>
                SkillUp creates a custom learning journey for each user, combining online resources and in-person training to match your goals and learning style.
              </p>
            </div>
            <div className="moreFeat ">
              <h4> Mentor and Coach Matching </h4>
              <span>Get Connected with Experts Near You</span>
              <p>
                SkillUp goes beyond online learning by connecting you with local mentors and professional coaches. Whether you need hands-on training in fashion design, carpentry, or any other skill, we’ll match you with the nearest expert to help you succeed.
              </p>
            </div>
            <div className="moreFeat black">
              <h4>Community and Networking Opportunities</h4>
              <span>Learn Together, Grow Together</span>
              <p>
              Join a community of learners and professionals. SkillUp provides forums, group discussions, and local meet-ups where you can share experiences, ask questions, and collaborate with others..
              </p>
            </div>
            <div className="moreFeat ">
              <h4>Skill Assessment and Certification</h4>
              <span>Get Certified, Gain Recognition</span>
              <p>
              Complete courses and practical tasks to earn certifications that validate your skills and help you stand out in the job market.
              </p>
            </div>
          </div>
        </div>

          <button>Join us today→</button>
      </div>
    </div>
  )
}

export default Featured