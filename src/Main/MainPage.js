import React from "react"
import HeroSection from "./HeroSection"
import MySkills from "./MySkills"
import WorkExperience from "./WorkExperience"
import Footer from "../component/Footer"
import Certification from "./Certification"
import StarEffect from "../component/StarEffect"
import ContactUs from "./ContactUs"

const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <MySkills />
      <WorkExperience />
      <Certification />
      <ContactUs />
    </div>
  )
}

export default MainPage
