import React from 'react'
import I1 from '../images/message.svg'
import './contactform.css'

const Contactform = () => {
  return (
    <div className='contact-form'>
        <div className="contact-image">
          <img src={I1} alt="" />
        </div>
        <div className='forms'>
          <h1>Get in Touch</h1>
          <form>
            <input type="text" name="name" id="name" placeholder='Name'/>
            <input type="email" name="email" id="email" placeholder='Email'/>
            <input type="text" name="subject" id="subject" placeholder='Subject'/>
            <textarea name="message" id="message" cols="10" rows="10" placeholder='Message'></textarea>
            <button>Send Message &rarr;</button>
          </form>
        </div>
    </div>
  )
}

export default Contactform