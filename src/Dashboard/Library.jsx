import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import '../App.css'

const Library = () => {
  const [signVideos, setSignVideos] = useState([]);
  const fetchVideos = async()=> {
    await axios.get('https://signs-5n09.onrender.com/video/all')
    .then(res => {
      //console.log(res.data);
      setSignVideos(res.data.data);
    }).catch(err => console.log(err));
  }

  const [signTexts, setSignTexts] = useState([]);
  const fetchTexts = async()=> {
    await axios.get('https://signs-5n09.onrender.com/text/all')
    .then(res => {
      //console.log(res.data);
      setSignTexts(res.data.data);
    }).catch(err => console.log(err));
  }

  useEffect(()=> {
    fetchTexts();
    fetchVideos();
  }, [])

  const videoToTextTranslations = [
    {
      link: "sign1.translate.io",
      translations: 5,
      contributions: 135,
      topRating: 86,
    },
    {
      link: "sign1.translate.io",
      translations: 5,
      contributions: 135,
      topRating: 86,
    },
    {
      link: "sign1.translate.io",
      translations: 5,
      contributions: 135,
      topRating: 86,
    },
    {
      link: "sign1.translate.io",
      translations: 5,
      contributions: 135,
      topRating: 86,
    }
  ]

  const textToVideoTranslations = [
    {
      link: "sign1.translate.io",
      translations: 5,
      contributions: 35,
      topRating: 88,
    },
    {
      link: "sign1.translate.io",
      translations: 5,
      contributions: 13,
      topRating: 86,
    },
    {
      link: "sign1.translate.io",
      translations: 5,
      contributions: 135,
      topRating: 84,
    },
    {
      link: "sign1.translate.io",
      translations: 5,
      contributions: 115,
      topRating: 89,
    },
    {
      link: "sign1.translate.io",
      translations: 5,
      contributions: 15,
      topRating: 89,
    }
  ]

  return (
    <div className='flex flex-row w-[85%] h-[100%] gap-[2rem]'>
      <div className='flex flex-col w-[calc(50%-1rem)] gap-[1rem]'>
        <select className='p-[var(--button-padding)] rounded-[1.25rem] w-[20rem] text-[1rem] text-[var(--subtext-color)] font-[500]'>
            <option>Sort by: Most Recent</option>
        </select>
        <div className='flex flex-col bg-[var(--white-background)] p-[var(--card-padding)] rounded-[1rem] gap-[var(--custom-gap)]'>
            <h2 className='text-[var(--subtext-color)] font-[500]'>Video to Text Translations</h2>
            <div className='flex flex-col text-[0.8rem] gap-[calc(var(--custom-gap)/2)]'>
              <div className='flex flex-row justify-between bg-[var(--faint-blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--xsubtext-color)] font-[500]'>
                <p className='w-[25%]'>video ID</p>     
                <p className='w-[25%]'>Translations</p>     
                <p  className='w-[25%] text-center'>Contributions</p>     
                <p className='w-[25%] text-right'>Top Rating</p>
              </div>
              <div className='flex flex-col gap-[calc(var(--custom-gap)/2)]'>
                {
                  videoToTextTranslations.map((translation, idx) => 
                  <>
                    <div key={idx} className='flex flex-row justify-between'>
                      <p className='w-[25%] text-[var(--secondary-color)] cursor-pointer'>{translation.link}</p>
                      <p className='w-[25%]'>{`${translation.translations} translations`}</p>
                      <p className='w-[25%] text-center'>{`${translation.contributions} contributions`}</p>
                      <p className='w-[25%] text-center'>{`${translation.topRating}%`}</p>
                    </div>
                    <hr></hr>
                  </>)
                }
              </div>
            </div>
        </div>
      </div>
      <div className='flex flex-col w-[calc(50%-1rem)] gap-[1rem]'>
        <select className='p-[var(--button-padding)] rounded-[1.25rem] w-[20rem] text-[1rem] text-[var(--subtext-color)] font-[500]'>
            <option>Sort by: Most Recent</option>
        </select>
        <div className='flex flex-col bg-[var(--white-background)] p-[var(--card-padding)] rounded-[1rem] gap-[var(--custom-gap)]'>
            <h2 className='text-[var(--subtext-color)] font-[500]'>Text to Video Translations</h2>
            <div className='flex flex-col text-[0.8rem] gap-[calc(var(--custom-gap)/2)]'>
              <div className='flex flex-row justify-between bg-[var(--faint-blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--xsubtext-color)] font-[500]'>
                <p className='w-[25%]'>Text ID</p>     
                <p className='w-[25%]'>Translations</p>     
                <p className='w-[25%] text-center'>Contributions</p>     
                <p className='w-[25%] text-right'>Top Rating</p>
              </div>
              <div className='flex flex-col gap-[calc(var(--custom-gap)/2)]'>
                {
                  textToVideoTranslations.map((translation, idx) => 
                  <>
                    <div key={idx} className='flex flex-row justify-between'>
                      <p className='w-[25%] text-[var(--secondary-color)] cursor-pointer'>{translation.link}</p>
                      <p className='w-[25%]'>{`${translation.translations} translations`}</p>
                      <p className='w-[25%] text-center'>{`${translation.contributions} contributions`}</p>
                      <p className='w-[25%] text-center'>{`${translation.topRating} %`}</p>
                    </div>
                    <hr></hr>
                  </>)
                }
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Library
