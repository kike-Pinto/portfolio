import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import FooterBottom from './components/Footer/FooterBottom'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Testimonial from './components/Testimonial/Testimonial'

function App() {
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

export default App
