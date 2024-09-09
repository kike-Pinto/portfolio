import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'
    >
      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2010 - 2012</p>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Beginning Experience
          </h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Developer Programmer'
            subtitle='Procesum LTDA (2012)'
            result='Chile'
            des='A similar work was carried out to the clinic but for the Department of Energy, it is necessary to design and implement a system that organizes mining materials.'
          />
          <ResumeCard
            title='Developer Programmer'
            subtitle='Procesum LTDA (2011)'
            result='Chile'
            des='With my work team we were able to design and implement an information search system for the patients of the clinic, mine workers.'
          />
          <ResumeCard
            title='Software Engineer Trainer'
            subtitle='Special Forces (2010 - 2011)'
            result='Chile'
            des='As a training engineer perform work to improve source codes, database and business intelligence with old data to prevent some errors or system crashes.'
          />
        </div>
      </div>

      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2011 - 2020</p>
          <h2 className='text-3xl md:text-4xl font-bold'>Job Experience</h2>
        </div>
        <div className='mt-8 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Web & Software Developer'
            subtitle='Procesum LTDA (2016 - Present)'
            result='Chile'
            des='Creation of dynamic web applications using frameworks like React. Design, creation, and complete maintenance of web pages and websites.'
          />
          <ResumeCard
            title='Web Developer'
            subtitle='Procesum (2015 - 2016)'
            result='Chile'
            des='Creation and maintenance of databases using MySQL. Design and development of responsive and accessible websites using HTML, CSS, and JavaScript.'
          />
          <ResumeCard
            title='Software Developer'
            subtitle='Procesum LTDA (2011 - 2012)'
            result='Chile'
            des='Software was developed for the maintenance and ordering of mining materials in the Superintendence of Energy in copper mining.'
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Experience
