import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Features from '../Features/Features'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import Testimonial from '../Testimonial/Testimonial'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import FooterBottom from '../Footer/FooterBottom'

const HomePage = () => {
  return (
    <div className='w-full h-auto  bg-bodyColor text-ligthText px-4'>
      <div className='max-w-screen-xl mx-auto'>
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  )
}

export default HomePage
