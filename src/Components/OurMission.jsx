import React from 'react'

const OurMission = () => {
  return (
    <div className='w-[100%] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)]'>
      <div id='mission-card' className='flex flex-col w-[100%] bg-[var(--darkblue-background)] p-[var(--card-padding)] text-[var(--tertiary-color)] rounded-[var(--custom-radius)] gap-[var(--custom-gap)] sm:flex-row sm:items-center sm:gap-0'>
        <h1 className='font-bold text-[4rem] sm:leading-[77px] sm:w-[50%]'>Our <br/>Mission</h1>
        <p className='font-normal text-[1.25rem] sm:w-[50%]'>Our mission is to foster inclusivity and accessibility through the power of communication. We are dedicated to promoting accessibility and facilitating understanding through the power of community. Join us in our mission to create a world where communication is barrier-free and everyone can participate equally. Together, we can make a difference in the lives of millions by promoting inclusivity, understanding, and accessibility through innovative solutions.</p>
      </div>
    </div>
  )
}

export default OurMission
