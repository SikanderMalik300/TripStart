import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Bg from '../images/contact.jpg'
import Footer from '../components/Footer'
import Contactform from '../components/Contactform'

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        CName="half-hero"
        image={Bg}
        title="Contact Us"
        url="/contact"
      />
      <Contactform/>
      <Footer/>
    </>
  )
}

export default Contact