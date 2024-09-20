import React from 'react'
import Thumbnail from "../assets/illustrations/video-illustration.png"

const Transcripts = ({transcripts}) => {

  return (
    <div className='flex flex-col w-[100%] min-w-[41.5vw] h-[50vh] gap-[var(--custom-gap)] overflow-y-auto'>
    { transcripts && transcripts[0]? 
      transcripts.map(text => 
      <>
        <div className='flex flex-row justify-between items-center'>
          <p>{text.text}</p>
          <p>Rating {text.rating}</p>
        </div>
        <hr></hr>
      </>
      ): "Loading..."
    }
    </div>
  )
}

export default Transcripts
