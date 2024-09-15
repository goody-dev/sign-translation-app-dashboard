import React, { useState } from 'react'
import Thumbnail from "../assets/illustrations/video-illustration.png"
import ArrowIcon from '../assets/icons/filled-arrow-right.png'

const TextAnalytics = () => {
  const textSVideos = [
    {
      thumbnail: "#",
      rating: 77,
    },
    {
      thumbnail: "#",
      rating: 77,
    },
    {
      thumbnail: "#",
      rating: 87,
    },
    {
      thumbnail: "#",
      rating: 79,
    },
    ,
    {
      thumbnail: "#",
      rating: 79,
    },
    {
      thumbnail: "#",
      rating: 79,
    },
    {
      thumbnail: "#",
      rating: 79,
    }
  ]

  const [inputText, setInputText] = useState("");

  return (
    <div className='flex flex-col gap-[var(--custom-gap)] w-[100%] md:h-[calc(100vh-97.19px)]'>
      <div className='flex flex-row justify-between items-center w-[100%]'>
        <h1  className='font-bold text-[2rem]'>Text Analytics</h1>
        <div>
          <input placeholder='Find a text'/>
        </div>
      </div>
      <div className='flex flex-row items-center w-[100%] gap-[var(--custom-gap)]'>
        <div className='flex flex-col items-center justify-center p-[var(--button-padding)] bg-[var(--white-background)] h-[50vh] w-[100%] sm:w-[50%]'>
            <textarea onChange={(event) => handleInputText(event)} value={inputText} className='text-center align-middle outline-none text-[2rem] text-[var(--input-color)] font-semibold text-wrap w-[100%] h-auto' placeholder='Enter text here...'></textarea>
        </div>
        <div className='flex flex-row flex-wrap w-[100%] h-[50vh] sm:w-[50%] gap-[var(--custom-gap)]'>
          {
            textSVideos.map(video => 
            <div className='flex flex-col items-center'>
              <img src={Thumbnail} className='w-[8rem] h-[8rem]' />
              <p>Rating {video.rating}%</p>
            </div>)
          }
        </div>
      </div>
      <div className='flex flex-row justify-between'>
        <button className={'bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)] opacity-[0.3]'}><img className='rotate-180 h-[var(vh-icon)]' src={ArrowIcon}/>Previous</button>
        <button className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'>Submit <img className='h-[var(vh-icon)]' src={ArrowIcon} /></button>
      </div>
    </div>
  )
}

export default TextAnalytics
