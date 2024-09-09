import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'
    >
      {/* part one */}

      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>1998 - 2010</p>
          <h2 className='text-3xl md:text-4xl font-bold'>Education Quality</h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='BSc in Computer Science'
            subtitle='Universidad Arturo Prat (2007 - 2010)'
            result='4.25/5'
            des='Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.'
          />
          <ResumeCard
            title='AS - Science & Information'
            subtitle='Universidad Arturo Prat (2003 - 2007)'
            result='4.1/5'
            des='The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.'
          />
          <ResumeCard
            title='Secondary School Education'
            subtitle='Universidad Arturo Prat (1998 - 2002)'
            result='4.75/5'
            des='Secondary education or post-primary education covers two phases on the Internation Standart Classification of Education scale.'
          />
        </div>
      </div>

      {/* part two */}
      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2012 - 2024</p>
          <h2 className='text-3xl md:text-4xl font-bold'>Job Experience</h2>
        </div>
        <div className='mt-8 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Software Engineer'
            subtitle='Consultores Informatica (2015 - Present)'
            result='Chile'
            des='I currently do freelance work for a company and individually using most of the technologies available for Full Stack development.'
          />
          <ResumeCard
            title='Web Developer'
            subtitle='Procesum LTDA (2012 - 2013)'
            result='Chile'
            des='I provided various services to an external company working in the mining area, making improvements to the data of a clinic and Energy Department.'
          />
          <ResumeCard
            title='Software Engineer'
            subtitle='Special Forces (2011 - 2012)'
            result='Chile'
            des="After finishing my bachelor's degree at university, I did one of my professional internships in the IT department at the Chilean Air Force."
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Education
