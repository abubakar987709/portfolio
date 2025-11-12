import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Smith</h1>
            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
            </li>
                   <li>
                    <a href="#Portfolio" className="footer_link">projects</a>
             </li>
                   <li>
                    <a href="#testimonials" className="footer_link">Testimonials</a>
                </li>
            </ul>
            <div className="footer_social">
         <a href="https://www.facebook.com" className="footer-social-link" target="_blank">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="https://www.instagram.com" className="footer-social-link" target="_blank">
          <i className="bx bxl-instagram"></i>
        </a>

        <a href="https://twitter.com/" className="footer-social-link" target="_blank">
          <i className="bx bxl-twitter"></i>

        </a>
            </div>
        <span className='footer_copy'>
      &#169; crypticalcoder. all rights reserved
        </span>
        </div>
    </footer>
    
    </>
  )
}

export default Footer