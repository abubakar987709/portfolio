import React from 'react'
import "./about.css"
const Info = () => {
  return (
    <>
    <div className="about_info grid">
      <div className="about_box2">
    <div className="about_box">
        <i className='bx bx-award about_icon'></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">1 Year Working</span>
    </div>
        <div className="about_box">
        <i className='bx bx-briefcase-alt about_icon'></i>
        <h3 className="about_title">Compeleted</h3>
        <span className="about_subtitle">20+ Projects</span>
        
    </div>
        <div className="about_box">
        <i className='bx bx-support about_icon'></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
    </div>
    </div>
            <p className="about_description" style={{width:"350px"}}>
            Frontend developer , I create web pages with UI/UX user interface i have year of experience and many clients are happy with the projects carred out. 
        </p>
    <div className="download">
          <a download="" href="" className="button button--flex">
        Download CV
        <svg   xmlns="http://www.w3.org/2000/svg"
        height="20px"
        width="20px"
        color='white'
        className='btn'
         viewBox="0 0 384 512">Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.<path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176z"/></svg>
        </a>
    </div>

    </div>
    </>
  )
}

export default Info