import axios from 'axios';
import React, { useRef, useState } from 'react'
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

  const [videoOrder, setVideoOrder] = useState("");
  const [textOrder, setTextOrder] = useState("");

  const handleTextOrderSelect = (event) => {
    setTextOrder(event.target.value);
    orderItems("texts", event.target.value)
  }

  const handleVideoOrderSelect = (event) => {
    setVideoOrder(event.target.value);
    orderItems("videos", event.target.value);
  }

  const orderItems = (items, order) => {
    if (items === "videos") {
      if (order === "recent") {
        signVideos.sort((video, next) => next.id - video.id);
      } else if (order === "early") {
        signVideos.sort((video, next) => video.id - next.id);
      }
    } else if (items === "texts") {
      if (order === "recent") {
        signTexts.sort((text, next) => next.id - text.id);
      } else if (order === "early") {
        signTexts.sort((text, next) => text.id - next.id);
      }
    }
  }


  const [signVideos, setSignVideos] = useState([]);
  const [videosStatus, setVideoStatus] = useState("Loading translations")

  const fetchVideos = async()=> {
    await axios.get('https://signs-5n09.onrender.com/video/all', config)
    .then(res => {
      console.log(res.data.data);
      setVideoStatus(null)
      setSignVideos(res.data.data.sort((video, next) => next.id - video.id));
    }).catch(err => {
      console.log(err);
      setVideoStatus("No video translations, check again later!");
    });
  }

  const [signTexts, setSignTexts] = useState([]);
  const [textsStatus, setTextsStatus] = useState("Loading translations...");

  const fetchTexts = async()=> {
    await axios.get('https://signs-5n09.onrender.com/text/all', config)
    .then(res => {
      console.log(res.data.data);
      setTextsStatus(null);
      setSignTexts(res.data.data.sort((text, next) => next.id - text.id));
    }).catch(err => {
      console.log(err);
      setTextsStatus("No text translations, check again later!")
    });
  }

  useEffect(()=> {
    fetchTexts();
    fetchVideos();
  }, [token])

  return (
    <div className='flex flex-row flex-wrap lg:grid lg:grid-cols-2 w-[85%] h-[100%] gap-[2rem]'>
      <div className='flex flex-col lg:col-span-1 w-[100%] gap-[1rem] min-w-[100%]'>
        <select onChange={handleVideoOrderSelect} value={videoOrder} disabled={signVideos[0]? false: true} name='videos' id='video-order-select' className='p-[var(--button-padding)] rounded-[1.25rem] w-[100%] sm:w-[20rem] text-[1rem] text-[var(--subtext-color)] font-[500]'>
          <option value="recent">Sort by: Most Recent</option> 
          <option value="early">Sort by: Most Early</option>
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
                { videosStatus? videosStatus: signVideos[0]?
                  signVideos.map((translation, idx) => 
                  <>
                    <a key={idx} href={`/video-analytics/${translation.id}`}>
                      <div className='flex flex-row justify-between'>
                        <p className='w-[25%] text-[var(--secondary-color)] cursor-pointer'>{translation.id}</p>
                        <p className='w-[25%]'>{translation.texts? `${translation.texts.length} translations` : "0 Translation"}</p>
                        <p className='w-[25%] text-center'>{translation.texts? `${translation.texts.length} Contributions` : "0 Contibutions"}</p>
                        <p className='w-[25%] text-center'>{translation?.texts.reduce((highest, text)=> text.rating > highest.rating? text: highest).rating || "Null"}</p>
                      </div>
                    </a>
                    <hr></hr>
                  </>)
                  : videosStatus}
              </div>
            </div>
        </div>
      </div>
      <div className='flex flex-col lg:col-span-1 w-[100%] gap-[1rem] min-w-[100%]'>
        <select onChange={handleTextOrderSelect} value={textOrder} disabled={signTexts[0]? false: true} name="texts" id="texts-order-select" className='p-[var(--button-padding)] rounded-[1.25rem] w-[100%] sm:w-[20rem] text-[1rem] text-[var(--subtext-color)] font-[500]'>
            <option value="recent">Sort by: Most Recent</option>
            <option value="early">Sort by: Most Early</option>
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
                { textsStatus? textsStatus: signTexts[0]?
                  signTexts.map((translation, idx) => 
                  <>
                    <a key={idx} href={`/text-analytics/${translation.id}`}>
                      <div className='flex flex-row justify-between'>
                        <p className='w-[25%] text-[var(--secondary-color)] cursor-pointer'>{translation.id}</p>
                        <p className='w-[25%]'>{translation.videoUrls? `${translation.videoUrls.length} translations`: "0 translations"}</p>
                        <p className='w-[25%] text-center'>{translation.videoUrls? `${translation.videoUrls.length} Contributions`: "0 Contribution"}</p>
                        <p className='w-[25%] text-center'>{translation.videoUrls?.reduce((top, video)=> video.rating > top.rating? video: top).rating || "Null"}</p>
                      </div>
                    </a>
                    <hr></hr>
                  </>)
                : textsStatus }
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Library
