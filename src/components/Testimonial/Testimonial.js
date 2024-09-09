import React, { useState } from 'react'
import Slider from 'react-slick'
import { RiStarFill } from 'react-icons/ri'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi'
import Title from '../Layouts/Title'
import { quote } from '../../assets'
import man from '../../assets/images/man.png'
import woman from '../../assets/images/woman.png'

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div
      className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-[-20px] right-24 shadow-shadowOne cursor-pointer z-10'
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div
      className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-[-20px] sm:right-44  shadow-shadowOne cursor-pointer z-10'
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  )
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next)
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                marginTop: '40px',
                width: '12px',
                height: '12px',
                color: 'blue',
                background: '#ff014f',
                borderRadius: '50%',
                cursor: 'pointer',
              }
            : {
                marginTop: '40px',
                width: '12px',
                height: '12px',
                color: 'blue',
                background: 'gray',
                borderRadius: '50%',
                cursor: 'pointer',
              }
        }
      ></div>
    ),
  }
  return (
    <section
      id='testimonials'
      className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center items-center text-center'>
        <Title title='WHAT CLIENTS SAY' des='Testimonial' />
      </div>
      <div className='max-w-6xl mx-auto'>
        <Slider {...settings}>
          <div className='w-full'>
            <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
              <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center'>
                {/* w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-4 lgl:gap-8 justify-center */}
                <img
                  className='h-72 md:h-32 lgl:h-96 rounded-lg object-cover testimonial-img'
                  // src={testimonialOne}
                  // alt='testimonialOne'
                  src={man}
                  alt='man'
                />
                <div className='w-full flex flex-col justify-end'>
                  <p className='text-xs uppercase text-designColor tracking-wide mb-2'>
                    Bound - Loyola
                  </p>
                  <h3 className='text-2xl font-bold'>Jony Loyola</h3>
                  <p className='text-base tracking-wide text-gray-500'>
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>
                <img className='w-20 lgl:w-[20%]' src={quote} alt='quote' />
                <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8'>
                  <div className='flex sm:flex-col md:flex-row justify-between md:items-center py-6 border-b-2 border-b-gray-900'>
                    <div>
                      <h3 className='text-xl lgl:text-2xl font-medium tracking-wide'>
                        Travel Mobile App Design.
                      </h3>
                      <p className='text-base text-gray-400 mt-2 sm:text-justify'>
                        via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p>
                    </div>
                    <div className='text-yellow-500 flex gap-1 mt-3'>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
                    I am incredibly satisfied with the website they designed for
                    me for my business. From the beginning, they understood
                    perfectly what I needed and managed to translate the essence
                    of my brand into a website that is both attractive and easy
                    to navigate. It is highly recommended and will definitely be
                    in my future plans.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  */}

          <div className='w-full'>
            <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
              <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center'>
                <img
                  className='h-72 md:h-32 lgl:h-96 rounded-lg object-cover testimonial-img'
                  // src={testimonialTwo}
                  // alt='testimonialTwo'
                  src={woman}
                  alt='woman'
                />
                <div className='w-full flex flex-col justify-end'>
                  <p className='text-xs uppercase text-designColor tracking-wide mb-2'>
                    Device - Repairer
                  </p>
                  <h3 className='text-2xl font-bold'>Veronica Alarcon</h3>
                  <p className='text-base tracking-wide text-gray-500'>SEO</p>
                </div>
              </div>
              <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>
                <img className='w-20 lgl:w-[20%]' src={quote} alt='quote' />
                <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                  <div className='flex sm:flex-col md:flex-row justify-between md:items-center py-6 border-b-2 border-b-gray-900'>
                    <div>
                      <h3 className='textxl lgl:text-2xl font-medium tracking-wide'>
                        POS System App Design.
                      </h3>
                      <p className='text-base text-gray-400 mt-2 sm:text-justify'>
                        via Upwork - Mar 24, 2019 - Sep 30, 2022 test
                      </p>
                    </div>
                    <div className='text-yellow-500 flex gap-1 mt-3'>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
                    The attention to detail was impeccable, and I was surprised
                    how quickly the project was completed. Now, my clients can
                    find all the information they need clearly and
                    professionally. I definitely recommend their services to
                    anyone who needs an effective and well-designed online
                    presence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  */}

          <div className='w-full'>
            <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
              <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center'>
                <img
                  className='h-72 md:h-32 lgl:h-96 rounded-lg object-cover testimonial-img'
                  // src={testimonialOne}
                  // alt='testimonialOne'
                  src={man}
                  alt='man'
                />
                <div className='w-full flex flex-col justify-end'>
                  <p className='text-xs uppercase text-designColor tracking-wide mb-2'>
                    Echeverria's Design
                  </p>
                  <h3 className='text-xl lgl:text-2xl font-bold'>
                    Federico Echeverria
                  </h3>
                  <p className='text-base tracking-wide text-gray-500'>
                    Lead Tech
                  </p>
                </div>
              </div>
              <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>
                <img className='w-20 lgl:w-[20%]' src={quote} alt='quote' />
                <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                  <div className='flex sm:flex-col md:flex-row justify-between md:items-center py-6 border-b-2 border-b-gray-900'>
                    <div>
                      <h3 className='text-xl lgl:text-2xl font-medium tracking-wide'>
                        App Design.
                      </h3>
                      <p className='text-base text-gray-400 mt-2 sm:text-justify'>
                        via Upwork - Jan 16, 2017 - Oct 31, 2028 test
                      </p>
                    </div>
                    <div className='text-yellow-500 flex gap-1 mt-3'>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
                    We are really impressed with the custom software that we
                    developed for our contractor company. From the start, they
                    captured our specific needs and created a solution that has
                    significantly improved our operational efficiency. The
                    system is intuitive, easy to use, and has simplified
                    processes that used to take a lot of time. In addition, the
                    integration with our existing tools was perfect.
                  </p>
                </div>
                {/* <a href="https://www.freepik.es/vector-gratis/estilo-silueta-usuarios-masculinos-femeninos_168221770.htm#fromView=search&page=6&position=39&uuid=94ba8f27-5075-40c0-8270-38a364c01681">Imagen de juicy_fish en Freepik</a> */}
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial
