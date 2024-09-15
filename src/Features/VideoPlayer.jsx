

import React, { useRef } from 'react'

const VideoPlayer = () => {

  const videoRef = useRef();

  const handlePlay = () => {

  }
  const handlePause = () => {

  }


  return (
    <div className='flex flex-col justify-end items-end h-[50vh] w-[100%] sm:w-[100%] bg-[var(--black-background)]'>
    {/* <div className='block absolute mb-[50vh] mr-[4.5%]'>
      <div className='flex flex-row absolute items-center justify-center bg-[var(--white-background)] p-[var(--button-padding)] mt-0'>
        <p>ASL</p>
        <img src={ArrowDown}/>
      </div>
    </div> */}
      <video ref={videoRef} controls className='h-[100%] w-[100%]'>
        <source src="" />
      </video>
      <div className='absolute flex flex-row self-center gap-[var(--custom-gap)] mb-[calc(2*var(--custom-gap))]'>
        <button onClick={handlePlay}>
          <img src={PlayIcon} className='cursor-pointer'/>
        </button>
        <button onClick={handlePause}>
          <img src={StopIcon} className='cursor-pointer'/>
        </button>
      </div>
  </div>
  )
}

export default VideoPlayer
