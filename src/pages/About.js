import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Bg from '../images/abouts.jpg'
import Footer from '../components/Footer'
import AboutData from '../components/AboutData'

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        CName="half-hero"
        image={Bg}
        title="Our History"
        url="/about"
      />
      <AboutData/>
      <Footer/>
    </>
  )
}

export default About