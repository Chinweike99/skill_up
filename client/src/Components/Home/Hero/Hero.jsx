import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroContainer'>
        <div className='overlay'></div>

        <div className='heroWrite'>
          <h1>Unlock your potentials.</h1>
          <h3>Learn &gt;&gt; Grow &gt;&gt; Thrive 🥇</h3>
        </div>

        <div className='heroMessage'>
           <p>Empowering you to become the best version of yourself..
           </p>

          <p className='hideSmScreen'>Explore a wide range of skills across various fields like tech, creative arts, business, and more. With personalized learning paths and mentorship, you can achieve your goals faster.
          </p>
        </div>

        <button>Get started</button>
      </div>
    </div>
  )
}
