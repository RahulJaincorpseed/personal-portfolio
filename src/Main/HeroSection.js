import React from "react"
import "./HeroSection.scss"
import { Profile } from "../images/images"

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="left-part">
        <h1>left</h1>
      </div>
      <div className="right-part">
        <div className="profile-box">
        <div className="profile-image">
          <img src={Profile} alt="profile-image" />
        
        </div>
        <div className="blob-image">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#0F62FE"
            d="M22,-8.7C34.7,-1.6,55.5,7.9,53.9,11.3C52.3,14.6,28.3,11.8,9.1,22.4C-10.2,33.1,-24.7,57.3,-38,58.6C-51.3,60,-63.4,38.6,-62.9,20.2C-62.5,1.8,-49.5,-13.7,-36.9,-20.8C-24.4,-27.9,-12.2,-26.6,-3.8,-23.5C4.6,-20.5,9.2,-15.8,22,-8.7Z"
            transform="translate(100 100)"
          />
        </svg>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
