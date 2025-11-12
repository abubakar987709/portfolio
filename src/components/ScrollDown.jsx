import React from 'react'
import "./home.css"

const ScrollDown = () => {
  return (
    <>
      <div className="home_scroll">
        <a href="#about" className="home_scroll-button button--flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="mouse" viewBox="0 0 16 16">
            <path
              d="M8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              className="wheel"
              d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3Z"
              fill="currentColor"
            />
          </svg>
          <span className="home_scroll-name">
            Scroll Down
          </span>
          <i className='uil uil-arrow-down home _scroll-arrow'></i>

        </a>

      </div>

    </>
  )
}

export default ScrollDown