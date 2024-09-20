import React from 'react'
import Thumbnail from "../assets/illustrations/video-illustration.png"

const Gallery = ({selectedTextId, translations}) => {

  return (
    <div className='col-span-1 grid grid-flow-row grid-cols-3 w-[100%] min-w-[41.5vw] h-[50vh] gap-[var(--custom-gap)] overflow-y-auto'>
    { translations && translations[0]? 
      translations.map(video => 
      <div className='col-span-1 row-span-1 flex flex-col items-center justify-between'>
        <video controls src={video.videoUrl? video.videoUrl: null} className='w-[auto] h-[10rem]' />
        <p>Rating {video.rating}</p>
      </div>): "Loading..."
    }
    </div>
  )
}

export default Gallery
