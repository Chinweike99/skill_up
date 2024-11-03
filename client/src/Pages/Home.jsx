import React from 'react'
import About from '../Components/Home/About/About.jsx'
import Featured from '../Components/Home/Featured/Featured.jsx'
import { Hero } from '../Components/Home/Hero/Hero.jsx'
import Benefits from '../Components/Home/Benefits/Benefits.jsx'
import Testimonials from '../Components/Home/Testimonials/Testimonials.jsx'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Featured />
        <Benefits />
        <Testimonials />
        
    </div>
  )
}

export default Home