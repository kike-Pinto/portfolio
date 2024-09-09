import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaLinkedinIn, FaReact, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      'Full Stack Developer.',
      'Software Engineer.',
      'Developer Programmer.',
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  })
  return (
    <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
      <div className='flex flex-col gap-5'>
        <h4 className='text-lg font-normal'>WELCOME TO MY HOME</h4>
        <h1 className='text-5xl font-bold text-white'>
          Hi, I'm{' '}
          <span className='text-cyan-500 capitalize'>Cristian Pinto</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>
          a <span>{text}</span>
          <Cursor
            cursorBlinking='false'
            cursorStyle='|'
            cursorColor='#ff014f'
          />
        </h2>
        <p className='text-base font-bodyFont leading-6 tracking-wide pt-2'>
          Web Developer & Software Engineer with several years of experience,
          specialized in creating innovative and efficient solutions in web
          development, combining advanced technical skills with a passion for
          continuous improvement.
        </p>
      </div>
      <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
        <div>
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
        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>
            BEST SKILL ON
          </h2>
          <div className='flex gap-4'>
            <span className='bannerIcon tooltip'>
              <FaReact />
              <span className='tooltipText'>ReactJs</span>
            </span>
            <span className='bannerIcon tooltip'>
              <SiNextdotjs />
              <span className='tooltipText'>NextJs</span>
            </span>
            <span className='bannerIcon tooltip'>
              <SiTailwindcss />
              <span className='tooltipText'>Tailwindcss</span>
            </span>
            <span className='bannerIcon tooltip'>
              <IoLogoJavascript />
              <span className='tooltipText'>JavaScript</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBanner
