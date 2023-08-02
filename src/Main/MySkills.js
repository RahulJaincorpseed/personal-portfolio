import React from "react"
import "./MySkills.scss"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const MySkills = () => {
  return (
    <div className="skill-section section-padding">
      <div>
        <h3 className="main-heading">My Skills</h3>
        <div className="skills-item">
          {/* <div className="ball-item">
            <i class="fa-brands fa-github"></i>
            <p>Github</p>
          </div> */}
          <OwlCarousel items={7} loop={true} margin={8} autoplay ={true}  autoplayTimeout={1000}
             className="owl-theme" 
          >
          <div className="ball-item">
          <i class="fa-brands fa-github"></i>
            <p className="skill-heading">Github</p>
          </div>
          <div className="ball-item">
          <i class="fa-brands js-icon fa-js"></i>
          <p className="skill-heading">JavaScript</p>
          </div>
          <div className="ball-item">
          <i class="fa-brands html-icon fa-html5"></i>
          <p className="skill-heading">HTML</p>
          
          </div>
          <div className="ball-item">
          <i class="fa-brands css-icon fa-css3"></i>
          <p className="skill-heading">CSS</p>
       
          </div>
          <div className="ball-item">
          <i class="fa-brands react-icon fa-react"></i>
          <p className="skill-heading">ReactJS</p>
       
          </div>
          <div className="ball-item">
          <i class="fa-brands bootstrap-icon fa-bootstrap"></i>
          <p className="skill-heading">Bootstrap</p>
        
          </div>
          <div className="ball-item">
          <i class="fa-brands sass-icon fa-sass"></i>
            <p className="skill-heading">Sass/Scss</p>
        
          </div>

          </OwlCarousel>
        </div>
      </div>
    </div>
  )
}

export default MySkills
