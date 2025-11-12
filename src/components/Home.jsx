import React from 'react'
import "./home.css"
import Social from './Social'
import ScrollDown from './ScrollDown'
import Data1 from './Data1'

const Home = () => {
  return (
    <>
    <section className="home section" id="home">
      <div className="home_container container grid">
      <div className="home_contact">
        <Social/>
      </div>
      <div className="home_img"></div>
      <div className="data_div">
        <Data1/>
         <ScrollDown/>
   
      </div>
    </div>
  </section>
      
    
    </>
  )
}

export default Home