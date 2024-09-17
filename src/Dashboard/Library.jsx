import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import '../App.css'
import ProcessingLoader from '../Components/ProcessingLoader';
import { useAuth } from "../provider/authProvider"

const Library = () => {
  const { token } = useAuth();
  let config = {
    headers: {
      'authorization': `Bearer ${token}`
    }
  }

  const [signVideos, setSignVideos] = useState([]);
  const fetchVideos = async()=> {

    await axios.get('https://signs-5n09.onrender.com/video/all', config)
    .then(res => {
      console.log(res.data.data);
      setSignVideos(res.data.data);
    }).catch(err => console.log(err));
  }

  const [signTexts, setSignTexts] = useState([]);
  const fetchTexts = async()=> {
    await axios.get('https://signs-5n09.onrender.com/text/all', config)
    .then(res => {
      console.log(res.data.data);
      setSignTexts(res.data.data);
    }).catch(err => console.log(err));
  }

  useEffect(()=> {
    fetchTexts();
    fetchVideos();
  }, [token])

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
                <p className='w-[25%] text-center'>Contributions</p>     
                <p className='w-[25%] text-right'>Top Rating</p>
              </div>
              <div className='flex flex-col gap-[calc(var(--custom-gap)/2)]'>
                { signVideos[0]?
                  signVideos.map((translation, idx) => 
                  <>
                    <div key={idx} className='flex flex-row justify-between'>
                      <p className='w-[25%] text-[var(--secondary-color)] cursor-pointer'>{translation.id}</p>
                      <p className='w-[25%]'>{translation.texts? `${translation.texts.length} translations` : "0 Translation"}</p>
                      <p className='w-[25%] text-center'>{translation.texts? `${translation.texts.length} Contributions` : "0 Contibutions"}</p>
                      <p className='w-[25%] text-center'>{translation.texts.reduce((highest, text)=> text.rating > highest.rating? text: highest).rating}</p>
                    </div>
                    <hr></hr>
                  </>)
                  : "Loading Translations..."}
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
                { signTexts[0]?
                  signTexts.map((translation, idx) => 
                  <>
                    <div key={idx} className='flex flex-row justify-between'>
                      <p className='w-[25%] text-[var(--secondary-color)] cursor-pointer'>{translation.id}</p>
                      <p className='w-[25%]'>{translation.videoUrls? `${translation.videoUrls.length} translations`: "0 translations"}</p>
                      <p className='w-[25%] text-center'>{translation.videoUrls? `${translation.videoUrls.length} Contributions`: "0 Contribution"}</p>
                      <p className='w-[25%] text-center'>{translation.videoUrls.length? translation.videoUrls.reduce((top, video)=> video.rating > top.rating? video: top).rating :"Null"}</p>
                    </div>
                    <hr></hr>
                  </>)
                : "Loading Translations..." }
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Library
