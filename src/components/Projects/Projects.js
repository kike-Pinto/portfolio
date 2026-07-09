import React, { useState } from 'react'
import Title from '../Layouts/Title'
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  data_tools_platform,
  reporting_tools_platform,
  dashboard_tools_platform,
} from '../../assets/index'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      title: 'DATA TOOLS PLATFORM',
      des: 'A collection of browser-based data tools for cleaning, converting, and organizing CSV and JSON files quickly.',
      src: data_tools_platform,
      githubLink: 'https://github.com/kike-Pinto/data-tools-platform',
      webLink: 'https://data-tools-platform.vercel.app/',
    },
    {
      title: 'REPORTING TOOLS PLATFORM',
      des: 'A platform for generating operational reports, handover reports, and maintenance reports in a fast and structured way.',
      src: reporting_tools_platform,
      githubLink: 'https://github.com/kike-Pinto/reporting-tools-platform',
      webLink: 'https://reporting-tools-platform.vercel.app/',
    },
    {
      title: 'DASHBOARD TOOLS PLATFORM',
      des: 'A collection of browser-based KPI dashboard generators for analyzing Excel and CSV data with charts, metrics, and export options.',
      src: dashboard_tools_platform,
      githubLink: 'https://github.com/kike-Pinto/dashboard-tools-platform',
      webLink: 'https://dashboard-tools-platform.vercel.app/',
    },
    {
      title: 'LAWFIRM',
      des: 'Professional law firm offering expert legal services in civil, criminal, and business law with personalized client representation.',
      src: projectOne,
      githubLink: 'https://github.com/kike-Pinto/lawfirm',
      webLink: 'https://kike-pinto.github.io/lawfirm/',
    },
    {
      title: 'FULL-STACK BLOG',
      des: 'Full-stack blog application built with the MERN stack, including user authentication, content management, and dynamic posts.',
      src: projectTwo,
      githubLink: 'https://github.com/kike-Pinto/mern-blog',
      webLink: 'https://mern-blog-4g0z.onrender.com/',
    },
    {
      title: 'MODERN UI/UX DESIGN',
      des: 'Modern UI/UX design crafted in React and Tailwind CSS, featuring sleek interfaces and responsive layouts.',
      src: projectThree,
      githubLink: 'https://github.com/kike-Pinto/modern-UI-UX',
      webLink: 'https://kike-pinto.github.io/modern-UI-UX/',
    },
    {
      title: 'LEGAL SERVICES',
      des: 'Professional website for a solo attorney, offering expert legal services with a clear and engaging design.',
      src: projectFour,
      githubLink: 'https://github.com/kike-Pinto/servicios-abogados',
      webLink: 'https://kike-pinto.github.io/servicios-abogados/',
    },
    {
      title: 'MERN BOOKING APP',
      des: 'Search and book hostels and hotels with a user-friendly design, comprehensive listings, and real-time availability.',
      src: projectFive,
      githubLink: 'https://github.com/kike-Pinto/mern-booking-app',
      webLink: 'https://mern-booking-app-2ypz.onrender.com/',
    },
    {
      title: 'TOMATO DELIVERY APP',
      des: 'Food delivery application with restaurant listings, cart system, order flow, and user-friendly interface.',
      src: projectSix,
      githubLink: 'https://github.com/kike-Pinto/tomato',
      webLink: 'https://tomato-frontend-1ofp.onrender.com/',
    },
  ]

  const visibleProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section
      id='projects'
      className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center items-center text-center'>
        <Title title='VISIT MY PORTFOLIO AND KEEP FEEDBACK' des='My Projects' />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            githubLink={project.githubLink}
            webLink={project.webLink}
          />
        ))}
      </div>

      {projects.length > 6 && (
        <div className='flex justify-center mt-12'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='px-8 py-3 rounded-md bg-designColor text-black font-semibold hover:bg-opacity-80 duration-300'
          >
            {showAll ? 'Show Less' : 'Show More Projects'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Projects
