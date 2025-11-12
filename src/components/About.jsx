import React from 'react'
import "./about.css"
import Info from './Info'

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>
        <div className="about-container">
          <div className="about_container container grid">
            <img src="./img1.jpg" alt="" className="about_img" />
          </div>
          <div className="about_data">
            <Info />
          </div>
        </div>



      </section>

    </>
  )
}

export default About