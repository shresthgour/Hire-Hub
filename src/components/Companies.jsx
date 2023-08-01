import React from 'react'
import Company from '../assets/Companies.png'

const Companies = () => {
  return (
    <div className='flex justify-center items-center text-center flex-col mt-16'>
      <h2 className='text-2xl font-semibold pb-10'>LEADING COMPANIES BUILD TEAMS ON HIREHUB</h2>
      <img src={Company} alt="Companies" className='w-[60%]' />
    </div>
  )
}

export default Companies