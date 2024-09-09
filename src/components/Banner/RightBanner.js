import React from 'react'
// import profile from '../../assets/images/profile15.jpg'
import codigo from '../../assets/images/codigo8.jpg'

const RightBanner = () => {
  return (
    <div className='w-full lgl:w-1/2 flex justify-center items-center relative'>
      {/* <img src={bannerImg} alt='bannerImg' /> */}
      <img
        // src={profile}
        src={codigo}
        alt='profile'
        // className='w-[250px] h-[400px] lgl:w-[500px] lgl:h-[680px] pt-10 rounded-lg brightness-100 hover:brightness-125 hover:scale-105 transition-all duration-300 z-10'
        className='w-[300px] h-[400px] rounded-lg lgl:w-[500px] lgl:h-[580px] pt-10 brightness-100 hover:brightness-125 hover:scale-105 transition-all duration-300 z-10'
      />
      {/* <div className='absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'></div> */}
      <div className='absolute rounded-lg bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[550px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'></div>
    </div>
  )
}

export default RightBanner
