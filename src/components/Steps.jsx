import React from 'react';
import Step1 from '../assets/Step1.png'
import Step2 from '../assets/Step2.png'
import Step3 from '../assets/Step3.png'

const Steps = () => {
  return (
    <div>
      <div className='flex justify-center items-center mt-16 space-x-10'>
        <div className='flex justify-center items-center text-center flex-col h-[350px] mb-7'>
          <img src={Step1} alt="Step1" className='w-[8.7rem] mb-6' />
          <h2 className='font-bold tracking-widest '>STEP 1: COMPLETE PROFILE</h2>
          <p className='mt-7 text-sm'>Once you are approved, we showcase you to <br /> leading Indian technology startups</p>
        </div>

        <div className='flex justify-center items-center text-center flex-col mb-7'>
          <img src={Step2} alt="Step1" className='w-28 mb-6' />
          <h2 className='font-bold tracking-widest '>STEP 2: RECEIVE JOB OFFERS</h2>
          <p className='mt-7 text-sm'>Once you are approved, we showcase you to <br /> leading Indian technology startups</p>
        </div>

        <div className='flex justify-center items-center text-center flex-col mb-7  '>
          <img src={Step3} alt="Step1" className='relative w-28 bottom-3 mb-6' />
          <h2 className='relative font-bold tracking-widest bottom-3'>STEP 3: ACCEPT DREAM JOB</h2>
          <p className='relative mt-7 bottom-3 text-sm'>Compare your offers and accept the best one. Hired!</p>
        </div>
      </div>
    </div>
  )
}

export default Steps