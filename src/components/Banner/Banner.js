import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

const Banner = () => {
  return (
    <section
      id='home'
      className='w-full pt-5 pb-20 flex flex-col gap-10 xl:gap-20 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black'
    >
      <LeftBanner />
      <RightBanner />
    </section>
  )
}

export default Banner
