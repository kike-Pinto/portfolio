import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logo from '../../assets/images/my_logo5.jpg'

const Footer = () => {
  return (
    <div className='w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8'>
      <div className='w-full h-full flex flex-col gap-8'>
        <a href='/'>
          <img
            className='object-cover object-top shadow-shadowOne w-60 h-auto hover:translate-y-1 hover:translate-x-1.5 hover:contrast-200 p-2 rounded-[14px] cursor-pointer'
            src={logo}
            alt='logo'
          />
        </a>
        <div className='flex gap-5'>
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
            href='www.linkedin.com/in/cristian-pinto-9719a7168'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='bannerIcon tooltip'>
              <FaInstagram />
              <span className='tooltipText'>Instagram</span>
            </span>
          </a>

          <a
            href='www.linkedin.com/in/cristian-pinto-9719a7168'
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
      <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wide'>
          Quick Link
        </h3>
        <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
          <a href='/'>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                About
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
              </span>
            </li>
          </a>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Portfolio
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Services
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Blog
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Contact
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
        </ul>
      </div>
      <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wide'>
          Resources
        </h3>
        <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Authentication
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              System Status
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Terms of Services
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Pricing
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Over Right
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
        </ul>
      </div>
      <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wide'>
          Developers
        </h3>
        <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Documentation
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Authentication
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              API Reference
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Support
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Open Source
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
