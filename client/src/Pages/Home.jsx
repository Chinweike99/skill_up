import React from 'react'
import About from '../Components/Home/About/About.jsx'
import Featured from '../Components/Home/Featured/Featured.jsx'
import { Hero } from '../Components/Home/Hero/Hero.jsx'
import Benefits from '../Components/Home/Benefits/Benefits.jsx'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Featured />
        <Benefits />
    </div>
  )
}

export default Home