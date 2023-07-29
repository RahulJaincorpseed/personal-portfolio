import React from "react"
import HeroSection from "./HeroSection"
import MySkills from "./MySkills"
import WorkExperience from "./WorkExperience"
import Footer from "../component/Footer"
import Certification from "./Certification"
import StarEffect from "../component/StarEffect"

const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <MySkills />
      <WorkExperience />
      <Certification />
    </div>
  )
}

export default MainPage
