import React from 'react'
import Title from '../Layouts/Title'
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from '../../assets/index'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section
      id='projects'
      className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center items-center text-center'>
        <Title title='VISIT MY PORTFOLIO AND KEEP FEEDBACK' des='My Projects' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectCard
          title='LAWFIRM'
          des={
            'Professional law firm offering expert legal services in civil, criminal, and business law with personalized client representation.'
          }
          src={projectOne}
          githubLink='https://github.com/kike-Pinto/lawfirm'
          webLink='https://kike-pinto.github.io/lawfirm/'
        />
        <ProjectCard
          title='FULL-STACK BLOG'
          des={
            'Professional law firm offering expert legal services in civil, criminal, and business law with personalized client representation.'
          }
          src={projectTwo}
          githubLink='https://github.com/kike-Pinto/mern-blog'
          webLink='https://mern-blog-4g0z.onrender.com/'
        />
        <ProjectCard
          title='MODERN UI/UX DESIGN'
          des={
            'Modern UI/UX design crafted in React and Tailwind CSS, featuring sleek interfaces and responsive layouts for a seamless user experience.'
          }
          src={projectThree}
          githubLink='https://github.com/kike-Pinto/modern-UI-UX'
          webLink='https://kike-pinto.github.io/modern-UI-UX/'
        />
        <ProjectCard
          title='LEGAL SERVICES'
          des={
            'Professional website for a solo attorney, offering expert legal services with a clear, engaging design for personalized client interactions.'
          }
          src={projectFour}
          githubLink='https://github.com/kike-Pinto/servicios-abogados'
          webLink='https://kike-pinto.github.io/servicios-abogados/'
        />
        <ProjectCard
          title='MERN BOOKING APP'
          des={
            'Search and book hostels and hotels with ease, featuring user-friendly design, comprehensive listings, and real-time availability for travelers'
          }
          src={projectFive}
          githubLink='https://github.com/kike-Pinto/mern-booking-app'
          webLink='https://mern-booking-app-2ypz.onrender.com/'
        />
        <ProjectCard
          title='TOMATO DELIVERY APP'
          des={
            'Effortlessly order fast food and restaurant meals with a user-friendly app, featuring real-time tracking, diverse options, and quick delivery.'
          }
          src={projectSix}
          githubLink='https://github.com/kike-Pinto/tomato'
          webLink='https://tomato-frontend-1ofp.onrender.com/'
        />
      </div>
    </section>
  )
}

export default Projects
