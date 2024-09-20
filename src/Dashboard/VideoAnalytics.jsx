import React, { useState } from 'react'
import ArrowIcon from '../assets/icons/filled-arrow-right.png'

import SearchBar from '../Components/SearchBar'
import Gallery from '../Components/Gallery'
import { useParams } from 'react-router-dom'
import { useAuth } from '../provider/authProvider'
import { useEffect } from 'react'
import axios from 'axios'
import VideoPlayer from '../Features/VideoPlayer'
import Transcripts from '../Components/Transcripts'

const VideoAnalytics = () =>  {
  const { token } = useAuth();
  let config = {
    headers: {
      'authorization': `Bearer ${token}`
    }
  }

  const params = useParams();

  const [selectedVideoTranscript, setSelectedVideoTranscript] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(selectedVideoTranscript.Video);
  const [selectedVideoId, setSelectedVideoId] = useState(params.id);


  const fetchVideoTranscript = async()=> {
    await axios.get(`https://signs-5n09.onrender.com/video/${selectedVideoId}`, config)
    .then(res => {
      console.log(res.data.data[0]);
      setSelectedVideoTranscript(res.data.data[0]);
    }).catch(err => console.log(err));
  }

  useEffect(()=>{
    fetchVideoTranscript();
  }, [])


  return (
    <div className='flex flex-col gap-[var(--custom-gap)] max-w-[calc(100%-2rem)] md:h-[calc(100vh-97.19px)]'>
      <div className='grid grid-cols-2 gap-[var(--custom-gap)] items-center'>
        <h1 className='col-span-1 font-bold text-[2rem] text-left'>Video Analytics</h1>
        <SearchBar />
      </div>
      <div className='grid grid-cols-2 gap-[var(--custom-gap)] items-center '>
        <div className='col-span-1 flex flex-col items-center justify-center h-[50vh] w-[100%] min-w-[41.5vw] sm:w-[100%]'>
          <VideoPlayer videoUrl={selectedVideoTranscript.videoUrl} />
        </div>
        <Transcripts selectedVideoId={selectedVideoId} transcripts={selectedVideoTranscript.texts && selectedVideoTranscript.texts}/>
      </div>
    </div>
  )
}

export default VideoAnalytics
