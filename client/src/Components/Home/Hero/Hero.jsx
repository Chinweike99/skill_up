import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroContainer'>
        <div className='overlay'></div>

        <div className='heroWrite'>
          <h1>Unlock your potentials</h1>
          <h3>Learn. Grow. Thrive</h3>
          <p>Empowering you to become the best version of yourself..</p>

          <p>Explore a wide range of skills across various fields like tech, creative arts, business, and more. With personalized learning paths and mentorship, you can achieve your goals faster.</p>
        </div>

        <button>Get started</button>
      </div>
    </div>
  )
}
