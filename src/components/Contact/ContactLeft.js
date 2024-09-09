import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { contactImg } from '../../assets/index'

const ContactLeft = () => {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
      <img
        className='w-full h-96 object-cover rounded-lg mb-3'
        src={contactImg}
        alt='contactImg'
      />
      <div className='flex flex-col gap-4'>
        <h3 className='text-3xl font-bold text-cyan-500'>Cristian Pinto</h3>
        <p className='text-lg font-normal text-gray-500'>
          Software & Web Developer
        </p>
        <p className='text-base text-gray-400 tracking-wide'>
          You can connect me through the form on the side, I just need how to
          locate yourself and explain your software and website needs.
        </p>
        <p className='text-base text-gray-400 items-center gap-2'>
          Phone: <span className='text-ligthText'>+968 12345678</span>
        </p>
        <p className='text-base text-gray-400 items-center gap-2'>
          Email:{' '}
          <span className='text-ligthText'>
            ejecutar.programacion@gmail.com
          </span>
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-base uppercase font-titleFont font-bold mb-4 '>
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
              <span className='tooltipText'>Linkedin</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactLeft
