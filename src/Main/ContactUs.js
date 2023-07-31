import React from "react"
import "./ContactUs.scss"
import { Link } from "react-router-dom"

const ContactUs = () => {
  return (
    <div className="contact-us section-padding">
      <div className="contact-left star-effect">
        <h3>Contact Us</h3>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="my-content">
          <h3 className="main-heading">My Experience</h3>
          <h3>My data</h3>
        </div>
      </div>
      <div className="contact-right star-effect">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="my-content">
          <h3 className="contact-heading">Get In Touch</h3>
          <p className="contact-desc">Feel Free to drop a message</p>
          <input
            className="contact-input"
            type="text"
            placeholder="Enter Your Name*"
          />
          <input
            className="contact-input"
            type="text"
            placeholder="Enter Your Email*"
          />
          <textarea
            className="contact-input text-area"
            placeholder="Leave a Message"
          ></textarea>
          <Link className="small-cm-btn cont-btn" to="/">
            Send Message
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
