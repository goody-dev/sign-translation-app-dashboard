import React, { useState } from 'react'
import ArrowIcon from '../assets/icons/filled-arrow-right.png'

import SearchBar from '../Components/SearchBar'
import Gallery from '../Components/Gallery'

const TextAnalytics = () =>  {
  const [selectedText, setSelectedText] = useState("");
  const [selectedTextId, setSelectedTextId] = useState("");

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

  return (
    <div className='flex flex-col gap-[var(--custom-gap)] max-w-[calc(100%-2rem)] md:h-[calc(100vh-97.19px)]'>
      <div className='grid grid-cols-2 gap-[var(--custom-gap)] items-center'>
        <h1  className='col-span-1 font-bold text-[2rem] text-left'>Text Analytics</h1>
        <SearchBar />
      </div>
      <div className='grid grid-cols-2 gap-[var(--custom-gap)] items-center '>
        <div className='col-span-1 flex flex-col items-center justify-center p-[var(--button-padding)] bg-[var(--white-background)] h-[50vh] w-[100%] sm:w-[100%]'>
            <p className='text-center text-[20px] font-semibold text-wrap'>{selectedText.length? selectedText: "Search a text..."}</p>
        </div>
        <Gallery selectedTextId={selectedTextId} />
      </div>
      <div className='flex flex-row w-[100%] justify-between'>
        <button className={'bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)] opacity-[0.3]'}><img className='rotate-180 h-[var(vh-icon)]' src={ArrowIcon}/>Previous</button>
        <button className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'>Submit <img className='h-[var(vh-icon)]' src={ArrowIcon} /></button>
      </div>
    </div>
  )
}

export default TextAnalytics
