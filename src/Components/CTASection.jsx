import React from 'react'
import ArrowRight from '../assets/icons/filled-arrow-right.png'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <div className='flex flex-col py-[3rem] px-[1.5rem] w-[100%] max-w-[100vw] gap-[var(--custom-gap)] sm:flex-row sm:justify-center sm:gap-[5rem] sm:flex-wrap sm:px-[9.9rem] sm:py-[3rem]'>
      <div id='TAT' className='flex flex-col items-center gap-[var(--custom-gap)] text-center border-2 p-[1.5rem] rounded-[0.5rem] min-w-[min-content] sm:w-[40%] sm:p-[var(--custom-padding)]'>
        <h2 className='text-[var(--secondary-color)] text-[2.5rem] font-semibold leading-[3rem]'>Transcribe Sign <br/>to Text</h2>
        <Link to='/user/translate-video'><button tabIndex={0} className='flex flex-row shadow-[var(--button-shadow)] items-center gap-[0.25rem] border-[0.16rem] border-solid border-[var(--secondary-color)] bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.25rem] text-[var(--tertiary-color)] text-[1rem] font-normal sm:w-[max-content]'>Contribute <img src={ArrowRight} className='h-[0.8rem]'/></button></Link>
      </div>
      <div id='TTA' className='flex flex-col items-center gap-[var(--custom-gap)] text-center border-2 p-[1.5rem] rounded-[0.5rem] min-w-[min-content] sm:w-[40%] sm:p-[var(--custom-padding)]'>
        <h2 className='text-[var(--secondary-color)] text-[2.5rem] font-semibold leading-[3rem]'>Translate Text <br/>to Sign</h2>
        <Link to='/user/translate-text'><button tabIndex={0} className='flex flex-row shadow-[var(--button-shadow)] items-center gap-[0.25rem] border-[0.16rem] border-solid border-[var(--secondary-color)] bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.25rem] text-[var(--tertiary-color)] text-[1rem] font-normal sm:w-[max-content]'>Contribute <img src={ArrowRight} className='h-[0.8rem]'/></button></Link>
      </div>
    </div>
  )
}

export default CTASection
