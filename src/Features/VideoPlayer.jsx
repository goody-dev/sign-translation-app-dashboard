import React, { useEffect, useRef, useState } from 'react'
import PlayIcon from '../assets/icons/icons8-play-button.png'
import StopIcon from '../assets/icons/icons8-pause-button.png'
import ArrowIcon from '../assets/icons/filled-arrow-right.png'
import ArrowDown from '../assets/icons/filled-arrow-down.png'

const VideoPlayer = ({videoUrl}) => {
  const [playing, setPlaying] = useState([false]);
  useEffect(() => {
    if(videoUrl) {
      //console.log(signVideos[videoIndex].videoUrl);
      playerRef.current.src = videoUrl;
      playing && playerRef.current.pause();
    }
  }, [videoUrl]);

  const playerRef = useRef();

  const handlePlay = () => {
    playerRef.current.play();
    setPlaying(true);
  }
  const handlePause = () => {
    playerRef.current.pause();
    setPlaying(false);
  }


  return (
  <div className='flex flex-col justify-end items-end h-[50vh] w-[100%] sm:w-[100%] bg-[var(--black-background)]'>
    {/* <div className='absolute self-end mb-[50vh] mr-[60px]'>
      <div className='absolute flex flex-row items-center justify-center bg-[var(--white-background)] p-[var(--button-padding)]'> 
      <p>ASL</p>
      <img src={ArrowDown}/>
      </div>
    </div> */}
    <video id='video-player' ref={playerRef} aria-label='view box' aria-description='Displays video to be translated' className='h-[100%] w-[100%]'>
    </video>
    <div aria-controls='video-player' className='absolute flex flex-row self-center gap-[var(--custom-gap)] mb-[calc(2*var(--custom-gap))]'>
      <button onClick={handlePlay} aria-description='play video'>
        <img src={PlayIcon} className='cursor-pointer h-[40px]' alt='play icon'/>
      </button>
      <button onClick={handlePause} aria-description='pause video'>
        <img src={StopIcon} className='cursor-pointer h-[40px]' alt='stop icon'/>
      </button>
    </div>
  </div>
  )
}

export default VideoPlayer
