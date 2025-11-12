import React from 'react'
import Header from './components/Header'
import "./App.css"
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/service/Services'
import Qualification from './components/qualification/Qualification'
import Testimonials from './components/testimonals/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Scrollup from './components/scrollup/Scrollup'
const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact/>
      </main>
      <Footer/>
      <Scrollup/>

    </>
  )
}

export default App