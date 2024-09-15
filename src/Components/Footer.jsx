import React from 'react'
import Logo from '../assets/icons/LOGO.png'
import FacebookIcon from '../assets/icons/facebook-icon.svg'
import XIcon from '../assets/icons/x-icon.svg'
import InstagramIcon from '../assets/icons/instagram-icon.png'

const Footer = () => {
  return (
    <div className='flex flex-row flex-wrap items-center justify-center w-[100%] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)] gap-[var(--custom-gap)] sm:flex-row sm:items-center sm:gap-0 sm:justify-between'>
      <div className='flex flex-col gap-[1rem]'>
        <img src={Logo} alt='App Logo' className='w-[4rem]'/>
        <div className='flex flex-row gap-[0.25rem] w-[4rem]'>
            <a href='#' aria-label='Follow us on Facebook'><img src={FacebookIcon} alt='Facebook logo'/></a>
            <a href='#' aria-label='Follow us on X, Formerly Twitter'><img src={XIcon} alt='X logo'/></a>
            <a href='#' aria-label='Follow us on Instagram'><img src={InstagramIcon} alt='Instagram Logo'/></a>
        </div>
      </div>
      <p className='hidden sm:block text-[1rem]'>Copyright reserved 2024.</p>
      <div className='flex flex-row gap-[var(--custom-gap)] text-right text-nowrap'>
        <div className='flex flex-col gap-[calc(var(--custom-gap)/2)] '>
          <a href='#' className='text-[1rem]'>About</a>
          <a href='#' className='text-[1rem]'>Cookies</a>
        </div>
        <div className='flex flex-col gap-[calc(var(--custom-gap)/2)] '>
          <a href='#' className='text-[1rem]'>Privacy Policy</a>
          <a href='#' className='text-[1rem]'>Terms & Condition</a>
        </div>
      </div>
      <p className='sm:hidden text-[1rem]'>Copyright reserved 2024.</p>
    </div>
  )
}

export default Footer
