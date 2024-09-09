import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'
    >
      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2010 - 2012</p>
          <h2 className='text-3xl md:text-4xl font-bold'>Company Experience</h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Software Developer'
            subtitle='Procesum LTDA (2011 - 2012)'
            result='Success'
            des='Preparation of technical documentation and user manuals. Development and implementation of applications and computer systems.'
          />
          <ResumeCard
            title='Software Developer'
            subtitle='Procesum LTDA (2011)'
            result='Success'
            des='Design and development of attractive and functional user interfaces. Creation and development of new programs and applications.'
          />
          <ResumeCard
            title='Software Engineer Trainer'
            subtitle='Special Forces (2010)'
            result='Success'
            des='Design and development of data structure and databases.'
          />
        </div>
      </div>

      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>
            2015 - Present
          </p>
          <h2 className='text-3xl md:text-4xl font-bold'>Job Experience</h2>
        </div>
        <div className='mt-8 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Software Engineer'
            subtitle='Asesores y Consultores (2016 - Present)'
            result='Chile'
            des='Constantly learning new technologies.'
          />
          <ResumeCard
            title='Web Developer'
            subtitle='Asesores y Consultores (2015 - 2016)'
            result='Chile'
            des='Critical Thinking and working with teamwork.'
          />
          <ResumeCard
            title='Front-end Developer'
            subtitle='Asesores y Consultores (2015)'
            result='Freelance'
            des='Analysis of client requirements and needs, UML. Participation in the definition of architectures and design patterns.'
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Achievement
