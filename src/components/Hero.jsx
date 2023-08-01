import React from 'react'

const Hero = () => {
  return (
    <div className='w-full mt-32'>
      <div className='flex justify-center items-center mb-10'>
        <h1 className='font-bold text-5xl text-[#2F2F30]'>Find your next top tech job in 1 week.</h1>
      </div>
      <div className='flex justify-center items-center text-center mb-16'>
        <p className='text-2xl leading-9'><span className='font-bold'><mark>Are you a top 2%</mark></span> Software Engineer, Product Manager or Data Scientist? <br /> Let leading Indian technology <span className='font-bold'><mark>companies compete to hire you.</mark></span></p>
      </div>
      <div className='flex justify-center items-center mb-2'>
        <button className='w-52 h-14 text-lg rounded-lg text-white font-semibold tracking-widest bg-[#3288e3] transition delay-100 hover:text-black hover:bg-green-500'>APPLY TO JOIN</button>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-[#8E85A4] text-sm'>100% free. It takes only 5 minutes</p>
      </div>
    </div>
  )
}

export default Hero