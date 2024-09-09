import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import logo from '../../assets/images/my_logo5.jpg'
import './Navbar.css'
import { navLinksdata } from '../../constants'

const Navbar = () => {
  const [showMenu, setMenuShow] = useState(false)

  return (
    <nav className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
      <div>
        <img
          src={logo}
          alt='logo'
          className='object-cover object-top shadow-shadowOne w-48 h-auto hover:translate-y-1 hover:translate-x-1.5 hover:contrast-200 p-2 rounded-[14px] cursor-pointer'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <div className='shadow-overlay'></div>
      </div>
      <div>
        <ul className='hidden mdl:inline-flex items-center gap-6 lg:gap-10'>
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
              key={_id}
            >
              <Link
                activeClass='active'
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setMenuShow(!showMenu)}
          className='text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className='w-[80%] h-screen absolute top-0 left-0 overflow-scroll bg-gray-900 p-4 scrollbar-hide'>
            <div className='flex flex-col gap-8 py-2 relative'>
              <div>
                <img
                  className='object-cover object-top  w-32 h-auto hover:translate-y-1 hover:translate-x-1.5 hover:contrast-200 p-2 rounded-[14px] cursor-pointer'
                  src={logo}
                  alt='logo'
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                />
                <p className='text-sm text-gray-400 mt-4'>
                  Web Developer & Software Engineer with several years of
                  experience, specialized in creating innovative and efficient
                  solutions in web development, combining advanced technical
                  skills with a passion for continuous improvement.
                </p>
              </div>
              <ul className='flex flex-col gap-4'>
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
                  >
                    <Link
                      onClick={() => setMenuShow(false)}
                      activeClass='active'
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='flex flex-col gap-4'>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                  Find me in
                </h2>
                <div className='flex gap-4'>
                  <a
                    href='https://www.facebook.com/cristian.pintoortiz.1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='bannerIcon tooltip'>
                      <FaFacebookF />
                      <span className='tooltipText'>Facebook</span>
                    </span>
                  </a>

                  <a
                    href='https://github.com/kike-Pinto'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='bannerIcon tooltip'>
                      <FaGithub />
                      <span className='tooltipText'>Github</span>
                    </span>
                  </a>

                  <a
                    href='https://www.linkedin.com/in/cristian-pinto-9719a7168'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='bannerIcon tooltip'>
                      <FaLinkedinIn />
                      <span className='tooltipText'>LinkedIn</span>
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setMenuShow(false)}
                className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
