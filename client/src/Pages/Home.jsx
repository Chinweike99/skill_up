import React from 'react'
import About from '../Components/Home/About/About.jsx'
import Featured from '../Components/Home/Featured/Featured.jsx'
import { Hero } from '../Components/Home/Hero/Hero.jsx'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Featured />
    </div>
  )
}

export default Home