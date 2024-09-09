import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import logo from '../../assets/images/my_logo5.jpg'
import './Navbar.css'
import { navLinksdata } from '../../constants'

const Navbar = () => {
  const [showMenu, setMenuShow] = useState(false)

  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
      <div>
        <a href='/'>
          <img
            src={logo}
            alt='logo'
            className='object-cover object-top shadow-shadowOne w-48 h-auto hover:translate-y-1 hover:translate-x-1.5 hover:contrast-200 p-2 rounded-[14px] cursor-pointer'
          />
        </a>
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
                />
                <p className='text-sm text-gray-400 mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  suscipit harum debitis sequi. Reiciendis labore dolorem quasi
                  nihil fugiat ullam.
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
                  <span className='bannerIcon'>
                    <FaFacebookF />
                  </span>
                  <span className='bannerIcon'>
                    <FaTwitter />
                  </span>
                  <span className='bannerIcon'>
                    <FaLinkedinIn />
                  </span>
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
    </div>
  )
}

export default Navbar
